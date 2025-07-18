# 블로그 운영 매뉴얼

> 📋 **문서 체계**: 이 문서는 블로그 운영의 전체적인 가이드라인을 제공합니다.  
> 📊 **품질 분석**: 현재 포스트 품질 현황은 [`BLOG_QUALITY_ASSESSMENT.md`](./BLOG_QUALITY_ASSESSMENT.md) 참조  
> 🏗️ **구조 이해**: 블로그 아키텍처는 [`ARCHITECTURE.md`](./ARCHITECTURE.md) 참조  
> 📂 **카테고리 관리**: 카테고리 시스템은 [`CATEGORY_SYSTEM_GUIDE.md`](./CATEGORY_SYSTEM_GUIDE.md) 참조

## 📝 목차
1. [블로그 구조 및 형식](#블로그-구조-및-형식)
2. [포스트 작성 가이드라인](#포스트-작성-가이드라인)
3. [품질 기준](#품질-기준)
4. [작업 워크플로우](#작업-워크플로우)
5. [카테고리 및 태그 체계](#카테고리-및-태그-체계)
6. [배포 프로세스](#배포-프로세스)
7. [유지보수 가이드](#유지보수-가이드)
8. [관련 문서](#관련-문서)

---

## 📁 블로그 구조 및 형식

### 디렉토리 구조
```
my-jekyll-blog/
├── _posts/                    # 블로그 포스트
├── _config.yml                # Jekyll 설정
├── _data/                     # 데이터 파일
├── _includes/                 # 템플릿 조각
├── _layouts/                  # 페이지 레이아웃
├── korean/                    # 한국어 카테고리 페이지
├── english/                   # 영어 카테고리 페이지
└── BLOG_MANAGEMENT_MANUAL.md  # 이 파일
```

### 포스트 파일명 규칙
- **형식**: `YYYY-MM-DD-title-slug.md`
- **예시**: `2025-07-17-apple-private-cloud-compute-ai-revolution.md`
- **주의사항**: 
  - 날짜는 반드시 `YYYY-MM-DD` 형식
  - 제목은 영문 소문자, 하이픈으로 구분
  - 확장자는 `.md`

---

## ✍️ 포스트 작성 가이드라인

### Front Matter 템플릿
```yaml
---
layout: post
title: "포스트 제목"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2, tag3]
lang: ko  # 또는 en
description: "포스트 요약 설명 (SEO용)"
---
```

### 카테고리 체계
- **news**: 뉴스, 업계 동향, 이슈 분석
- **tech**: 기술 분석, 심층 리뷰, 기술 트렌드
- **programming**: 개발 튜토리얼, 코딩 가이드
- **projects**: 개인/팀 프로젝트 소개
- **insights**: 개인적 견해, 에세이, 성찰
- **study**: 학습 기록, 강의 정리

### 태그 사용법
- **기술명**: Python, JavaScript, AI, Machine Learning
- **회사명**: Apple, Google, Microsoft, OpenAI
- **주제별**: 프라이버시, 보안, 자동화, 클라우드
- **형식별**: 튜토리얼, 가이드, 분석, 리뷰

---

## ⭐ 품질 기준

### 🌟 고품질 (S급) - 유지 필수
- **기준**:
  - 2,000단어 이상의 심층 분석
  - 독창적 관점과 인사이트 제공
  - 구체적 데이터와 근거 포함
  - 실용적 활용 방안 제시
  - 전문성과 완성도 높음

**예시**:
- "Apple의 조용한 혁명: Private Cloud Compute가 바꾸는 AI 생태계"
- "AI 시대 개발자 완전 학습 로드맵: 체계적 커리큘럼과 실무 활용 전략"

### 📝 중품질 (A급) - 검토 후 결정
- **기준**:
  - 1,000-2,000단어 분량
  - 정보성 높지만 독창성 부족
  - 기본적인 분석과 요약 제공
  - 개선 여지 있음

**예시**:
- "DeepSeek이 Google Gemini로 AI 모델 훈련? 최신 AI 업계 논란 분석"
- "클린 코드의 핵심: 가독성 높은 Python 코드 작성법"

### ⚠️ 저품질 (B급) - 개선 또는 제거
- **기준**:
  - 1,000단어 미만
  - 단순 요약이나 개인 기록
  - 독자에게 제공하는 가치 제한적
  - 깊이 있는 분석 부족

**예시**:
- "[백준 1000] A+B - Bronze V"
- "컴퓨터과학 2학년 1학기 회고: 배운 것들과 성장 기록"

### 🗑️ 제거 대상 (C급) - 즉시 삭제
- **기준**:
  - 테스트 목적의 글
  - 중복 내용
  - 파일명 형식 오류
  - 내용이 불완전하거나 의미 없음

---

## 🔄 작업 워크플로우

### 1. 새 포스트 작성
```bash
# 1. 새 파일 생성
touch _posts/YYYY-MM-DD-post-title.md

# 2. Front Matter 작성
# 3. 본문 작성 (최소 1,500단어 권장)
# 4. 로컬 테스트 (선택사항)
bundle exec jekyll serve

# 5. Git 커밋 및 푸시
git add _posts/YYYY-MM-DD-post-title.md
git commit -m "포스트 제목 추가

- 주요 내용 요약
- 카테고리: [category]
- 태그: [tag1, tag2]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin main
```

### 2. 기존 포스트 수정
```bash
# 1. 파일 수정
# 2. 변경사항 검토
git diff

# 3. 커밋
git add _posts/파일명.md
git commit -m "포스트 제목 수정

- 수정 내용 설명
- 개선 사항

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 3. 정기 품질 점검 (월 1회 권장)
```bash
# 1. 전체 포스트 목록 확인
find _posts -name "*.md" | sort

# 2. 품질 평가 (Claude Code 활용)
# 3. 저품질 포스트 제거 또는 개선
# 4. 메타데이터 업데이트
```

---

## 🏷️ 카테고리 및 태그 체계

### 메인 카테고리
- **news**: 뉴스, 업계 동향
- **tech**: 기술 분석, 심층 리뷰  
- **programming**: 개발 관련
- **projects**: 프로젝트 소개
- **insights**: 개인 견해, 에세이
- **study**: 학습 기록

### 서브 카테고리 (태그로 활용)
- **AI 관련**: AI, MachineLearning, ChatGPT, OpenAI
- **회사별**: Apple, Google, Microsoft, Samsung
- **기술별**: Python, JavaScript, React, Jekyll
- **주제별**: 프라이버시, 보안, 자동화, 클라우드컴퓨팅

### 언어 태그
- **lang: ko** - 한국어 포스트
- **lang: en** - 영어 포스트

---

## 🚀 배포 프로세스

### GitHub Pages 자동 배포
1. `main` 브랜치에 푸시하면 자동으로 빌드
2. 빌드 완료 후 약 1-2분 내 사이트 업데이트
3. 오류 시 GitHub Actions 탭에서 로그 확인

### 배포 전 체크리스트
- [ ] Front Matter 형식 확인
- [ ] 파일명 규칙 준수
- [ ] 카테고리/태그 정확성
- [ ] 맞춤법 및 문법 검토
- [ ] 이미지 링크 정상 작동 (해당시)

---

## 🔧 유지보수 가이드

### 정기 작업 (월 1회)
1. **품질 점검**: 저품질 포스트 제거/개선
2. **카테고리 정리**: 태그 일관성 확인
3. **SEO 최적화**: 메타데이터 업데이트
4. **링크 확인**: 외부 링크 유효성 검사

### 백업 및 버전 관리
- **Git 히스토리**: 모든 변경사항 추적
- **브랜치 전략**: `main` 브랜치만 사용 (단순함 유지)
- **태그 활용**: 중요한 버전에 Git 태그 추가

### 문제 해결
1. **빌드 실패**: GitHub Actions 로그 확인
2. **표시 오류**: Front Matter 형식 검토
3. **카테고리 누락**: `_data` 폴더 설정 확인

---

## 📊 품질 관리 체크리스트

### 작성 전
- [ ] 주제의 독창성 확인
- [ ] 타겟 독자 명확화
- [ ] 최소 분량 목표 설정 (1,500단어+)

### 작성 중
- [ ] 구체적 데이터/근거 포함
- [ ] 실용적 활용 방안 제시
- [ ] 적절한 섹션 나누기
- [ ] 시각적 요소 고려 (목차, 강조 등)

### 작성 후
- [ ] 전체 완성도 확인
- [ ] SEO 최적화 (제목, 설명, 태그)
- [ ] 카테고리 적합성 검토
- [ ] 최종 교정 및 검토

---

## 🎯 향후 개선 방향

### 단기 목표 (1-3개월)
- 고품질 포스트 비율 50% 이상 달성
- 카테고리별 균형잡힌 콘텐츠 확보
- SEO 최적화 완료

### 중기 목표 (3-6개월)
- 시리즈 콘텐츠 강화
- 독자 피드백 시스템 구축
- 다국어 콘텐츠 확대

### 장기 목표 (6개월+)
- 전문성 인정받는 기술 블로그 구축
- 업계 전문가와의 협업 콘텐츠
- 커뮤니티 형성 및 확장

---

## 📞 연락처 및 지원

- **기술 문의**: GitHub Issues 활용
- **콘텐츠 제안**: 별도 기획 문서 작성
- **긴급 사항**: 즉시 수정 및 배포

---

## 📚 관련 문서

### 핵심 운영 문서
- **[`BLOG_QUALITY_ASSESSMENT.md`](./BLOG_QUALITY_ASSESSMENT.md)** - 포스트 품질 분류 및 현황 보고서
- **[`ARCHITECTURE.md`](./ARCHITECTURE.md)** - 블로그 시스템 아키텍처 설명
- **[`CATEGORY_SYSTEM_GUIDE.md`](./CATEGORY_SYSTEM_GUIDE.md)** - 카테고리 관리 시스템 가이드

### 작업 기록 문서
- **[`WORK_LOG.md`](./WORK_LOG.md)** - 주요 작업 이력 및 변경사항
- **[`CATEGORY_FIX_LOG_*.md`](./CATEGORY_FIX_LOG_20250625.md)** - 카테고리 시스템 수정 기록

### 빠른 참조
```bash
# 문서 체계 한눈에 보기
├── BLOG_MANAGEMENT_MANUAL.md     # 📋 메인 운영 가이드 (이 문서)
├── BLOG_QUALITY_ASSESSMENT.md    # 📊 품질 분석 보고서
├── ARCHITECTURE.md               # 🏗️ 시스템 구조
├── CATEGORY_SYSTEM_GUIDE.md      # 📂 카테고리 관리
└── WORK_LOG.md                   # 📝 작업 기록
```

### 작업 시작 전 체크리스트
- [ ] [`BLOG_QUALITY_ASSESSMENT.md`](./BLOG_QUALITY_ASSESSMENT.md)에서 현재 품질 현황 확인
- [ ] 이 문서의 [품질 기준](#품질-기준) 검토
- [ ] [작업 워크플로우](#작업-워크플로우) 절차 확인
- [ ] 필요시 [`CATEGORY_SYSTEM_GUIDE.md`](./CATEGORY_SYSTEM_GUIDE.md)에서 카테고리 규칙 확인

---

*마지막 업데이트: 2025-07-17*  
*문서 버전: v1.1 - 문서간 연계 시스템 추가*