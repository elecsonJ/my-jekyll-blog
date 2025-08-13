# 📚 Jekyll 블로그 카테고리 시스템 가이드

## 🎯 현재 카테고리 시스템 (2025.08.13 현재)

기존의 복잡하고 중복된 카테고리 시스템을 단순하고 명확한 6개 카테고리로 재편했습니다.

## ✨ 현재 6개 카테고리

### 📰 **news** - 뉴스
- **목적**: 시의성 있는 업계 뉴스, 기업 동향, 발표 및 이슈
- **예시**: 
  - "DeepSeek이 Google Gemini로 AI 모델 훈련?"
  - "Apple WWDC 2025: AI 기반 Shortcuts 발표"
  - "GitHub 트렌딩 프로젝트 주간 리포트"
- **특징**: 빠른 업데이트, 팩트 중심, 분석보다는 정보 전달

### 🔍 **analysis** - 심층 분석  
- **목적**: 깊이 있는 분석, 사회적 영향, 철학적 통찰
- **예시**:
  - "실리콘밸리 엑소더스: $165,000 꿈이 치폴레 현실이 되기까지"
  - "디지털 순수의 종말: AI가 훔쳐간 우리 아이들의 얼굴"
  - "Apple의 조용한 혁명: Private Cloud Compute가 바꾸는 AI 생태계"
- **특징**: 5,000자 이상, 다각적 관점, 미래 전망, 철학적 성찰

### 📄 **paper-review** - 논문 리뷰
- **목적**: 학술 논문에 대한 체계적 분석과 비판적 고찰, 연구 결과의 심층 해석
- **예시**:
  - "Gemini 2.5 Pro의 IMO 2025 금메달 성취: 자체 검증 파이프라인을 통한 수학적 추론의 혁신"
  - AI 관련 최신 연구논문 분석
  - 컴퓨터 비전, 자연어처리 등 분야별 논문 리뷰
- **특징**: 원논문 기반, 소스 검증, 객관적 분석, 학술적 엄밀성

### 💻 **dev** - 개발
- **목적**: 프로그래밍, 도구, 프로젝트, 개발자 커리어 모든 것
- **예시**:
  - "AI 시대 개발자 완전 학습 로드맵"
  - "MCP 서버 완전 가이드"
  - "Python으로 일상 업무 자동화하기"
  - "실시간 주식 가격 알림 봇 만들기"
- **특징**: 실용적, 튜토리얼, 코드 예제, 실무 활용

### 🚀 **projects** - 프로젝트
- **목적**: 직접 관여한 프로젝트들의 경험과 과정, 결과물과 배운 점들
- **예시**:
  - "RAG + Agentic AI로 구현한 대학원 연구실 추천 시스템"
  - 해커톤 참가 경험과 결과
  - 개인/팀 프로젝트 개발 과정
  - 오픈소스 기여 경험
- **특징**: 구체적 결과물, 기술적 도전, 협업 경험, 문제 해결 과정

### ✍️ **essay** - 에세이
- **목적**: 개인적 경험, 생각, 학습 기록, 회고
- **예시**:
  - 개인 프로젝트 회고록
  - 학습 과정과 깨달음
  - 개발자로서의 성장 이야기
  - 실패와 성공의 경험담
- **특징**: 주관적, 개인적, 감정적, 스토리텔링

## 🔄 기존 카테고리에서 새 카테고리로 매핑

### 기존 → 새 카테고리
- `ai_news`, `news_ai`, `tech-news-analysis` → **news**
- `tech_analysis`, `insights`, `ai_research` → **analysis**  
- (신규) → **paper-review**
- `programming`, `automation`, `mcp` → **dev**
- `projects_personal` → **projects**
- (신규) → **essay**

## 📝 포스트 작성 가이드라인

### Front Matter 예시
```yaml
---
layout: post
title: "포스트 제목"
date: YYYY-MM-DD
categories: [analysis]  # 하나의 카테고리만 사용
tags: [AI, 개발자, 미래전망]
lang: ko
description: "SEO용 요약 설명"
---
```

### 카테고리 선택 기준

1. **시의성이 핵심인가?** → `news`
2. **깊이 있는 분석과 통찰인가?** → `analysis`  
3. **학술 논문 분석인가?** → `paper-review`
4. **개발 관련 실무 내용인가?** → `dev`
5. **구체적 프로젝트 경험인가?** → `projects`
6. **개인적 경험과 생각인가?** → `essay`

### 금지사항
- ❌ 여러 카테고리 동시 사용 (특별한 경우 제외)
- ❌ 존재하지 않는 카테고리 사용
- ❌ 카테고리 없이 포스트 발행

## 🌐 다국어 지원

### 한국어 카테고리 페이지
- `/korean/categories/news/` - 뉴스
- `/korean/categories/analysis/` - 심층 분석  
- `/korean/categories/paper-review/` - 논문 리뷰
- `/korean/categories/dev/` - 개발
- `/korean/categories/projects/` - 프로젝트
- `/korean/categories/essay/` - 에세이

### 영어 카테고리 페이지  
- `/english/categories/news/` - News
- `/english/categories/analysis/` - In-depth Analysis
- `/english/categories/paper-review/` - Paper Reviews
- `/english/categories/dev/` - Development  
- `/english/categories/projects/` - Projects
- `/english/categories/essay/` - Essays

## 🛠 유지보수 가이드

### 정기 점검 항목
1. **월 1회**: 카테고리별 포스트 수 균형 확인
2. **분기 1회**: 품질 낮은 포스트 정리
3. **반기 1회**: 카테고리 시스템 효율성 검토

### 카테고리 변경 시 체크리스트
- [ ] `_data/korean.yml` 업데이트
- [ ] `_data/english.yml` 업데이트  
- [ ] 카테고리 페이지 생성/수정
- [ ] 메인 페이지 업데이트
- [ ] 기존 포스트 재분류
- [ ] 빌드 테스트 및 배포

## 📊 현재 상태 (2025.08.13 기준)

### 포스트 분포 (6개 카테고리)
- **news**: 5개 (15%)
- **analysis**: 14개 (42%)
- **paper-review**: 1개 (3%)
- **dev**: 4개 (12%)  
- **projects**: 1개 (3%)
- **essay**: 0개 (0%)

### 목표 분포 (6개월 후)
- **news**: 20% (빠른 업데이트)
- **analysis**: 35% (핵심 콘텐츠)
- **paper-review**: 15% (학술적 깊이)
- **dev**: 20% (실용적 가치)  
- **projects**: 5% (실제 경험)
- **essay**: 5% (개인적 터치)

## 🔮 미래 확장 계획

### 고려 중인 서브카테고리
- `analysis/ai-society` (AI와 사회)
- `analysis/tech-philosophy` (기술 철학)  
- `dev/career` (개발자 커리어)
- `dev/tools` (개발 도구)

### 확장 조건
- 해당 주제 포스트 20개 이상 누적
- 명확한 차별화 요소 존재
- 사용자 요구 확인

---

*이 가이드는 2025년 8월 12일 카테고리 시스템 개편과 함께 작성되었습니다. 궁금한 점이 있으면 GitHub Issues에 등록해주세요.*