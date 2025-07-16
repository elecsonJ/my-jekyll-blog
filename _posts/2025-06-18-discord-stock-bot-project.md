---
layout: post
title: "실시간 주식 가격 알림 봇 만들기: Discord + Python 프로젝트"
date: 2025-06-18
categories: [projects_personal]
tags: [Python, Discord, API, 웹스크래핑, 프로젝트, 자동화]
lang: ko
description: "Python과 Discord API를 활용하여 실시간 주식 가격 알림 봇을 만드는 프로젝트를 소개합니다."
---

# 실시간 주식 가격 알림 봇 만들기

주식 투자자들을 위한 Discord 알림 봇을 만들어보겠습니다!

## 프로젝트 개요

### 🎯 목표
- 관심 종목의 실시간 가격 모니터링
- 목표가 도달 시 Discord 알림 발송
- 일일 시황 요약 리포트 제공

### 🛠️ 사용 기술
- Python 3.9+
- Discord.py
- yfinance (Yahoo Finance API)
- APScheduler (스케줄링)
- SQLite (데이터 저장)

## 프로젝트 구조

```
stock-alert-bot/
├── bot.py              # 메인 봇 파일
├── config.py           # 설정 파일
├── database.py         # 데이터베이스 관리
├── stock_monitor.py    # 주식 모니터링 로직
├── requirements.txt    # 의존성 목록
└── data/
    └── stocks.db      # SQLite 데이터베이스
```

## 핵심 코드 구현

### 1. Discord 봇 기본 설정

```python
# bot.py
import discord
from discord.ext import commands
import asyncio
from config import DISCORD_TOKEN, COMMAND_PREFIX

class StockBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        super().__init__(command_prefix=COMMAND_PREFIX, intents=intents)
        
    async def setup_hook(self):
        # 봇 시작 시 실행될 코드
        await self.load_extension('cogs.stock_commands')
        print(f'{self.user} 봇이 준비되었습니다!')

bot = StockBot()

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')
    # 상태 메시지 설정
    await bot.change_presence(
        activity=discord.Activity(
            type=discord.ActivityType.watching,
            name="주식 시장 📈"
        )
    )
```

### 2. 주식 모니터링 시스템

```python
# stock_monitor.py
import yfinance as yf
from datetime import datetime
import asyncio
from database import Database

class StockMonitor:
    def __init__(self, bot):
        self.bot = bot
        self.db = Database()
        self.monitoring = False
        
    async def start_monitoring(self):
        """주식 가격 모니터링 시작"""
        self.monitoring = True
        while self.monitoring:
            alerts = self.db.get_all_alerts()
            
            for alert in alerts:
                ticker = alert['ticker']
                target_price = alert['target_price']
                user_id = alert['user_id']
                alert_type = alert['alert_type']  # 'above' or 'below'
                
                try:
                    stock = yf.Ticker(ticker)
                    current_price = stock.info['currentPrice']
                    
                    # 알림 조건 확인
                    if self.check_alert_condition(current_price, target_price, alert_type):
                        await self.send_alert(user_id, ticker, current_price, target_price, alert_type)
                        # 알림 발송 후 제거
                        self.db.remove_alert(alert['id'])
                        
                except Exception as e:
                    print(f"Error monitoring {ticker}: {e}")
            
            # 30초마다 체크
            await asyncio.sleep(30)
    
    def check_alert_condition(self, current_price, target_price, alert_type):
        """알림 조건 확인"""
        if alert_type == 'above':
            return current_price >= target_price
        else:  # below
            return current_price <= target_price
    
    async def send_alert(self, user_id, ticker, current_price, target_price, alert_type):
        """Discord 알림 발송"""
        user = await self.bot.fetch_user(user_id)
        
        embed = discord.Embed(
            title="🚨 주식 가격 알림",
            color=discord.Color.green() if alert_type == 'above' else discord.Color.red(),
            timestamp=datetime.now()
        )
        
        embed.add_field(
            name="종목",
            value=f"{ticker}",
            inline=True
        )
        embed.add_field(
            name="현재가",
            value=f"${current_price:.2f}",
            inline=True
        )
        embed.add_field(
            name="목표가",
            value=f"${target_price:.2f}",
            inline=True
        )
        
        condition = "이상" if alert_type == 'above' else "이하"
        embed.description = f"{ticker}가 목표가 ${target_price:.2f} {condition}에 도달했습니다!"
        
        await user.send(embed=embed)
```

### 3. 명령어 구현

