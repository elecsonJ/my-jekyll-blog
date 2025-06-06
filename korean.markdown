---
layout: page
title: "한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 독자를 위한 기술 블로그 포스트들"
---

# 🇰🇷 한국어 포스트

안녕하세요! 여기서는 한국어로 작성된 기술 블로그 포스트들을 카테고리별로 분류해서 확인할 수 있습니다.

## 📂 카테고리별 포스트

{% assign all_posts = site.posts %}
{% assign korean_posts = "" | split: "" %}

{% for post in all_posts %}
  {% if post.lang == 'ko' or post.lang == nil and post.categories contains 'tech-news-analysis' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% elsif post.lang == nil and post.categories contains 'korean' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% elsif post.lang != 'en' and post.categories contains 'tech-news-analysis' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% endif %}
{% endfor %}

<!-- 각 카테고리별로 포스트 분류 -->
{% assign tech_posts = "" | split: "" %}
{% assign ai_posts = "" | split: "" %}
{% assign automation_posts = "" | split: "" %}
{% assign study_posts = "" | split: "" %}
{% assign project_posts = "" | split: "" %}
{% assign startup_posts = "" | split: "" %}
{% assign news_posts = "" | split: "" %}
{% assign other_posts = "" | split: "" %}

{% for post in korean_posts %}
  {% assign is_categorized = false %}
  
  {% if post.categories contains 'tech-news-analysis' %}
    {% assign news_posts = news_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'mcp' or post.categories contains 'automation' %}
    {% assign automation_posts = automation_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'ai' or post.title contains 'AI' or post.title contains '인공지능' %}
    {% assign ai_posts = ai_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'tech' or post.categories contains 'programming' %}
    {% assign tech_posts = tech_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'study' or post.categories contains 'learning' %}
    {% assign study_posts = study_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'project' %}
    {% assign project_posts = project_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'startup' or post.categories contains 'business' %}
    {% assign startup_posts = startup_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% unless is_categorized %}
    {% assign other_posts = other_posts | push: post %}
  {% endunless %}
{% endfor %}

<div class="categories-container">

