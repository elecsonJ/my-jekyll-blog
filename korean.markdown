---
layout: page
title: "🇰🇷 한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다"
---

{% comment %} 언어 설정 로드 {% endcomment %}
{% assign config = site.data.korean %}

<!-- 🔍 DEBUG: 전체 사이트 정보 -->
<!-- 전체 포스트 수: {{ site.posts.size }} -->
<!-- 페이지 언어 설정: {{ page.language }} -->

{% comment %} 포스트 분류 {% endcomment %}
{% include post-categorizer.html language='ko' %}

<!-- 🔍 DEBUG: 분류 후 결과 -->
<!-- language_posts 변수가 존재하는지: {% if language_posts %}있음{% else %}없음{% endif %} -->
<!-- language_posts 크기: {{ language_posts.size | default: '0' }} -->

<!-- 페이지 헤더 -->
<div class="page-header" style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">{{ config.title }}</h1>
  <p style="font-size: 1.2em; color: #666;">{{ config.description }}</p>
  <div style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
    <p style="margin: 0; font-size: 1.1em;">총 <strong>{{ language_posts.size }}개</strong>의 한국어 포스트가 있습니다</p>
  </div>
</div>

<!-- 포스트가 없을 때 표시 -->
{% if language_posts.size == 0 %}
<div style="text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px; margin: 20px 0;">
  <h2>⚠️ 한국어 포스트가 없습니다</h2>
  <p>다음 사항을 확인해주세요:</p>
  <ul style="text-align: left; display: inline-block;">
    <li>포스트 파일의 front matter에 <code>lang: ko</code>가 설정되어 있는지</li>
    <li>파일명에 'korean'이 포함되어 있는지</li>
    <li>categories에 'korean-posts'가 포함되어 있는지</li>
  </ul>
  
  <h3>🔍 전체 포스트 목록 (디버그용)</h3>
  {% for post in site.posts limit:10 %}
    <div style="text-align: left; margin: 10px; padding: 10px; background: white; border: 1px solid #ddd;">
      <strong>{{ post.title }}</strong><br>
      파일: {{ post.path }}<br>
      lang: {{ post.lang | default: 'nil' }}<br>
      categories: {{ post.categories | join: ', ' }}<br>
      date: {{ post.date | date: "%Y-%m-%d" }}
    </div>
  {% endfor %}
</div>
{% endif %}

<!-- 최근 포스트 섹션 -->
{% if language_posts.size > 0 %}
<div class="recent-posts-section" style="margin-bottom: 60px; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 15px;">
  <h2 style="text-align: center; margin-bottom: 30px;">🆕 최근 포스트</h2>
  <div class="posts-grid">
    {% for post in language_posts limit:6 %}
      <article class="post-card" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.3s;">
        <h4 style="margin-bottom: 10px;"><a href="{{ post.url | relative_url }}" style="color: #333; text-decoration: none;">{{ post.title }}</a></h4>
        <p class="post-meta" style="color: #666; font-size: 0.9em;">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%Y년 %m월 %d일" }}
          </time>
          {% if post.categories %}
            {% for category in post.categories limit:2 %}
              <span class="category-tag" style="background: #e9ecef; padding: 2px 8px; border-radius: 4px; margin-left: 5px; font-size: 0.85em;">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt" style="margin-top: 10px; color: #555;">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        {% elsif post.description %}
          <p class="excerpt" style="margin-top: 10px; color: #555;">{{ post.description | truncate: 100 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</div>
{% endif %}

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
