---
layout: page
title: 한국어 포스트
permalink: /korean/
---

# 🇰🇷 한국어 포스트

모든 한국어 글들을 한 곳에서 만나보세요!

---

## 📝 최신 포스트

{% assign korean_posts = site.posts | where: "lang", "ko" %}
{% for post in korean_posts limit: 10 %}
- **[{{ post.title }}]({{ post.url }})** - {{ post.date | date: "%Y.%m.%d" }}
  
  *{{ post.excerpt | strip_html | truncate: 150 }}*
  
  {% if post.categories %}
  📂 카테고리: {% for category in post.categories %}[{{ category | upcase }}](#{{ category }}){% unless forloop.last %}, {% endunless %}{% endfor %}
  {% endif %}
  
  ---
{% endfor %}

## 📍 카테고리별 한국어 포스트

### 🤖 인공지능 (AI)
{% for post in site.categories.ai %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### ⚙️ 자동화 (Automation)  
{% for post in site.categories.automation %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 💻 기술 (Technology)
{% for post in site.categories.tech %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📚 프로젝트 (Project)
{% for post in site.categories.project %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📝 블로그 (Blog)
{% for post in site.categories.blog %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 📊 통계

- **전체 한국어 포스트**: {{ korean_posts | size }}개
- **AI 관련**: {{ site.categories.ai | where: "lang", "ko" | size }}개
- **자동화 관련**: {{ site.categories.automation | where: "lang", "ko" | size }}개
- **기술 관련**: {{ site.categories.tech | where: "lang", "ko" | size }}개

---

### 🌏 다른 언어로 보기
- [🇺🇸 English Posts]({{ site.baseurl }}/english/)
- [🌍 All Categories]({{ site.baseurl }}/categories/)

---

## 🎯 이 블로그에 대해

이 블로그는 다음과 같은 주제에 집중합니다:
- **AI & 머신러닝**: 최신 개발 동향과 인사이트
- **자동화**: 개발자를 위한 도구와 워크플로우
- **기술**: 프로그래밍 가이드와 기술 트렌드
- **프로젝트**: 실제 적용 사례와 케이스 스터디

최첨단 기술 주제에 대한 정기적인 업데이트를 기대해 주세요!