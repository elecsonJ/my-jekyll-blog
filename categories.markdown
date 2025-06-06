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

### 💻 기술 (Technology)
{% for post in site.categories.tech %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📋 프로젝트 (Project)
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

### 💻 Technology
{% for post in site.categories.tech %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📋 Project
{% for post in site.categories.project %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 📝 Blog
{% for post in site.categories.blog %}
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
- 💻 기술: {{ site.categories.tech | size }}개
- 📋 프로젝트: {{ site.categories.project | size }}개
- 📝 블로그: {{ site.categories.blog | size }}개

**언어별 포스트 수**:
- 🇰🇷 한국어: {{ site.posts | where: "lang", "ko" | size }}개
- 🇺🇸 영어: {{ site.posts | where: "lang", "en" | size }}개

---

## 🔍 빠른 탐색

- **최신 포스트**: [Home]({{ site.baseurl }}/)
- **태그별 보기**: [Tags]({{ site.baseurl }}/tags/)
- **검색**: 상단 검색창 이용

> 💡 **팁**: 각 카테고리는 주제별로 정리되어 있으며, 언어별로도 구분되어 있습니다. 관심 있는 주제를 클릭해보세요!