<!-- 기술뉴스분석 카테고리 -->
{% if news_posts.size > 0 %}
<div class="category-section">
  <h3>📰 기술뉴스분석 ({{ news_posts.size }}개)</h3>
  <p class="category-description">최신 기술 뉴스와 동향 분석</p>
  <div class="posts-grid">
    {% for post in news_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if news_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-news-posts" onclick="showAllPosts('news')" class="btn-secondary">전체 {{ news_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 자동화 카테고리 -->
{% if automation_posts.size > 0 %}
<div class="category-section">
  <h3>⚙️ 자동화 ({{ automation_posts.size }}개)</h3>
  <p class="category-description">Jekyll, GitHub Actions, Claude MCP 등 자동화 도구</p>
  <div class="posts-grid">
    {% for post in automation_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if automation_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-automation-posts" onclick="showAllPosts('automation')" class="btn-secondary">전체 {{ automation_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 인공지능 카테고리 -->
{% if ai_posts.size > 0 %}
<div class="category-section">
  <h3>🤖 인공지능 ({{ ai_posts.size }}개)</h3>
  <p class="category-description">인공지능과 머신러닝 연구 및 실습</p>
  <div class="posts-grid">
    {% for post in ai_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if ai_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-ai-posts" onclick="showAllPosts('ai')" class="btn-secondary">전체 {{ ai_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 기술 카테고리 -->
{% if tech_posts.size > 0 %}
<div class="category-section">
  <h3>🥽 기술 ({{ tech_posts.size }}개)</h3>
  <p class="category-description">프로그래밍, 기술 가이드, 문제 해결</p>
  <div class="posts-grid">
    {% for post in tech_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if tech_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-tech-posts" onclick="showAllPosts('tech')" class="btn-secondary">전체 {{ tech_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 학습 카테고리 -->
{% if study_posts.size > 0 %}
<div class="category-section">
  <h3>📖 학습 ({{ study_posts.size }}개)</h3>
  <p class="category-description">컴퓨터공학 학습 과정과 경험 공유</p>
  <div class="posts-grid">
    {% for post in study_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if study_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-study-posts" onclick="showAllPosts('study')" class="btn-secondary">전체 {{ study_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 프로젝트 카테고리 -->
{% if project_posts.size > 0 %}
<div class="category-section">
  <h3>🚀 프로젝트 ({{ project_posts.size }}개)</h3>
  <p class="category-description">개인 프로젝트와 포트폴리오</p>
  <div class="posts-grid">
    {% for post in project_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if project_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-project-posts" onclick="showAllPosts('project')" class="btn-secondary">전체 {{ project_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 창업 카테고리 -->
{% if startup_posts.size > 0 %}
<div class="category-section">
  <h3>💼 창업 ({{ startup_posts.size }}개)</h3>
  <p class="category-description">기술 창업 관련 인사이트와 경험</p>
  <div class="posts-grid">
    {% for post in startup_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if startup_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-startup-posts" onclick="showAllPosts('startup')" class="btn-secondary">전체 {{ startup_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- 기타 포스트 -->
{% if other_posts.size > 0 %}
<div class="category-section">
  <h3>📝 기타 ({{ other_posts.size }}개)</h3>
  <p class="category-description">기타 포스트</p>
  <div class="posts-grid">
    {% for post in other_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
  {% if other_posts.size > 6 %}
    <div class="view-more">
      <a href="#all-other-posts" onclick="showAllPosts('other')" class="btn-secondary">전체 {{ other_posts.size }}개 포스트 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

</div>

## 📊 카테고리 요약

<div class="category-summary">
  <div class="summary-grid">
    {% if news_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">📰</span>
        <span class="summary-label">기술뉴스분석</span>
        <span class="summary-count">{{ news_posts.size }}개</span>
      </div>
    {% endif %}
    {% if automation_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">⚙️</span>
        <span class="summary-label">자동화</span>
        <span class="summary-count">{{ automation_posts.size }}개</span>
      </div>
    {% endif %}
    {% if ai_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">🤖</span>
        <span class="summary-label">인공지능</span>
        <span class="summary-count">{{ ai_posts.size }}개</span>
      </div>
    {% endif %}
    {% if tech_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">🥽</span>
        <span class="summary-label">기술</span>
        <span class="summary-count">{{ tech_posts.size }}개</span>
      </div>
    {% endif %}
    {% if study_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">📖</span>
        <span class="summary-label">학습</span>
        <span class="summary-count">{{ study_posts.size }}개</span>
      </div>
    {% endif %}
    {% if project_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">🚀</span>
        <span class="summary-label">프로젝트</span>
        <span class="summary-count">{{ project_posts.size }}개</span>
      </div>
    {% endif %}
    {% if startup_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">💼</span>
        <span class="summary-label">창업</span>
        <span class="summary-count">{{ startup_posts.size }}개</span>
      </div>
    {% endif %}
  </div>
</div>

## 🔗 네비게이션

<div class="navigation-links">
  <a href="{{ '/' | relative_url }}" class="btn-primary">← 메인으로</a>
  <a href="{{ '/english/' | relative_url }}" class="btn-primary">English Posts →</a>
  <a href="{{ '/categories/' | relative_url }}" class="btn-secondary">전체 카테고리</a>
</div>

<style>
.categories-container {
  margin: 20px 0;
}

.category-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
}

.category-section h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.category-description {
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.post-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.post-card h4 {
  margin: 0 0 10px 0;
}

.post-card h4 a {
  text-decoration: none;
  color: #333;
}

.post-card h4 a:hover {
  color: #007bff;
}

.post-meta {
  color: #666;
  font-size: 0.9em;
  margin: 10px 0;
}

.category-tag {
  background: #e9ecef;
  padding: 2px 6px;
  border-radius: 3px;
  margin-left: 5px;
  font-size: 0.8em;
}

.excerpt {
  color: #555;
  line-height: 1.4;
  margin: 10px 0;
}

.view-more {
  text-align: center;
  margin-top: 20px;
}

.category-summary {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.summary-icon {
  font-size: 2em;
  margin-bottom: 5px;
}

.summary-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.summary-count {
  color: #007bff;
  font-weight: bold;
}

.navigation-links {
  text-align: center;
  margin: 40px 0;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #28a745;
  color: white;
}

.btn-secondary:hover {
  background: #1e7e34;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .category-section {
    margin-bottom: 30px;
    padding: 15px;
  }
}
</style>

<script>
function showAllPosts(category) {
  // 전체 포스트 보기 기능 (필요시 구현)
  alert('전체 ' + category + ' 포스트를 보는 기능은 준비 중입니다.');
}
</script>
