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

<!-- Page Header -->
<div class="page-header" style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">{{ config.title }}</h1>
  <p style="font-size: 1.2em; color: #666;">{{ config.description }}</p>
  <div style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
    <p style="margin: 0; font-size: 1.1em;">Total of <strong>{{ language_posts.size }} posts</strong> in English</p>
  </div>
</div>

<!-- Recent Posts Section -->
{% if language_posts.size > 0 %}
<div class="recent-posts-section" style="margin-bottom: 60px; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 15px;">
  <h2 style="text-align: center; margin-bottom: 30px;">🆕 Recent Posts</h2>
  <div class="posts-grid">
    {% for post in language_posts limit:6 %}
      <article class="post-card" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.3s;">
        <h4 style="margin-bottom: 10px;"><a href="{{ post.url | relative_url }}" style="color: #333; text-decoration: none;">{{ post.title }}</a></h4>
        <p class="post-meta" style="color: #666; font-size: 0.9em;">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%B %d, %Y" }}
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

{% comment %} Tech Trends Category {% endcomment %}
{% include category-section.html posts=tech_trends_posts category_key='tech_trends' config=config %}

{% comment %} AI News Category {% endcomment %}
{% include category-section.html posts=ai_news_posts category_key='ai_news' config=config %}

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
  // Functionality for viewing all posts (implement as needed)
  alert('View all ' + category + ' posts feature is coming soon!');
}
</script>
