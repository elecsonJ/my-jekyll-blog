---
layout: page
title: English Posts
permalink: /english/
---

# 🇺🇸 English Posts

Discover all English content in one place!

---

## 📝 Latest Posts

{% assign english_posts = site.posts | where: "lang", "en" %}
{% for post in english_posts limit: 10 %}
- **[{{ post.title }}]({{ post.url }})** - {{ post.date | date: "%Y.%m.%d" }}
  
  *{{ post.excerpt | strip_html | truncate: 150 }}*
  
  {% if post.categories %}
  📂 Categories: {% for category in post.categories %}[{{ category | upcase }}](#{{ category }}){% unless forloop.last %}, {% endunless %}{% endfor %}
  {% endif %}
  
  ---
{% endfor %}

## 🔍 English Posts by Category

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

## 📊 Statistics

- **Total English Posts**: {{ english_posts | size }}
- **AI Related**: {{ site.categories.ai | where: "lang", "en" | size }}
- **Automation Related**: {{ site.categories.automation | where: "lang", "en" | size }}
- **Technology Related**: {{ site.categories.tech | where: "lang", "en" | size }}

---

### 🌏 View in Other Languages
- [🇰🇷 한국어 포스트]({{ site.baseurl }}/korean/)
- [🌍 All Categories]({{ site.baseurl }}/categories/)

---

## 🚀 About This Blog

This blog focuses on:
- **AI & Machine Learning**: Latest developments and insights
- **Automation**: Tools and workflows for developers
- **Technology**: Programming guides and tech trends
- **Projects**: Real-world applications and case studies

Stay tuned for regular updates on cutting-edge technology topics!
