---
layout: page
title: AI News
permalink: /ai-news/
---

# AI 뉴스 & 분석

최신 인공지능 뉴스, 연구 성과, 그리고 업계 동향을 분석합니다.

## 주요 카테고리

- **AI 돌파구**: 최신 AI 연구 성과와 기술적 혁신
- **업계 동향**: AI 기업들의 전략과 시장 변화
- **정책 & 규제**: AI 관련 법적, 윤리적 이슈
- **제품 출시**: 새로운 AI 제품과 서비스 분석

---

<div class="post-list">
  {% assign ai_posts = site.posts | where: "categories", "ai-news" %}
  {% for post in ai_posts %}
    <article class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">
        <time>{{ post.date | date: "%Y년 %m월 %d일" }}</time>
        {% if post.tags.size > 0 %}
          • 
          {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        {% endif %}
      </p>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>
