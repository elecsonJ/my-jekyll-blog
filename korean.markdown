---
layout: page
title: "🇰🇷 한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다"
---

{% comment %} 언어 설정 로딩 {% endcomment %}
{% assign config = site.data.korean %}

{% comment %} 직접 한국어 포스트 필터링 - include의 변수 스코프 제한 피하기 {% endcomment %}
{% assign korean_posts = site.posts | where: "lang", "ko" %}

{% comment %} 추가 한국어 포스트 필터링 - 파일명에 korean이 있거나 categories에 korean-posts가 있는 경우 {% endcomment %}
{% assign additional_korean_posts = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.lang == "ko" %}
    {% if post.name contains 'korean' or post.categories contains 'korean-posts' %}
      {% assign additional_korean_posts = additional_korean_posts | push: post %}
    {% endif %}
  {% endunless %}
{% endfor %}

{% comment %} 모든 한국어 포스트 통합 {% endcomment %}
{% assign all_korean_posts = korean_posts | concat: additional_korean_posts | uniq %}

<!-- 페이지 설명 -->
<div class="page-stats" style="text-align: center; margin-bottom: 40px;">
  <p style="font-size: 1.1em; color: #888;">총 {{ all_korean_posts.size }}개의 포스트</p>
</div>

<!-- 카테고리별 포스트 빠른 링크 섹션 -->
<div class="category-posts-section" style="margin-bottom: 50px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
  <h2 style="text-align: center; margin-bottom: 30px; color: white;">📚 카테고리별 포스트</h2>
  
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

  <div class="category-post-lists">
    {% if tech_trends_posts.size > 0 %}
      <div class="category-post-group">
        <h3 class="category-header">
          <a href="#tech_trends_section" class="category-title-link">
            <span class="category-icon">{{ config.categories.tech_trends.icon }}</span>
            <span class="category-name">{{ config.categories.tech_trends.name }}</span>
            <span class="category-count">({{ tech_trends_posts.size }}개)</span>
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
              <a href="#tech_trends_section" class="more-link">+ {{ tech_trends_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ ai_news_posts.size }}개)</span>
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
              <a href="#ai_news_section" class="more-link">+ {{ ai_news_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ automation_posts.size }}개)</span>
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
              <a href="#automation_section" class="more-link">+ {{ automation_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ ai_research_posts.size }}개)</span>
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
              <a href="#ai_research_section" class="more-link">+ {{ ai_research_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ ai_practice_posts.size }}개)</span>
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
              <a href="#ai_practice_section" class="more-link">+ {{ ai_practice_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ programming_posts.size }}개)</span>
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
              <a href="#programming_section" class="more-link">+ {{ programming_posts.size | minus: 5 }}개 더 보기</a>
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
            <span class="category-count">({{ study_posts.size }}개)</span>
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
              <a href="#study_section" class="more-link">+ {{ study_posts.size | minus: 5 }}개 더 보기</a>
            </li>
          {% endif %}
        </ul>
      </div>
    {% endif %}
    