---
layout: page
title: "한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 독자를 위한 기술 블로그 포스트들"
---

# 🇰🇷 한국어 포스트

안녕하세요! 여기서는 여러분과 함께 한국어로 작성된 기술 블로그 포스트들을 확인할 수 있습니다.

## 📚 카테고리

### 🖥️ 기술 (Tech)
AI, 머신러닝, 웹 개발 등 기술 관련 포스트
<a href="{{ '/korean/categories/tech/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 기술 카테고리 전체 보기</a>

### 🤖 인공지능 (AI)
인공지능과 머신러닝 연구 및 실습
<a href="{{ '/korean/categories/ai/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ AI 카테고리 전체 보기</a>

### ⚙️ 자동화 (Automation)
Jekyll, GitHub Actions, Claude MCP 등 자동화 도구
<a href="{{ '/korean/categories/automation/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 자동화 카테고리 전체 보기</a>

### 📖 학습 (Study)
컴퓨터공학 학습 과정과 경험 공유
<a href="{{ '/korean/categories/study/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 학습 카테고리 전체 보기</a>

### 🚀 프로젝트 (Project)
개인 프로젝트와 포트폴리오
<a href="{{ '/korean/categories/project/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 프로젝트 카테고리 전체 보기</a>

### 💼 창업 (Startup)
기술 창업 관련 인사이트
<a href="{{ '/korean/categories/startup/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 창업 카테고리 전체 보기</a>

### 📰 기술뉴스분석 (Tech News Analysis)
최신 기술 뉴스와 동향 분석
<a href="{{ '/korean/categories/tech-news-analysis/' | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">→ 기술뉴스분석 카테고리 전체 보기</a>

---

## 📝 최근 한국어 포스트

<div class="korean-posts">
{% assign korean_posts = site.posts | where_exp: "post", "post.lang == 'ko' or post.categories contains 'korean' or post.categories contains 'tech-news-analysis'" %}
{% if korean_posts.size > 0 %}
  <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
    {% for post in korean_posts limit:12 %}
      <article class="post-preview" style="border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; background: white; transition: box-shadow 0.3s ease;">
        <h3 style="margin-top: 0;"><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h3>
        <p class="post-meta" style="color: #666; font-size: 0.9em; margin: 10px 0;">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            <span class="categories">
              {% for category in post.categories %}
                <span class="category" style="background: #e9ecef; padding: 2px 8px; border-radius: 4px; margin-left: 5px; font-size: 0.8em;">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt" style="color: #555; line-height: 1.5;">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        {% elsif post.description %}
          <p class="excerpt" style="color: #555; line-height: 1.5;">{{ post.description | truncate: 150 }}</p>
        {% endif %}
        <a href="{{ post.url | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">더 읽기 →</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>아직 한국어 포스트가 없습니다. 곧 추가될 예정입니다!</p>
{% endif %}
</div>

<div class="navigation-links" style="text-align: center; margin: 40px 0;">
  <a href="{{ '/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">← 메인으로</a>
  <a href="{{ '/english/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">English Posts →</a>
</div>

<style>
.post-preview:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.posts-grid article {
  transition: transform 0.2s ease;
}

.posts-grid article:hover {
  transform: translateY(-2px);
}
</style>
