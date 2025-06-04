---
layout: page
title: "한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 독자를 위한 기술 블로그 포스트들"
---

# 🇰🇷 한국어 포스트

안녕하세요! 여기서는 한국어로 작성된 기술 블로그 포스트들을 확인할 수 있습니다.

## 📂 카테고리

### 🔬 기술 (Tech)
AI, 머신러닝, 웹 개발 등 기술 관련 포스트

### 🤖 인공지능 (AI)
인공지능과 머신러닝 연구 및 실습

### ⚙️ 자동화 (Automation)
Jekyll, GitHub Actions, Claude MCP 등 자동화 도구

### 📚 학습 (Study)
컴퓨터과학 학습 과정과 경험 공유

### 🚀 프로젝트 (Project)
개인 프로젝트와 포트폴리오

### 💼 창업 (Startup)
기술 창업 관련 인사이트와 경험

---

## 📝 최신 한국어 포스트

<div class="korean-posts">
{% assign korean_posts = site.posts | where: "categories", "korean" %}
{% if korean_posts.size > 0 %}
  {% for post in korean_posts limit:5 %}
    <article class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
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
  <p>아직 한국어 포스트가 없습니다. 곧 추가될 예정입니다!</p>
{% endif %}
</div>

<div class="navigation-links">
  <a href="{{ '/' | relative_url }}" class="btn">← 메인으로</a>
  <a href="{{ '/english/' | relative_url }}" class="btn">English Posts →</a>
</div>
