---
layout: post
title: "RAG + Agentic AI로 구현한 대학원 연구실 추천 시스템: 해커톤에서 실제 배포까지"
date: 2025-08-12 16:00:00 +0900
categories: [projects]
tags: [RAG, Agentic-AI, LangChain, Streamlit, OpenAI, 해커톤, 대학원추천, 벡터임베딩, 웹배포]
author: "Jaehoon Han"
lang: ko
excerpt: "RAG와 Agentic AI 기술을 활용하여 대학원 연구실 추천 시스템을 구현한 프로젝트 경험기. 해커톤 참여부터 실제 웹 배포까지의 전 과정을 상세히 공유합니다."
description: "해커톤에서 RAG + Agentic AI 기술로 구현한 대학원 연구실 추천 시스템 개발기. 벡터 임베딩, 하이브리드 검색, 실시간 웹 배포까지"
---

# RAG + Agentic AI로 구현한 대학원 연구실 추천 시스템: 해커톤에서 실제 배포까지

## 🎯 프로젝트 개요

최근 RAG(Retrieval-Augmented Generation)와 Agentic LLM에 대해 배우면서 이를 실제로 구현해보는 해커톤에 참여하게 되었습니다. 이 글에서는 **대학원 연구실 추천 시스템**을 구현한 전체 경험을 공유하고자 합니다.

