---
layout: page
title: "English Posts"
permalink: /english/
language: english
description: "Technical blog posts in English for international readers"
---

# 🇺🇸 English Posts

Welcome! Here you can find all technical blog posts written in English.

## 📂 Categories

### 🔬 Technology (Tech)
AI, Machine Learning, Web Development, and other technical topics

### 🤖 Artificial Intelligence (AI)
AI research, machine learning experiments, and practical implementations

### ⚙️ Automation
Jekyll, GitHub Actions, Claude MCP, and other automation tools

### 📚 Study
Computer Science studies and learning experiences

### 🚀 Projects
Personal projects and portfolio showcase

### 💼 Startup
Tech startup insights and entrepreneurial experiences

---

## 📝 Latest English Posts

<div class="english-posts">
{% assign english_posts = site.posts | where: "categories", "english" %}
{% if english_posts.size > 0 %}
  {% for post in english_posts limit:5 %}
    <article class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.categories %}
          <span class="categories">
            {% for category in post.categories %}
              <span class="category">{{ category }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </p>
      {% if post.excerpt %}
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      {% endif %}
    </article>
  {% endfor %}
{% else %}
  <p>No English posts yet. Stay tuned for upcoming content!</p>
{% endif %}
</div>

<div class="navigation-links">
  <a href="{{ '/' | relative_url }}" class="btn">← Back to Home</a>
  <a href="{{ '/korean/' | relative_url }}" class="btn">한국어 포스트 →</a>
</div>
