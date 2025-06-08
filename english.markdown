---
layout: page
title: English Posts
permalink: /english/
language: english
description: "English tech blog posts with category-based organization"
---

# 🇺🇸 English Posts

Welcome! Here you can discover all English content organized by categories for easy browsing and find what you're looking for.

## 📂 Posts by Category

{% assign all_posts = site.posts %}
{% assign english_posts = "" | split: "" %}

{% for post in all_posts %}
  {% if post.lang == 'en' %}
    {% assign english_posts = english_posts | push: post %}
  {% elsif post.lang == nil and post.categories contains 'english' %}
    {% assign english_posts = english_posts | push: post %}
  {% elsif post.lang != 'ko' and post.categories contains 'tech-news-analysis' %}
    {% assign english_posts = english_posts | push: post %}
  {% endif %}
{% endfor %}

<!-- Categorize posts by category -->
{% assign tech_posts = "" | split: "" %}
{% assign ai_posts = "" | split: "" %}
{% assign automation_posts = "" | split: "" %}
{% assign study_posts = "" | split: "" %}
{% assign project_posts = "" | split: "" %}
{% assign startup_posts = "" | split: "" %}
{% assign news_posts = "" | split: "" %}
{% assign other_posts = "" | split: "" %}

{% for post in english_posts %}
  {% assign is_categorized = false %}
  
  {% if post.categories contains 'tech-news-analysis' %}
    {% assign news_posts = news_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'mcp' or post.categories contains 'automation' %}
    {% assign automation_posts = automation_posts | push: post %}
    {% assign is_categorized = true %}
  {% endif %}
  
  {% if post.categories contains 'ai' or post.title contains 'AI' or post.title contains 'Artificial Intelligence' %}
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

<!-- Tech News Analysis Category -->
{% if news_posts.size > 0 %}
<div class="category-section">
  <h3>📰 Tech News Analysis ({{ news_posts.size }} posts)</h3>
  <p class="category-description">Latest technology news and trend analysis</p>
  <div class="posts-grid">
    {% for post in news_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-news-posts" onclick="showAllPosts('news')" class="btn-secondary">View all {{ news_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Automation Category -->
{% if automation_posts.size > 0 %}
<div class="category-section">
  <h3>⚙️ Automation ({{ automation_posts.size }} posts)</h3>
  <p class="category-description">Jekyll, GitHub Actions, Claude MCP and automation tools</p>
  <div class="posts-grid">
    {% for post in automation_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-automation-posts" onclick="showAllPosts('automation')" class="btn-secondary">View all {{ automation_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Artificial Intelligence Category -->
{% if ai_posts.size > 0 %}
<div class="category-section">
  <h3>🤖 Artificial Intelligence ({{ ai_posts.size }} posts)</h3>
  <p class="category-description">AI research, machine learning and practical implementations</p>
  <div class="posts-grid">
    {% for post in ai_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-ai-posts" onclick="showAllPosts('ai')" class="btn-secondary">View all {{ ai_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Technology Category -->
{% if tech_posts.size > 0 %}
<div class="category-section">
  <h3>💻 Technology ({{ tech_posts.size }} posts)</h3>
  <p class="category-description">Programming guides, tech trends and problem solving</p>
  <div class="posts-grid">
    {% for post in tech_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-tech-posts" onclick="showAllPosts('tech')" class="btn-secondary">View all {{ tech_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Study/Learning Category -->
{% if study_posts.size > 0 %}
<div class="category-section">
  <h3>📖 Learning ({{ study_posts.size }} posts)</h3>
  <p class="category-description">Computer science studies and learning experiences</p>
  <div class="posts-grid">
    {% for post in study_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-study-posts" onclick="showAllPosts('study')" class="btn-secondary">View all {{ study_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Projects Category -->
{% if project_posts.size > 0 %}
<div class="category-section">
  <h3>🚀 Projects ({{ project_posts.size }} posts)</h3>
  <p class="category-description">Personal projects and portfolio showcases</p>
  <div class="posts-grid">
    {% for post in project_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-project-posts" onclick="showAllPosts('project')" class="btn-secondary">View all {{ project_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Startup/Business Category -->
{% if startup_posts.size > 0 %}
<div class="category-section">
  <h3>💼 Startup ({{ startup_posts.size }} posts)</h3>
  <p class="category-description">Tech entrepreneurship insights and experiences</p>
  <div class="posts-grid">
    {% for post in startup_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-startup-posts" onclick="showAllPosts('startup')" class="btn-secondary">View all {{ startup_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

<!-- Other Posts -->
{% if other_posts.size > 0 %}
<div class="category-section">
  <h3>📝 Other ({{ other_posts.size }} posts)</h3>
  <p class="category-description">Miscellaneous posts</p>
  <div class="posts-grid">
    {% for post in other_posts limit:6 %}
      <article class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
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
      <a href="#all-other-posts" onclick="showAllPosts('other')" class="btn-secondary">View all {{ other_posts.size }} posts</a>
    </div>
  {% endif %}
</div>
{% endif %}

</div>

## 📊 Category Summary

<div class="category-summary">
  <div class="summary-grid">
    {% if news_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">📰</span>
        <span class="summary-label">Tech News</span>
        <span class="summary-count">{{ news_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if automation_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">⚙️</span>
        <span class="summary-label">Automation</span>
        <span class="summary-count">{{ automation_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if ai_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">🤖</span>
        <span class="summary-label">AI</span>
        <span class="summary-count">{{ ai_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if tech_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">💻</span>
        <span class="summary-label">Technology</span>
        <span class="summary-count">{{ tech_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if study_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">📖</span>
        <span class="summary-label">Learning</span>
        <span class="summary-count">{{ study_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if project_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">🚀</span>
        <span class="summary-label">Projects</span>
        <span class="summary-count">{{ project_posts.size }} posts</span>
      </div>
    {% endif %}
    {% if startup_posts.size > 0 %}
      <div class="summary-item">
        <span class="summary-icon">💼</span>
        <span class="summary-label">Startup</span>
        <span class="summary-count">{{ startup_posts.size }} posts</span>
      </div>
    {% endif %}
  </div>
</div>

## 🔗 Navigation

<div class="navigation-links">
  <a href="{{ '/' | relative_url }}" class="btn-primary">← Home</a>
  <a href="{{ '/korean/' | relative_url }}" class="btn-primary">한국어 포스트 →</a>
  <a href="{{ '/categories/' | relative_url }}" class="btn-secondary">All Categories</a>
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

/* Mobile responsive */
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
  // Functionality for viewing all posts (implement as needed)
  alert('View all ' + category + ' posts feature is coming soon!');
}
</script>