**📁 GitHub 저장소**: [https://github.com/elecsonJ/team07-lab-recommender](https://github.com/elecsonJ/team07-lab-recommender)

<!--more-->

## 🎪 해커톤 배경과 동기

### 학습 목표
- **RAG 시스템 구현**: PDF 데이터를 벡터화하여 유사도 기반 검색 구현
- **Agentic AI 체험**: 상황에 따라 다른 전략을 선택하는 지능형 에이전트
- **실제 서비스 구축**: API 연동부터 웹 배포까지 전체 파이프라인 경험

### 프로젝트 아이디어
대학원 진학을 고민하는 학생들이 자신의 관심 분야에 맞는 연구실을 찾기 어려워하는 문제를 해결하고자 했습니다. 기존의 단순한 키워드 검색이 아닌, **AI가 이해하고 추천하는 지능형 시스템**을 목표로 했습니다.

## 🏗️ 시스템 아키텍처

### 1. RAG (Retrieval-Augmented Generation) 핵심 구조

```
사용자 쿼리 입력
    ↓
벡터 임베딩 변환 (text-embedding-3-small)
    ↓
코사인 유사도 계산 (31명 교수와 매칭)
    ↓
Top-K 교수 선별
    ↓
GPT-4o-mini 상세 추천 생성
    ↓
품질 평가 및 결과 반환
```

### 2. Agentic AI 철학 구현

시스템의 핵심은 **상황에 따른 적응적 전략 선택**입니다:

- **1차 전략**: 로컬 RAG 검색으로 답변 생성
- **품질 평가**: 답변의 질이 만족스럽지 않으면
- **2차 전략**: 웹 검색으로 전환하여 추가 정보 수집
- **최종 답변**: 통합된 정보로 고품질 응답 생성

이는 단순한 규칙 기반 시스템을 넘어서, **상황을 판단하고 전략을 바꾸는 에이전트**의 특성을 보여줍니다.

## 💾 데이터와 한계점

### 현실적 제약
해커톤이라는 시간 제약과 데이터 수집의 어려움으로 인해 **서울대학교 의과대학 교수진 31명**의 데이터만 활용할 수 있었습니다.

### 이상적 비전
원래 목표는 **전국 모든 대학의 교수진 데이터**를 수집하여:
- 모든 학과, 모든 분야 커버
- 범용 대학원 추천 시스템 구축
- 특정 대학에 국한되지 않는 포괄적 서비스

### 확장 가능성
현재 시스템은 데이터만 교체하면 다른 대학, 다른 분야로 쉽게 확장 가능한 구조로 설계했습니다.

## 🛠️ 기술적 구현

### 1. 데이터 처리 파이프라인

**PDF 데이터 추출**:
```python
# PDF에서 교수진 정보 추출
import pdfplumber
from openai import AzureOpenAI

def extract_professor_info(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        # GPT-4o-mini로 구조화된 데이터 변환
        structured_data = process_with_gpt(raw_text)
    return structured_data
```

**벡터 임베딩 생성**:
```python
from langchain_openai import AzureOpenAIEmbeddings

embeddings = AzureOpenAIEmbeddings(
    model="text-embedding-3-small",
    dimensions=1536
)
```

### 2. 하이브리드 검색 시스템

**RAG 검색**:
```python
def rag_search(query, k=5):
    # 벡터 유사도로 상위 K개 교수 선별
    similar_docs = vector_store.similarity_search(query, k=k)
    
    # GPT-4o-mini로 맞춤형 추천 생성
    response = llm.invoke(
        f"다음 교수들을 참고하여 추천: {similar_docs}"
    )
    return response
```

**웹 검색 대체**:
```python
def web_search_fallback(query):
    if quality_score < threshold:
        # Tavily API로 실시간 웹 검색
        web_results = search_web(enhanced_query)
        return generate_response_with_web_data(web_results)
```

### 3. 대화형 인터페이스

**대화 맥락 관리**:
```python
@dataclass
class ConversationHistory:
    queries: List[str] = field(default_factory=list)
    responses: List[str] = field(default_factory=list)
    
    def get_context(self, last_n=3):
        # 최근 N개 대화로 컨텍스트 구성
        return build_context(self.queries[-last_n:])
```

**질문 분류 시스템**:
```python
def classify_query(query):
    # 새로운 질문 vs 후속 질문 자동 판별
    if is_followup_question(query):
        return enhance_with_context(query)
    return query
```

## 🌐 배포와 서비스화

### Streamlit Cloud 배포

해커톤에서 구현한 시스템을 **실제 서비스**로 만들기 위해 Streamlit Cloud를 활용했습니다.

**배포 과정**:
1. GitHub에 코드 push
2. Streamlit Cloud에서 자동 빌드
3. 환경변수(API 키) 안전하게 설정
4. 실시간 서비스 시작

**사용자 경험 최적화**:
- 반응형 UI로 모바일/데스크톱 대응
- 실시간 대화형 인터페이스
- 질문 분류 결과 시각화
- 추천 이유 상세 제공

## 📈 프로젝트 성과와 학습

### 기술적 성취

**1. 처음 경험한 기술들**:
- OpenAI API를 활용한 챗봇 서비스 구현
- RAG 시스템 설계 및 구현  
- Agentic AI 철학을 실제 코드로 구현
- 웹 서비스 배포 전체 프로세스

**2. 데이터 품질 최적화**:
- PDF 추출 → 구조화 → 벡터화 파이프라인 구축
- 95.8%의 높은 데이터 완성도 달성
- 연구주제와 기술방법의 명확한 분리

**3. 하이브리드 검색의 효과**:
- 벡터 검색으로 빠른 1차 필터링
- 웹 검색으로 보완적 정보 수집
- 상황별 적응적 전략 선택

### 사용자 경험 개선

**대화의 자연스러움**:
```
사용자: "암 연구하고 싶어요"
AI: "서울대 의대 암 연구 분야에서는 박재현 교수님의 면역항암치료연구실과 강건욱 교수님의 분자영상 및 치료연구실을 추천드립니다..."

사용자: "그 중에서 나노기술 쪽은?"
AI: "앞서 언급한 강건욱 교수님이 정확히 나노기술을 활용한 암 치료 연구를 하고 계십니다..."
```

**맞춤형 추천**:
- 단순 키워드 매칭이 아닌 의미론적 이해
- 사용자 의도 파악 및 맞춤형 응답
- 구체적인 연락처와 연구실 정보 제공

## 🔮 확장 가능성과 미래 비전

### 단기 개선방향
1. **데이터 확장**: 다른 대학, 다른 학과 데이터 추가
2. **고급 필터링**: 연구비 규모, 졸업생 진로, 지도교수 스타일
3. **개인화**: 사용자 프로필 기반 장기적 추천

### 장기 비전
- **전국 단위 통합 플랫폼**: 모든 대학 연구실 정보 통합
- **실시간 업데이트**: 논문, 연구비, 채용 정보 자동 갱신
- **커뮤니티 기능**: 선배-후배 매칭, 연구실 리뷰

## 💡 배운 점과 인사이트

### 1. RAG의 실제 적용
이론으로만 알던 RAG를 실제로 구현해보며 **검색 품질의 중요성**을 체감했습니다. 단순히 벡터 유사도만으로는 부족하고, 도메인 특화된 전처리와 후처리가 필수임을 깨달았습니다.

### 2. Agentic AI의 가능성
하나의 전략에 의존하지 않고 **상황에 따라 적응하는 시스템**의 강력함을 경험했습니다. 이는 단순한 if-else 로직을 넘어선 진정한 '지능'의 구현이었습니다.

### 3. 배포의 중요성
아무리 좋은 기술도 **실제 사용자가 접근할 수 없으면 의미가 없다**는 점을 실감했습니다. Streamlit Cloud를 통한 간편한 배포는 프로젝트를 '완성품'으로 만들어주었습니다.

### 4. 데이터의 현실
완벽한 데이터는 존재하지 않으며, **제한된 데이터로도 가치 있는 서비스를 만들 수 있다**는 것을 배웠습니다. 중요한 것은 데이터의 양이 아니라 품질과 활용 방식입니다.

## 🎉 마무리

이번 해커톤 프로젝트를 통해 **RAG와 Agentic AI를 실제로 구현**하고, **처음부터 끝까지 완전한 서비스**를 만들어본 경험은 매우 소중했습니다.

특히:
- **이론을 실전으로**: 책으로만 보던 기술을 실제 코드로 구현
- **문제 해결 경험**: 데이터 부족, API 제한, 배포 이슈 등 현실적 문제 해결
- **사용자 관점**: 기술 구현을 넘어 실제 사용자가 쓸 수 있는 서비스 고민

앞으로도 이런 **실용적이면서도 기술적으로 도전적인 프로젝트**를 계속 진행해보고 싶습니다. AI 기술이 실제 사회 문제를 해결하는 데 기여할 수 있는 방법을 계속 고민하겠습니다.

---

**프로젝트 링크**:
- 📁 **GitHub**: [https://github.com/elecsonJ/team07-lab-recommender](https://github.com/elecsonJ/team07-lab-recommender)
- 🏷️ **기술 스택**: RAG, Agentic AI, LangChain, Streamlit, GPT-4o-mini, Vector Embeddings

*궁금한 점이나 피드백은 언제든 환영합니다! 댓글로 남겨주세요.* 😊