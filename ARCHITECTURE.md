# Jekyll Blog Architecture Documentation

## 🏗️ 아키텍처 개요

이 Jekyll 블로그는 다국어 지원과 카테고리 기반 포스트 분류를 위한 모듈화된 아키텍처로 재설계되었습니다.

## 📁 디렉토리 구조

```
.
├── _data/                    # 언어별 설정 데이터
│   ├── korean.yml           # 한국어 설정
│   └── english.yml          # 영어 설정
├── _includes/               # 재사용 가능한 컴포넌트
│   ├── category-section.html    # 카테고리 섹션 컴포넌트
│   ├── category-summary.html    # 카테고리 요약 컴포넌트
│   ├── navigation.html          # 네비게이션 컴포넌트
│   └── post-categorizer.html    # 포스트 분류 로직
├── _layouts/                # 레이아웃 템플릿
│   ├── default.html         # 기본 레이아웃
│   └── page.html            # 페이지 레이아웃 (공통 스타일 포함)
├── korean.markdown          # 한국어 포스트 페이지
└── english.markdown         # 영어 포스트 페이지
```

## 🎯 주요 개선사항

### 1. **레이아웃 통합**
- `_layouts/page.html` 생성으로 공통 레이아웃 제공
- 중복 CSS 제거 및 중앙집중식 스타일 관리
- 일관된 UI/UX 보장

### 2. **데이터 기반 설계**
- `_data/` 디렉토리에 언어별 설정 분리
- 카테고리 정보와 UI 텍스트 중앙 관리
- 쉬운 유지보수와 확장성

### 3. **컴포넌트 모듈화**
- 재사용 가능한 `_includes/` 컴포넌트
- DRY 원칙 적용으로 코드 중복 제거
- 개별 기능별 책임 분리

### 4. **명확한 카테고리 분리**
- 기존 겹치는 카테고리 문제 해결
- AI 연구/실습 분리로 명확한 구분
- 우선순위 기반 카테고리 분류

## 📊 카테고리 구조 (2025-08-13 현재)

| 한국어 | 영어 | 설명 | 아이콘 |
|--------|------|------|--------|
| 뉴스 | News | 기술 업계 뉴스, 기업 동향, 시의성 있는 발표 및 이슈들 | 📰 |
| 심층 분석 | In-depth Analysis | 기술과 사회의 교차점에서 벌어지는 현상들에 대한 깊이 있는 분석과 통찰 | 🔍 |
| 논문 리뷰 | Paper Reviews | 학술 논문에 대한 체계적 분석과 비판적 고찰, 연구 결과의 심층 해석 | 📄 |
| 개발 | Development | 프로그래밍, 도구, 프로젝트, 개발자 커리어 등 개발과 관련된 모든 것 | 💻 |
| 프로젝트 | Projects | 직접 관여한 프로젝트들의 경험과 과정, 결과물과 배운 점들 | 🚀 |
| 에세이 | Essays | 개인적 경험과 생각, 학습 기록, 회고 등 주관적 관점에서 쓴 글들 | ✍️ |

## 🛠️ 사용법

### 새 카테고리 추가

1. **데이터 파일 수정** (`_data/korean.yml`, `_data/english.yml`)
```yaml
categories:
  new_category:
    name: "새 카테고리"
    description: "카테고리 설명"
    icon: "🆕"
    keywords: ["keyword1", "keyword2"]
```

2. **분류 로직 추가** (`_includes/post-categorizer.html`)
```liquid
{% unless is_categorized %}
  {% if post.categories contains 'new-category' %}
    {% assign new_category_posts = new_category_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
{% endunless %}
```

3. **페이지에 섹션 추가** (`korean.markdown`, `english.markdown`)
```liquid
{% include category-section.html posts=new_category_posts category_key='new_category' config=config %}
```

### 포스트 작성

포스트 front matter에 적절한 카테고리를 추가:

```yaml
---
title: "포스트 제목"
categories: [tech-news-analysis, automation]
lang: ko  # 또는 en
---
```

## 🎨 스타일 커스터마이징

`_layouts/page.html`의 `<style>` 섹션을 수정하여 전역 스타일을 변경할 수 있습니다.

### 주요 CSS 클래스

- `.category-section`: 카테고리 섹션 컨테이너
- `.posts-grid`: 포스트 그리드 레이아웃
- `.post-card`: 개별 포스트 카드
- `.category-summary`: 카테고리 요약 섹션
- `.summary-grid`: 요약 그리드 레이아웃

## 🔄 확장성

이 아키텍처는 다음과 같은 확장이 쉽습니다:

1. **새로운 언어 추가**: `_data/` 디렉토리에 새 언어 파일 추가
2. **새로운 카테고리**: 데이터 파일과 분류 로직만 수정
3. **새로운 컴포넌트**: `_includes/` 디렉토리에 추가
4. **테마 변경**: `_layouts/page.html`의 CSS 수정

## 🐛 문제 해결

### 카테고리가 표시되지 않는 경우
1. 포스트의 `categories` 또는 `lang` 설정 확인
2. `_includes/post-categorizer.html`의 분류 조건 확인
3. 데이터 파일의 카테고리 키 이름 확인

### 스타일이 적용되지 않는 경우
1. `layout: page` 설정 확인
2. `_layouts/page.html` 파일 존재 확인
3. 브라우저 캐시 클리어

## 📋 과제 해결 현황

- ✅ **과제 1**: UI 통일성 - 공통 레이아웃과 컴포넌트로 해결
- ✅ **과제 2**: 카테고리 겹침 - AI연구/AI실습으로 명확히 분리
- ✅ **과제 3**: 네비게이션 - 공통 헤더에 메뉴 통합
- ✅ **과제 4**: 레이아웃 - 중앙 정렬 및 여백 최적화

이 아키텍처로 인해 유지보수성, 확장성, 일관성이 크게 향상되었습니다.
