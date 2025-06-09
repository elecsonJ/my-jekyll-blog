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

{% comment %} 뉴스분석 카테고리 {% endcomment %}
{% include category-section.html posts=news_analysis_posts category_key='news_analysis' config=config %}

{% comment %} 자동화 카테고리 {% endcomment %}
{% include category-section.html posts=automation_posts category_key='automation' config=config %}

{% comment %} AI 연구 카테고리 {% endcomment %}
{% include category-section.html posts=ai_research_posts category_key='ai_research' config=config %}

{% comment %} AI 실습 카테고리 {% endcomment %}
{% include category-section.html posts=ai_practice_posts category_key='ai_practice' config=config %}

{% comment %} 프로그래밍 카테고리 {% endcomment %}
{% include category-section.html posts=tech_posts category_key='tech' config=config %}

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
    {% if news_analysis_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">{{ config.categories.news_analysis.icon }}</span>
        <span class="summary-label">{{ config.categories.news_analysis.name }}</span>
        <span class="summary-count">{{ news_analysis_posts.size }} {{ config.ui.posts_count }}</span>
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
