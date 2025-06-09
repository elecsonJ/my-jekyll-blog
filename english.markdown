---
layout: page
title: "🇺🇸 English Posts"
permalink: /english/
language: english
description: "English tech blog posts with category-based organization"
---

{% comment %} Load language configuration {% endcomment %}
{% assign config = site.data.english %}

{% comment %} Categorize posts {% endcomment %}
{% include post-categorizer.html language='en' %}

<div class="categories-container">

{% comment %} Tech Trends Category {% endcomment %}
{% include category-section.html posts=tech_trends_posts category_key='tech_trends' config=config %}

{% comment %} Automation Category {% endcomment %}
{% include category-section.html posts=automation_posts category_key='automation' config=config %}

{% comment %} AI Research Category {% endcomment %}
{% include category-section.html posts=ai_research_posts category_key='ai_research' config=config %}

{% comment %} AI Practice Category {% endcomment %}
{% include category-section.html posts=ai_practice_posts category_key='ai_practice' config=config %}

{% comment %} Programming Category {% endcomment %}
{% include category-section.html posts=programming_posts category_key='programming' config=config %}

{% comment %} Learning Category {% endcomment %}
{% include category-section.html posts=study_posts category_key='study' config=config %}

{% comment %} Projects Category {% endcomment %}
{% include category-section.html posts=project_posts category_key='project' config=config %}

{% comment %} Startup Category {% endcomment %}
{% include category-section.html posts=startup_posts category_key='startup' config=config %}

{% comment %} Other Category {% endcomment %}
{% include category-section.html posts=other_posts category_key='other' config=config %}

</div>

{% comment %} Category Summary {% endcomment %}
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

{% comment %} Navigation {% endcomment %}
{% include navigation.html config=config current_page='english' %}

<script>
function showAllPosts(category) {
  // Functionality for viewing all posts (implement as needed)
  alert('View all ' + category + ' posts feature is coming soon!');
}
</script>
