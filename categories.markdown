---
layout: page
title: Categories
permalink: /categories/
---

# 📚 카테고리별 포스트

## 🇰🇷 한국어 포스트

### 📰 뉴스 (News)
{% for post in site.categories.news %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🔍 심층 분석 (Analysis)
{% for post in site.categories.analysis %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 💻 개발 (Dev)
{% for post in site.categories.dev %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🚀 프로젝트 (Projects)
{% for post in site.categories.projects %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### ✍️ 에세이 (Essay)
{% for post in site.categories.essay %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 🇺🇸 English Posts

### 📰 News
{% for post in site.categories.news %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🔍 Analysis
{% for post in site.categories.analysis %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 💻 Dev
{% for post in site.categories.dev %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🚀 Projects
{% for post in site.categories.projects %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### ✍️ Essay
{% for post in site.categories.essay %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 📊 통계

**총 포스트 수**: {{ site.posts | size }}개

**카테고리별 포스트 수**:
- 📰 뉴스: {{ site.categories.news | size }}개
- 🔍 심층 분석: {{ site.categories.analysis | size }}개  
- 💻 개발: {{ site.categories.dev | size }}개
- 🚀 프로젝트: {{ site.categories.projects | size }}개
- ✍️ 에세이: {{ site.categories.essay | size }}개

**언어별 포스트 수**:
- 🇰🇷 한국어: {{ site.posts | where: "lang", "ko" | size }}개
- 🇺🇸 영어: {{ site.posts | where: "lang", "en" | size }}개

---

## 🔍 빠른 탐색

- **최신 포스트**: [Home]({{ site.baseurl }}/)
- **한국어 포스트**: [Korean]({{ site.baseurl }}/korean/)
- **영어 포스트**: [English]({{ site.baseurl }}/english/)
- **검색**: 상단 검색창을 이용

> 💡 **팁**: 각 카테고리로 체계적으로 정리되어 있으니, 원하는 주제를 쉽게 찾아보세요. 지속적으로 업데이트됩니다!