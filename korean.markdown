---
layout: page
title: "🇰🇷 한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다"
---

{% comment %} 언어 설정 로드 {% endcomment %}
{% assign config = site.data.korean %}

{% comment %} 포스트 분류 {% endcomment %}
{% include post-categorizer.html language='ko' %}

<!-- 🔍 DEBUG: 전체 포스트 확인 -->
<details style="margin: 20px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">
  <summary style="cursor: pointer; font-weight: bold;">🔍 디버그 정보 보기</summary>
  <div style="margin-top: 10px;">
    <p><strong>전체 포스트 수:</strong> {{ site.posts.size }}</p>
    <p><strong>한국어 포스트 수:</strong> {{ language_posts.size }}</p>
    
    <h4>한국어 포스트 목록:</h4>
    <ol>
    {% for post in site.posts %}
      {% if post.lang == 'ko' or post.name contains 'korean' or post.categories contains 'korean-posts' %}
        <li>
          <strong>{{ post.title }}</strong><br>
          - 파일명: {{ post.name | default: post.path }}<br>
          - 카테고리: [{{ post.categories | join: ', ' }}]<br>
          - 언어: {{ post.lang | default: 'not set' }}<br>
          - 날짜: {{ post.date | date: "%Y-%m-%d" }}
        </li>
      {% endif %}
    {% endfor %}
    </ol>
    
    <h4>카테고리별 분류 결과:</h4>
    <ul>
      <li>📈 기술트렌드: {{ tech_trends_posts.size }}개</li>
      <li>🤖📰 AI뉴스: {{ ai_news_posts.size }}개</li>
      <li>⚙️ 자동화: {{ automation_posts.size }}개</li>
      <li>🧠 AI연구: {{ ai_research_posts.size }}개</li>
      <li>🤖 AI실습: {{ ai_practice_posts.size }}개</li>
      <li>💻 프로그래밍: {{ programming_posts.size }}개</li>
      <li>📖 학습: {{ study_posts.size }}개</li>
      <li>🚀 프로젝트: {{ project_posts.size }}개</li>
      <li>💼 창업: {{ startup_posts.size }}개</li>
      <li>📝 기타: {{ other_posts.size }}개</li>
    </ul>
  </div>
</details>

<div class="categories-container">

{% comment %} 기술트렌드 카테고리 {% endcomment %}
{% include category-section.html posts=tech_trends_posts category_key='tech_trends' config=config %}

{% comment %} AI 뉴스 카테고리 {% endcomment %}
{% include category-section.html posts=ai_news_posts category_key='ai_news' config=config %}

{% comment %} 자동화 카테고리 {% endcomment %}
{% include category-section.html posts=automation_posts category_key='automation' config=config %}

{% comment %} AI 연구 카테고리 {% endcomment %}
{% include category-section.html posts=ai_research_posts category_key='ai_research' config=config %}

{% comment %} AI 실습 카테고리 {% endcomment %}
{% include category-section.html posts=ai_practice_posts category_key='ai_practice' config=config %}

{% comment %} 프로그래밍 카테고리 {% endcomment %}
{% include category-section.html posts=programming_posts category_key='programming' config=config %}

{% comment %} 학습 카테고리 {% endcomment %}
{% include category-section.html posts=study_posts category_key='study' config=config %}

{% comment %} 프로젝트 카테고리 {% endcomment %}
{% include category-section.html posts=project_posts category_key='project' config=config %}

{% comment %} 창업 카테고리 {% endcomment %}
{% include category-section.html posts=startup_posts category_key='startup' config=config %}

{% comment %} 기타 카테고리 {% endcomment %}
{% include category-section.html posts=other_posts category_key='other' config=config %}

</div>

<!-- 임시: 모든 한국어 포스트 표시 -->
<div style="margin-top: 40px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
  <h2>📚 모든 한국어 포스트</h2>
  <p>아래는 현재 블로그에 있는 모든 한국어 포스트입니다.</p>
  
  <div class="posts-grid">
    {% for post in site.posts %}
      {% if post.lang == 'ko' or post.name contains 'korean' or post.categories contains 'korean-posts' %}
        <article class="post-card">
          <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
          <p class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%Y년 %m월 %d일" }}
            </time>
            {% if post.categories %}
              {% for category in post.categories %}
                <span class="category-tag">{{ category }}</span>
              {% endfor %}
            {% endif %}
          </p>
          {% if post.excerpt %}
            <p class="excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          {% elsif post.description %}
            <p class="excerpt">{{ post.description | truncate: 150 }}</p>
          {% endif %}
        </article>
      {% endif %}
    {% endfor %}
  </div>
</div>

{% comment %} 카테고리 요약 {% endcomment %}
<div class="category-summary">
  <h2>📊 {{ config.ui.category_summary }}</h2>
  <div class="summary-grid">
    {% if tech_trends_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.tech_trends.icon }}</span>
        <span class="summary-label">{{ config.categories.tech_trends.name }}</span>
        <span class="summary-count">{{ tech_trends_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if ai_news_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.ai_news.icon }}</span>
        <span class="summary-label">{{ config.categories.ai_news.name }}</span>
        <span class="summary-count">{{ ai_news_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if automation_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.automation.icon }}</span>
        <span class="summary-label">{{ config.categories.automation.name }}</span>
        <span class="summary-count">{{ automation_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if ai_research_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.ai_research.icon }}</span>
        <span class="summary-label">{{ config.categories.ai_research.name }}</span>
        <span class="summary-count">{{ ai_research_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if ai_practice_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.ai_practice.icon }}</span>
        <span class="summary-label">{{ config.categories.ai_practice.name }}</span>
        <span class="summary-count">{{ ai_practice_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if programming_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.programming.icon }}</span>
        <span class="summary-label">{{ config.categories.programming.name }}</span>
        <span class="summary-count">{{ programming_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if study_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.study.icon }}</span>
        <span class="summary-label">{{ config.categories.study.name }}</span>
        <span class="summary-count">{{ study_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if project_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.project.icon }}</span>
        <span class="summary-label">{{ config.categories.project.name }}</span>
        <span class="summary-count">{{ project_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if startup_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.startup.icon }}</span>
        <span class="summary-label">{{ config.categories.startup.name }}</span>
        <span class="summary-count">{{ startup_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
  </div>
</div>

<script>
function showAllPosts(category) {
  // 전체 포스트 보기 기능 (필요시 구현)
  alert('전체 ' + category + ' 포스트를 보는 기능이 곧 추가될 예정입니다.');
}
</script>
