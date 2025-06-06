---
layout: page
title: Categories
permalink: /categories/
---

# 📚 카테고리별 포스트

## 🇰🇷 한국어 포스트

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

### 🌐 웹 개발 (Web Development)
{% for post in site.categories.web-development %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🔢 알고리즘 (Algorithm)
{% for post in site.categories.algorithm %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🚀 프로젝트 (Project)
{% for post in site.categories.project %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📰 뉴스 & 트렌드 (News)
{% for post in site.categories.news %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 🇺🇸 English Posts

### 🤖 Artificial Intelligence
{% for post in site.categories.ai %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### ⚙️ Automation
{% for post in site.categories.automation %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🌐 Web Development
{% for post in site.categories.web-development %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🔢 Algorithm
{% for post in site.categories.algorithm %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 🚀 Project
{% for post in site.categories.project %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📰 News & Trends
{% for post in site.categories.news %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 📊 통계

**총 포스트 수**: {{ site.posts | size }}개

**카테고리별 포스트 수**:
- 🤖 AI: {{ site.categories.ai | size }}개
- ⚙️ 자동화: {{ site.categories.automation | size }}개  
- 🌐 웹 개발: {{ site.categories.web-development | size }}개
- 🔢 알고리즘: {{ site.categories.algorithm | size }}개
- 🚀 프로젝트: {{ site.categories.project | size }}개
- 📰 뉴스: {{ site.categories.news | size }}개

**언어별 포스트 수**:
- 🇰🇷 한국어: {{ site.posts | where: "lang", "ko" | size }}개
- 🇺🇸 영어: {{ site.posts | where: "lang", "en" | size }}개

---

## 🔍 빠른 탐색

- **최신 포스트**: [Home]({{ site.baseurl }}/)
- **태그별 보기**: [Tags]({{ site.baseurl }}/tags/) (구현 예정)
- **검색**: 상단 검색창을 이용

> 💡 **팁**: 각 카테고리로 체계적으로 정리되어 있으니, 원하는 주제를 쉽게 찾아보세요. 지속적으로 업데이트됩니다!
