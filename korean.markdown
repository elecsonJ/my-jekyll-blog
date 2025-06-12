---
layout: page
title: "🇰🇷 한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다"
---

{% comment %} 언어 설정 로딩 {% endcomment %}
{% assign config = site.data.korean %}

{% comment %} 직접 포스트 필터링 - include의 변수 스코프 해결 {% endcomment %}
{% assign korean_posts = site.posts | where: "lang", "ko" %}

{% comment %} 추가 카테고리 필터링 - 파일명에 korean이 있거나 categories에 korean-posts가 있는 경우 {% endcomment %}
{% assign additional_korean_posts = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.lang == "ko" %}
    {% if post.name contains 'korean' or post.categories contains 'korean-posts' %}
      {% assign additional_korean_posts = additional_korean_posts | push: post %}
    {% endif %}
  {% endunless %}
{% endfor %}

{% comment %} 모든 한국어 포스트 병합 {% endcomment %}
{% assign all_korean_posts = korean_posts | concat: additional_korean_posts | uniq %}

<!-- 페이지 헤더 -->
<div class="page-header" style="text-align: center; margin-bottom: 40px;">
  <h1 style="font-size: 2.5em; margin-bottom: 10px;">{{ config.title }}</h1>
  <p style="font-size: 1.2em; color: #666;">{{ config.description }}</p>
  <div style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
    <p style="margin: 0; font-size: 1.1em;">총 <strong>{{ all_korean_posts.size }}개</strong>의 한국어 포스트가 있습니다</p>
  </div>
</div>

<!-- 카테고리 빠른 링크 섹션 -->
<div class="category-links-section" style="margin-bottom: 50px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
  <h2 style="text-align: center; margin-bottom: 30px; color: white;">📁 카테고리별 바로가기</h2>
  
  {% comment %} 카테고리별 포스트 분류 {% endcomment %}
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

  {% for post in all_korean_posts %}
    {% assign is_categorized = false %}
    
    {% if post.categories contains 'ai_news' or post.categories contains 'ai-news' %}
      {% assign ai_news_posts = ai_news_posts | push: post %}
      {% assign is_categorized = true %}
    {% endif %}
    
    {% unless is_categorized %}
      {% if post.categories contains 'tech_trends' or post.categories contains 'tech-trends' %}
        {% unless post.categories contains 'ai' or post.title contains 'AI' or post.title contains '인공지능' %}
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
      {% if post.categories contains 'ai' or post.title contains 'AI' or post.title contains '인공지능' or post.title contains 'Artificial Intelligence' %}
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

  <div class="category-quick-links">
    {% if tech_trends_posts.size > 0 %}
      <a href="#tech_trends_section" class="category-link">
        <span class="category-icon">{{ config.categories.tech_trends.icon }}</span>
        <span class="category-name">{{ config.categories.tech_trends.name }}</span>
        <span class="category-count">({{ tech_trends_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if ai_news_posts.size > 0 %}
      <a href="#ai_news_section" class="category-link">
        <span class="category-icon">{{ config.categories.ai_news.icon }}</span>
        <span class="category-name">{{ config.categories.ai_news.name }}</span>
        <span class="category-count">({{ ai_news_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if automation_posts.size > 0 %}
      <a href="#automation_section" class="category-link">
        <span class="category-icon">{{ config.categories.automation.icon }}</span>
        <span class="category-name">{{ config.categories.automation.name }}</span>
        <span class="category-count">({{ automation_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if ai_research_posts.size > 0 %}
      <a href="#ai_research_section" class="category-link">
        <span class="category-icon">{{ config.categories.ai_research.icon }}</span>
        <span class="category-name">{{ config.categories.ai_research.name }}</span>
        <span class="category-count">({{ ai_research_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if ai_practice_posts.size > 0 %}
      <a href="#ai_practice_section" class="category-link">
        <span class="category-icon">{{ config.categories.ai_practice.icon }}</span>
        <span class="category-name">{{ config.categories.ai_practice.name }}</span>
        <span class="category-count">({{ ai_practice_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if programming_posts.size > 0 %}
      <a href="#programming_section" class="category-link">
        <span class="category-icon">{{ config.categories.programming.icon }}</span>
        <span class="category-name">{{ config.categories.programming.name }}</span>
        <span class="category-count">({{ programming_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if study_posts.size > 0 %}
      <a href="#study_section" class="category-link">
        <span class="category-icon">{{ config.categories.study.icon }}</span>
        <span class="category-name">{{ config.categories.study.name }}</span>
        <span class="category-count">({{ study_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if project_posts.size > 0 %}
      <a href="#project_section" class="category-link">
        <span class="category-icon">{{ config.categories.project.icon }}</span>
        <span class="category-name">{{ config.categories.project.name }}</span>
        <span class="category-count">({{ project_posts.size }})</span>
      </a>
    {% endif %}
    
    {% if startup_posts.size > 0 %}
      <a href="#startup_section" class="category-link">
        <span class="category-icon">{{ config.categories.startup.icon }}</span>
        <span class="category-name">{{ config.categories.startup.name }}</span>
        <span class="category-count">({{ startup_posts.size }})</span>
      </a>
    {% endif %}
  </div>
</div>

<!-- 최근 포스트 섹션 -->
{% if all_korean_posts.size > 0 %}
<div class="recent-posts-section" style="margin-bottom: 60px; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 15px;">
  <h2 style="text-align: center; margin-bottom: 30px;">🖊 최근 포스트</h2>
  <div class="posts-grid">
    {% assign sorted_posts = all_korean_posts | sort: 'date' | reverse %}
    {% for post in sorted_posts limit:6 %}
      <article class="post-card" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.3s; margin-bottom: 20px;">
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

<!-- 카테고리별 포스트 섹션 -->
<div class="categories-container">

{% comment %} 각 카테고리 섹션 표시 {% endcomment %}
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

<!-- 카테고리 요약 -->
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

<!-- 네비게이션 버튼들 -->
<div class="navigation-buttons" style="margin-top: 50px; text-align: center; padding: 30px; background: #f8f9fa; border-radius: 15px;">
  <h3 style="margin-bottom: 20px; color: #333;">🔗 다른 페이지로 이동</h3>
  <div class="button-group" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <a href="{{ '/' | relative_url }}" class="nav-button home-button" style="display: inline-flex; align-items: center; padding: 15px 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: bold; transition: transform 0.3s;">
      <span style="margin-right: 8px;">🏠</span>
      홈페이지
    </a>
    <a href="{{ '/english/' | relative_url }}" class="nav-button english-button" style="display: inline-flex; align-items: center; padding: 15px 25px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: bold; transition: transform 0.3s;">
      <span style="margin-right: 8px;">🇺🇸</span>
      English Posts
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

.category-quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.category-link {
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.category-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  text-decoration: none;
}

.category-icon {
  font-size: 1.5em;
  margin-right: 10px;
}

.category-name {
  flex: 1;
  font-weight: bold;
}

.category-count {
  font-size: 0.9em;
  opacity: 0.8;
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
  
  .category-quick-links {
    grid-template-columns: 1fr;
  }
  
  .button-group {
    flex-direction: column;
  }
}
</style>
