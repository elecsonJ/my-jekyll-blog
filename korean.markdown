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

## 🔍 카테고리별 한국어 포스트

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

## 📊 통계

- **총 한국어 포스트**: {{ korean_posts | size }}개
- **AI 관련**: {{ site.categories.ai | where: "lang", "ko" | size }}개
- **자동화 관련**: {{ site.categories.automation | where: "lang", "ko" | size }}개
- **기술 관련**: {{ site.categories.tech | where: "lang", "ko" | size }}개

---

### 🌏 다른 언어로 보기
- [🇺🇸 English Posts]({{ site.baseurl }}/english/)
- [🌍 All Categories]({{ site.baseurl }}/categories/)
