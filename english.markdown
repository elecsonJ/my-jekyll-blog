---
layout: page
title: "🇺🇸 English Posts"
permalink: /english/
language: english
description: "English tech blog posts with category-based organization"
---

{% comment %} Load language configuration {% endcomment %}
{% assign config = site.data.english %}

{% comment %} Direct post filtering - solving include variable scope {% endcomment %}
{% assign english_posts = site.posts | where: "lang", "en" %}

{% comment %} Additional category filtering - files with english in name or categories with english-posts {% endcomment %}
{% assign additional_english_posts = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.lang == "en" %}
    {% if post.name contains 'english' or post.categories contains 'english-posts' %}
      {% assign additional_english_posts = additional_english_posts | push: post %}
    {% endif %}
  {% endunless %}
{% endfor %}

{% comment %} Merge all English posts {% endcomment %}
{% assign all_english_posts = english_posts | concat: additional_english_posts | uniq %}

<!-- Page Header -->
<div class="page-header" style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">{{ config.title }}</h1>
  <p style="font-size: 1.2em; color: #666;">{{ config.description }}</p>
  <div style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
    <p style="margin: 0; font-size: 1.1em;">Total of <strong>{{ all_english_posts.size }} posts</strong> in English</p>
  </div>
</div>

<!-- Category Posts List Section -->
<div class="category-posts-section" style="margin-bottom: 50px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
  <h2 style="text-align: center; margin-bottom: 30px; color: white;">📚 Posts by Category</h2>
  
  {% comment %} Categorize posts by type {% endcomment %}
  {% assign tech_trends_posts = "" | split: "" %}
  {% assign ai_news_posts = "" | split: "" %}
  {% assign automation_posts = "" | split: "" %}
  {% assign ai_research_posts = "" | split: "" %}
  {% assign ai_practice_posts = "" | split: "" %}
  {% assign programming_posts = "" | split: "" %}
  {% assign study_posts = "" | split: "" %}
  {% assign project_posts = "" | split: "" %}
  {% assign startup_posts = "" | split: "" %}
  {% assign other_posts = "" | split: "" %}

  {% for post in all_english_posts %}
    {% assign is_categorized = false %}
    
    {% if post.categories contains 'ai_news' or post.categories contains 'ai-news' %}
      {% assign ai_news_posts = ai_news_posts | push: post %}
      {% assign is_categorized = true %}
    {% endif %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'tech_trends' or post.categories contains 'tech-trends' %}
        {% unless post.categories contains 'ai' or post.title contains 'AI' or post.title contains 'Artificial Intelligence' %}
          {% assign tech_trends_posts = tech_trends_posts | push: post %}
          {% assign is_categorized = true %}
        {% endunless %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'mcp' or post.categories contains 'automation' or post.categories contains 'jekyll' or post.categories contains 'github-actions' %}
        {% assign automation_posts = automation_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'ai-research' or post.categories contains 'machine-learning-theory' or post.categories contains 'deep-learning-theory' or post.categories contains 'ai-theory' or post.categories contains 'ai-papers' %}
        {% assign ai_research_posts = ai_research_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'ai-practice' or post.categories contains 'ai-tutorial' or post.categories contains 'model-implementation' or post.categories contains 'ai-coding' %}
        {% assign ai_practice_posts = ai_practice_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'ai' or post.title contains 'AI' or post.title contains 'Artificial Intelligence' %}
        {% assign ai_practice_posts = ai_practice_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'programming' or post.categories contains 'tech' or post.categories contains 'coding' or post.categories contains 'development' or post.categories contains 'software-engineering' %}
        {% assign programming_posts = programming_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'study' or post.categories contains 'learning' or post.categories contains 'education' or post.categories contains 'computer-science' %}
        {% assign study_posts = study_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'project' or post.categories contains 'portfolio' or post.categories contains 'personal-project' %}
        {% assign project_posts = project_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'startup' or post.categories contains 'business' or post.categories contains 'entrepreneurship' %}
        {% assign startup_posts = startup_posts | push: post %}
        {% assign is_categorized = true %}
      {% endif %}
    {% endunless %}
    
    {% unless is_categorized %}
      {% assign other_posts = other_posts | push: post %}
    {% endunless %}
  {% endfor %}

  <div class="category-post-lists">
    {% if tech_trends_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#tech_trends_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.tech_trends.icon }}</span>
            <span class="category-name">{{ config.categories.tech_trends.name }}</span>
            <span class="category-count">({{ tech_trends_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_tech_posts = tech_trends_posts | sort: 'date' | reverse %}
          {% for post in sorted_tech_posts limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if tech_trends_posts.size > 5 %}
            <li class="more-posts">
              <a href="#tech_trends_section" class="more-link">+ {{ tech_trends_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if ai_news_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#ai_news_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.ai_news.icon }}</span>
            <span class="category-name">{{ config.categories.ai_news.name }}</span>
            <span class="category-count">({{ ai_news_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_ai_news = ai_news_posts | sort: 'date' | reverse %}
          {% for post in sorted_ai_news limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if ai_news_posts.size > 5 %}
            <li class="more-posts">
              <a href="#ai_news_section" class="more-link">+ {{ ai_news_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if automation_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#automation_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.automation.icon }}</span>
            <span class="category-name">{{ config.categories.automation.name }}</span>
            <span class="category-count">({{ automation_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_automation = automation_posts | sort: 'date' | reverse %}
          {% for post in sorted_automation limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if automation_posts.size > 5 %}
            <li class="more-posts">
              <a href="#automation_section" class="more-link">+ {{ automation_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if ai_research_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#ai_research_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.ai_research.icon }}</span>
            <span class="category-name">{{ config.categories.ai_research.name }}</span>
            <span class="category-count">({{ ai_research_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_ai_research = ai_research_posts | sort: 'date' | reverse %}
          {% for post in sorted_ai_research limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if ai_research_posts.size > 5 %}
            <li class="more-posts">
              <a href="#ai_research_section" class="more-link">+ {{ ai_research_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if ai_practice_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#ai_practice_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.ai_practice.icon }}</span>
            <span class="category-name">{{ config.categories.ai_practice.name }}</span>
            <span class="category-count">({{ ai_practice_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_ai_practice = ai_practice_posts | sort: 'date' | reverse %}
          {% for post in sorted_ai_practice limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if ai_practice_posts.size > 5 %}
            <li class="more-posts">
              <a href="#ai_practice_section" class="more-link">+ {{ ai_practice_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if programming_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#programming_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.programming.icon }}</span>
            <span class="category-name">{{ config.categories.programming.name }}</span>
            <span class="category-count">({{ programming_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_programming = programming_posts | sort: 'date' | reverse %}
          {% for post in sorted_programming limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if programming_posts.size > 5 %}
            <li class="more-posts">
              <a href="#programming_section" class="more-link">+ {{ programming_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if study_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#study_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.study.icon }}</span>
            <span class="category-name">{{ config.categories.study.name }}</span>
            <span class="category-count">({{ study_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_study = study_posts | sort: 'date' | reverse %}
          {% for post in sorted_study limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if study_posts.size > 5 %}
            <li class="more-posts">
              <a href="#study_section" class="more-link">+ {{ study_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if project_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#project_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.project.icon }}</span>
            <span class="category-name">{{ config.categories.project.name }}</span>
            <span class="category-count">({{ project_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_project = project_posts | sort: 'date' | reverse %}
          {% for post in sorted_project limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if project_posts.size > 5 %}
            <li class="more-posts">
              <a href="#project_section" class="more-link">+ {{ project_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    
    {% if startup_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#startup_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.startup.icon }}</span>
            <span class="category-name">{{ config.categories.startup.name }}</span>
            <span class="category-count">({{ startup_posts.size }} posts)</span>
          </a>
        </h3>
        <ul class="post-list">
          {% assign sorted_startup = startup_posts | sort: 'date' | reverse %}
          {% for post in sorted_startup limit:5 %}
            <li class="post-item">
              <a href="{{ post.url | relative_url }}" class="post-link">
                <span class="post-title">{{ post.title }}</span>
                <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
              </a>
            </li>
          {% endfor %}
          {% if startup_posts.size > 5 %}
            <li class="more-posts">
              <a href="#startup_section" class="more-link">+ {{ startup_posts.size | minus: 5 }} more</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
  </div>
</div>

<!-- Recent Posts Section -->
{% if all_english_posts.size > 0 %}
<div class="recent-posts-section" style="margin-bottom: 60px; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 15px;">
  <h2 style="text-align: center; margin-bottom: 30px;">🖊 Recent Posts</h2>
  <div class="posts-grid">
    {% assign sorted_posts = all_english_posts | sort: 'date' | reverse %}
    {% for post in sorted_posts limit:6 %}
      <article class="post-card" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.3s; margin-bottom: 20px;">
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

<!-- Category-based Post Sections -->
<div class="categories-container">

{% comment %} Display each category section {% endcomment %}
{% if tech_trends_posts.size > 0 %}
  <div id="tech_trends_section">
    {% include category-section.html posts=tech_trends_posts category_key='tech_trends' config=config %}
  </div>
{% endif %}

{% if ai_news_posts.size > 0 %}
  <div id="ai_news_section">
    {% include category-section.html posts=ai_news_posts category_key='ai_news' config=config %}
  </div>
{% endif %}

{% if automation_posts.size > 0 %}
  <div id="automation_section">
    {% include category-section.html posts=automation_posts category_key='automation' config=config %}
  </div>
{% endif %}

{% if ai_research_posts.size > 0 %}
  <div id="ai_research_section">
    {% include category-section.html posts=ai_research_posts category_key='ai_research' config=config %}
  </div>
{% endif %}

{% if ai_practice_posts.size > 0 %}
  <div id="ai_practice_section">
    {% include category-section.html posts=ai_practice_posts category_key='ai_practice' config=config %}
  </div>
{% endif %}

{% if programming_posts.size > 0 %}
  <div id="programming_section">
    {% include category-section.html posts=programming_posts category_key='programming' config=config %}
  </div>
{% endif %}

{% if study_posts.size > 0 %}
  <div id="study_section">
    {% include category-section.html posts=study_posts category_key='study' config=config %}
  </div>
{% endif %}

{% if project_posts.size > 0 %}
  <div id="project_section">
    {% include category-section.html posts=project_posts category_key='project' config=config %}
  </div>
{% endif %}

{% if startup_posts.size > 0 %}
  <div id="startup_section">
    {% include category-section.html posts=startup_posts category_key='startup' config=config %}
  </div>
{% endif %}

{% if other_posts.size > 0 %}
  {% include category-section.html posts=other_posts category_key='other' config=config %}
{% endif %}

</div>

<!-- Category Summary -->
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

<!-- Navigation Buttons -->
<div class="navigation-buttons" style="margin-top: 50px; text-align: center; padding: 30px; background: #f8f9fa; border-radius: 15px;">
  <h3 style="margin-bottom: 20px; color: #333;">🔗 Navigate to Other Pages</h3>
  <div class="button-group" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <a href="{{ '/' | relative_url }}" class="nav-button home-button" style="display: inline-flex; align-items: center; padding: 15px 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: bold; transition: transform 0.3s;">
      <span style="margin-right: 8px;">🏠</span>
      Home
    </a>
    <a href="{{ '/korean/' | relative_url }}" class="nav-button korean-button" style="display: inline-flex; align-items: center; padding: 15px 25px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: bold; transition: transform 0.3s;">
      <span style="margin-right: 8px;">🇰🇷</span>
      Korean Posts
    </a>
  </div>
</div>

<style>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.category-summary {
  margin: 40px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
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

/* Category Post Lists Styles */
.category-post-lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.category-post-group {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-header {
  margin: 0 0 15px 0;
}

.category-title-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

.category-title-link:hover {
  color: #f0f0f0;
  text-decoration: none;
  transform: translateY(-1px);
}

.category-icon {
  font-size: 1.3em;
  margin-right: 8px;
}

.category-name {
  flex: 1;
  font-weight: bold;
  font-size: 1.1em;
}

.category-count {
  font-size: 0.9em;
  opacity: 0.8;
  margin-left: 5px;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin-bottom: 8px;
}

.post-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.05);
}

.post-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-decoration: none;
  transform: translateX(3px);
}

.post-title {
  flex: 1;
  font-size: 0.9em;
  line-height: 1.3;
  margin-right: 10px;
}

.post-date {
  font-size: 0.8em;
  opacity: 0.7;
  white-space: nowrap;
}

.more-posts {
  margin-top: 10px;
  text-align: center;
}

.more-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.85em;
  padding: 5px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.more-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
}

.nav-button:hover {
  transform: translateY(-2px);
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .category-post-lists {
    grid-template-columns: 1fr;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .post-link {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .post-date {
    margin-top: 3px;
    align-self: flex-end;
  }
}
</style>