```python
# cogs/stock_commands.py
from discord.ext import commands
import yfinance as yf
import discord

class StockCommands(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        
    @commands.command(name='가격')
    async def price(self, ctx, ticker: str):
        """현재 주식 가격 조회"""
        try:
            stock = yf.Ticker(ticker.upper())
            info = stock.info
            
            embed = discord.Embed(
                title=f"{info.get('longName', ticker.upper())} 주식 정보",
                color=discord.Color.blue()
            )
            
            embed.add_field(
                name="현재가",
                value=f"${info.get('currentPrice', 'N/A'):.2f}",
                inline=True
            )
            embed.add_field(
                name="일일 변동",
                value=f"{info.get('regularMarketChangePercent', 0):.2f}%",
                inline=True
            )
            embed.add_field(
                name="거래량",
                value=f"{info.get('volume', 0):,}",
                inline=True
            )
            
            await ctx.send(embed=embed)
            
        except Exception as e:
            await ctx.send(f"❌ 주식 정보를 가져올 수 없습니다: {ticker}")
    
    @commands.command(name='알림설정')
    async def set_alert(self, ctx, ticker: str, price: float, condition: str):
        """가격 알림 설정 (조건: above/below)"""
        if condition not in ['above', 'below']:
            await ctx.send("❌ 조건은 'above' 또는 'below'만 가능합니다.")
            return
        
        # 데이터베이스에 알림 저장
        alert_id = self.bot.db.add_alert(
            user_id=ctx.author.id,
            ticker=ticker.upper(),
            target_price=price,
            alert_type=condition
        )
        
        await ctx.send(
            f"✅ 알림이 설정되었습니다!\n"
            f"종목: {ticker.upper()}\n"
            f"조건: ${price:.2f} {'이상' if condition == 'above' else '이하'}"
        )

async def setup(bot):
    await bot.add_cog(StockCommands(bot))
```

### 4. 데이터베이스 관리

```python
# database.py
import sqlite3
from datetime import datetime

class Database:
    def __init__(self, db_path='data/stocks.db'):
        self.db_path = db_path
        self.init_db()
    
    def init_db(self):
        """데이터베이스 초기화"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS alerts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                ticker TEXT NOT NULL,
                target_price REAL NOT NULL,
                alert_type TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def add_alert(self, user_id, ticker, target_price, alert_type):
        """알림 추가"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO alerts (user_id, ticker, target_price, alert_type)
            VALUES (?, ?, ?, ?)
        ''', (user_id, ticker, target_price, alert_type))
        
        alert_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        return alert_id
    
    def get_all_alerts(self):
        """모든 알림 조회"""
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM alerts')
        alerts = [dict(row) for row in cursor.fetchall()]
        
        conn.close()
        return alerts
```

### 5. 일일 리포트 기능

```python
# daily_report.py
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import yfinance as yf
from datetime import datetime

class DailyReporter:
    def __init__(self, bot, channel_id):
        self.bot = bot
        self.channel_id = channel_id
        self.scheduler = AsyncIOScheduler()
        
    def start(self):
        """일일 리포트 스케줄러 시작"""
        # 매일 오후 6시에 리포트 발송
        self.scheduler.add_job(
            self.send_daily_report,
            'cron',
            hour=18,
            minute=0
        )
        self.scheduler.start()
    
    async def send_daily_report(self):
        """일일 시황 리포트 생성 및 발송"""
        channel = self.bot.get_channel(self.channel_id)
        
        # 주요 지수 정보
        indices = {
            '^GSPC': 'S&P 500',
            '^DJI': 'Dow Jones',
            '^IXIC': 'NASDAQ',
            '^KS11': 'KOSPI'
        }
        
        embed = discord.Embed(
            title="📊 오늘의 시장 요약",
            color=discord.Color.gold(),
            timestamp=datetime.now()
        )
        
        for symbol, name in indices.items():
            try:
                ticker = yf.Ticker(symbol)
                info = ticker.info
                change = info.get('regularMarketChangePercent', 0)
                
                emoji = "📈" if change > 0 else "📉"
                embed.add_field(
                    name=f"{emoji} {name}",
                    value=f"{change:+.2f}%",
                    inline=True
                )
            except:
                continue
        
        await channel.send(embed=embed)
```

## 실행 방법

1. **필요한 패키지 설치**
```bash
pip install -r requirements.txt
```

2. **Discord 봇 토큰 설정**
```python
# config.py
DISCORD_TOKEN = 'your-bot-token-here'
COMMAND_PREFIX = '!'
```

3. **봇 실행**
```bash
python bot.py
```

## 프로젝트 확장 아이디어

1. **기술적 분석 지표 추가**
   - RSI, MACD 등 기술 지표 계산
   - 차트 이미지 생성 및 전송

2. **포트폴리오 관리**
   - 사용자별 보유 종목 관리
   - 수익률 계산 및 추적

3. **뉴스 알림**
   - 관심 종목 관련 뉴스 수집
   - 중요 뉴스 실시간 알림

4. **백테스팅 기능**
   - 투자 전략 시뮬레이션
   - 과거 데이터 기반 성과 분석

## 마치며

이 프로젝트를 통해 Discord 봇 개발, API 활용, 실시간 데이터 처리 등 다양한 기술을 경험할 수 있습니다. 
GitHub에 전체 소스코드를 공개했으니 자유롭게 활용해보세요!

**다음 프로젝트에서는 AI를 활용한 주식 가격 예측 모델을 만들어보겠습니다.**
