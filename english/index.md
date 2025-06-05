---
layout: page
title: "English Posts"
permalink: /english/
language: english
description: "Tech blog posts in English for global readers"
---

# 🇺🇸 English Posts

Welcome! Here you can find all the tech blog posts written in English.

## 📚 Categories

### 🖥️ Technology (Tech)
AI, machine learning, web development and other technology-related posts

### 🤖 Artificial Intelligence (AI)
AI research, machine learning studies and practical implementations

### ⚙️ Automation
Jekyll, GitHub Actions, Claude MCP and other automation tools

### 📖 Study
Computer science learning journey and experience sharing

### 🚀 Project
Personal projects and portfolio showcases

### 💼 Startup
Technology startup insights and entrepreneurial experiences

### 📰 Tech News Analysis
Analysis of latest technology news and industry trends

---

## 📝 Latest English Posts

<div class="english-posts">
{% assign english_posts = site.posts | where_exp: "post", "post.lang == 'en' or post.categories contains 'english' or (post.categories contains 'tech-news-analysis' and post.lang == 'en')" %}
{% if english_posts.size > 0 %}
  <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
    {% for post in english_posts limit:12 %}
      <article class="post-preview" style="border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; background: white; transition: box-shadow 0.3s ease;">
        <h3 style="margin-top: 0;"><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h3>
        <p class="post-meta" style="color: #666; font-size: 0.9em; margin: 10px 0;">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          {% if post.categories %}
            <span class="categories">
              {% for category in post.categories %}
                <span class="category" style="background: #e9ecef; padding: 2px 8px; border-radius: 4px; margin-left: 5px; font-size: 0.8em;">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt" style="color: #555; line-height: 1.5;">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        {% elsif post.description %}
          <p class="excerpt" style="color: #555; line-height: 1.5;">{{ post.description | truncate: 150 }}</p>
        {% endif %}
        <a href="{{ post.url | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">Read more →</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No English posts available yet. Stay tuned for upcoming content!</p>
{% endif %}
</div>

<div class="navigation-links" style="text-align: center; margin: 40px 0;">
  <a href="{{ '/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">← Home</a>
  <a href="{{ '/korean/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">한국어 포스트 →</a>
</div>

<style>
.post-preview:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.posts-grid article {
  transition: transform 0.2s ease;
}

.posts-grid article:hover {
  transform: translateY(-2px);
}
</style>
