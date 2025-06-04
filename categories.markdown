---
layout: page
title: Categories
permalink: /categories/
---

# 📂 카테고리별 포스트

## 🇰🇷 한국어 포스트

### 기술 (Technology)
{% for post in site.categories.tech %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 인공지능 (AI)
{% for post in site.categories.ai %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 자동화 (Automation)
{% for post in site.categories.automation %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 프로젝트 (Project)
{% for post in site.categories.project %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### 블로그 (Blog)
{% for post in site.categories.blog %}
{% if post.lang == 'ko' or post.lang == nil %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 🇺🇸 English Posts

### Technology
{% for post in site.categories.tech %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### Artificial Intelligence
{% for post in site.categories.ai %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### Automation
{% for post in site.categories.automation %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### Project
{% for post in site.categories.project %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

### Blog
{% for post in site.categories.blog %}
{% if post.lang == 'en' %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y.%m.%d" }}
{% endif %}
{% endfor %}

---

## 📊 통계

**총 포스트 수**: {{ site.posts | size }}개

**카테고리별 포스트 수**:
- 기술: {{ site.categories.tech | size }}개
- AI: {{ site.categories.ai | size }}개  
- 자동화: {{ site.categories.automation | size }}개
- 프로젝트: {{ site.categories.project | size }}개
- 블로그: {{ site.categories.blog | size }}개