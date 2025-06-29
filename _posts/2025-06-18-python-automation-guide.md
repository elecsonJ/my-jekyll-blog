---
layout: post
title: "Python으로 일상 업무 자동화하기: 파일 정리부터 이메일 발송까지"
date: 2025-06-18
categories: [automation]
tags: [Python, 자동화, 스크립트, 생산성, 업무효율화]
lang: ko
description: "Python을 활용하여 반복적인 일상 업무를 자동화하는 실용적인 방법들을 소개합니다."
---

# Python으로 일상 업무 자동화하기

매일 반복되는 단순 업무들, Python으로 자동화해보세요!

## 1. 파일 정리 자동화

```python
import os
import shutil
from datetime import datetime

def organize_downloads():
    downloads_path = os.path.expanduser("~/Downloads")
    
    # 파일 타입별 폴더 생성
    folders = {
        'Images': ['.jpg', '.jpeg', '.png', '.gif'],
        'Documents': ['.pdf', '.docx', '.txt', '.xlsx'],
        'Videos': ['.mp4', '.avi', '.mov'],
        'Archives': ['.zip', '.rar', '.tar']
    }
    
    for folder in folders:
        folder_path = os.path.join(downloads_path, folder)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
    
    # 파일 이동
    for file in os.listdir(downloads_path):
        file_path = os.path.join(downloads_path, file)
        if os.path.isfile(file_path):
            file_ext = os.path.splitext(file)[1].lower()
            
            for folder, extensions in folders.items():
                if file_ext in extensions:
                    destination = os.path.join(downloads_path, folder, file)
                    shutil.move(file_path, destination)
                    print(f"Moved {file} to {folder}")
                    break
```

## 2. 이메일 자동 발송

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_weekly_report(recipients, report_data):
    sender_email = "your_email@gmail.com"
    sender_password = "your_app_password"
    
    message = MIMEMultipart("alternative")
    message["Subject"] = f"주간 업무 리포트 - {datetime.now().strftime('%Y-%m-%d')}"
    message["From"] = sender_email
    message["To"] = ", ".join(recipients)
    
    # HTML 내용 생성
    html = f"""
    <html>
      <body>
        <h2>주간 업무 리포트</h2>
        <p>{report_data}</p>
      </body>
    </html>
    """
    
    part = MIMEText(html, "html")
    message.attach(part)
    
    # 이메일 발송
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipients, message.as_string())
```

## 3. 웹 스크래핑 자동화

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_job_listings():
    url = "https://example-job-site.com/python-jobs"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    jobs = []
    for job_card in soup.find_all('div', class_='job-card'):
        title = job_card.find('h3').text.strip()
        company = job_card.find('span', class_='company').text.strip()
        location = job_card.find('span', class_='location').text.strip()
        
        jobs.append({
            'title': title,
            'company': company,
            'location': location,
            'date': datetime.now().strftime('%Y-%m-%d')
        })
    
    # 엑셀 파일로 저장
    df = pd.DataFrame(jobs)
    df.to_excel(f'job_listings_{datetime.now().strftime("%Y%m%d")}.xlsx', index=False)
    
    return df
```

## 마치며

이러한 자동화 스크립트들은 일상적인 업무 시간을 크게 단축시켜줍니다. 
더 복잡한 자동화가 필요하다면 `selenium`으로 웹 브라우저 자동화, 
`schedule` 라이브러리로 정기 실행 등을 구현할 수 있습니다.

**다음 포스트에서는 GitHub Actions를 활용한 CI/CD 자동화에 대해 다루겠습니다!**
