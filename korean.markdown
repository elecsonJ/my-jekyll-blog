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

<div class="categories-container">

{% comment %} 각 카테고리별 섹션 렌더링 {% endcomment %}
{% assign category_keys = 'tech_news,automation,ai,tech,study,project,startup,other' | split: ',' %}
{% assign category_posts = tech_news_posts,automation_posts,ai_posts,tech_posts,study_posts,project_posts,startup_posts,other_posts | split: ',' %}

{% for i in (0..7) %}
  {% assign category_key = category_keys[i] %}
  {% assign posts = category_posts[i] %}
  
  {% if category_key == 'tech_news' %}
    {% assign posts = tech_news_posts %}
  {% elsif category_key == 'automation' %}
    {% assign posts = automation_posts %}
  {% elsif category_key == 'ai' %}
    {% assign posts = ai_posts %}
  {% elsif category_key == 'tech' %}
    {% assign posts = tech_posts %}
  {% elsif category_key == 'study' %}
    {% assign posts = study_posts %}
  {% elsif category_key == 'project' %}
    {% assign posts = project_posts %}
  {% elsif category_key == 'startup' %}
    {% assign posts = startup_posts %}
  {% elsif category_key == 'other' %}
    {% assign posts = other_posts %}
  {% endif %}
  
  {% include category-section.html posts=posts category_key=category_key config=config %}
{% endfor %}

</div>

{% comment %} 카테고리 요약 {% endcomment %}
{% assign categorized_posts = '' %}
{% assign categorized_posts = categorized_posts | append: 'tech_news:' | append: tech_news_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'automation:' | append: automation_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'ai:' | append: ai_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'tech:' | append: tech_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'study:' | append: study_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'project:' | append: project_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'startup:' | append: startup_posts.size | append: ',' %}
{% assign categorized_posts = categorized_posts | append: 'other:' | append: other_posts.size %}

<div class="category-summary">
  <h2>📊 {{ config.ui.category_summary }}</h2>
  <div class="summary-grid">
    {% if tech_news_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.tech_news.icon }}</span>
        <span class="summary-label">{{ config.categories.tech_news.name }}</span>
        <span class="summary-count">{{ tech_news_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if automation_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.automation.icon }}</span>
        <span class="summary-label">{{ config.categories.automation.name }}</span>
        <span class="summary-count">{{ automation_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if ai_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.ai.icon }}</span>
        <span class="summary-label">{{ config.categories.ai.name }}</span>
        <span class="summary-count">{{ ai_posts.size }} {{ config.ui.posts_count }}</span>
      </div>
    {% endif %}
    {% if tech_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.tech.icon }}</span>
        <span class="summary-label">{{ config.categories.tech.name }}</span>
        <span class="summary-count">{{ tech_posts.size }} {{ config.ui.posts_count }}</span>
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

{% comment %} 네비게이션 {% endcomment %}
{% include navigation.html config=config current_page='korean' %}

<script>
function showAllPosts(category) {
  // 전체 포스트 보기 기능 (필요시 구현)
  alert('전체 ' + category + ' 포스트를 보는 기능이 곧 추가될 예정입니다.');
}
</script>
