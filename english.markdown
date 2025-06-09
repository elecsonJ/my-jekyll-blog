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

{% comment %} Render each category section {% endcomment %}
{% assign category_keys = 'tech_news,automation,ai,tech,study,project,startup,other' | split: ',' %}

{% for i in (0..7) %}
  {% assign category_key = category_keys[i] %}
  
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

{% comment %} Category Summary {% endcomment %}
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

{% comment %} Navigation {% endcomment %}
{% include navigation.html config=config current_page='english' %}

<script>
function showAllPosts(category) {
  // Functionality for viewing all posts (implement as needed)
  alert('View all ' + category + ' posts feature is coming soon!');
}
</script>
