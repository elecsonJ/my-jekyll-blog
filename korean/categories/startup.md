---
layout: page
title: "창업"
permalink: /korean/categories/startup/
language: korean
description: "기술 창업 관련 인사이트와 경험 포스트들"
---

# 💼 창업 카테고리

기술 창업 관련 인사이트와 경험에 관한 포스트들입니다.

<div class="category-posts">
{% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'startup'" %}
{% if category_posts.size > 0 %}
  <div class="posts-list" style="margin: 30px 0;">
    {% for post in category_posts %}
      <article class="post-card" style="border: 1px solid #e9ecef; border-radius: 12px; padding: 24px; margin-bottom: 20px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: all 0.3s ease; cursor: pointer;" onclick="window.location.href='{{ post.url | relative_url }}'">
        <div class="post-header" style="margin-bottom: 16px;">
          <h2 style="margin: 0 0 8px 0; color: #333; font-size: 1.5em; line-height: 1.3;">
            <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: inherit;">{{ post.title }}</a>
          </h2>
          <div class="post-meta" style="color: #666; font-size: 0.9em; display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
            {% if post.author %}
              <span>by {{ post.author }}</span>
            {% endif %}
            {% if post.categories %}
              <div class="categories" style="display: flex; gap: 6px;">
                {% for category in post.categories %}
                  <span class="category-tag" style="background: #f9fbe7; color: #689f38; padding: 2px 8px; border-radius: 12px; font-size: 0.8em;">{{ category }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </div>
        
        <div class="post-content" style="margin-bottom: 16px;">
          {% if post.excerpt %}
            <p class="excerpt" style="color: #555; line-height: 1.6; margin: 0;">{{ post.excerpt | strip_html | truncate: 200 }}</p>
          {% elsif post.description %}
            <p class="excerpt" style="color: #555; line-height: 1.6; margin: 0;">{{ post.description | truncate: 200 }}</p>
          {% else %}
            <p class="excerpt" style="color: #555; line-height: 1.6; margin: 0;">{{ post.content | strip_html | truncate: 200 }}</p>
          {% endif %}
        </div>
        
        <div class="post-footer" style="display: flex; justify-content: space-between; align-items: center;">
          <a href="{{ post.url | relative_url }}" style="color: #8bc34a; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 4px;">
            더 읽기 
            <span style="transition: transform 0.2s ease;">→</span>
          </a>
          {% if post.tags %}
            <div class="tags" style="display: flex; gap: 4px; flex-wrap: wrap;">
              {% for tag in post.tags limit:3 %}
                <span style="background: #f5f5f5; color: #666; padding: 2px 6px; border-radius: 8px; font-size: 0.75em;">#{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
{% else %}
  <div style="text-align: center; padding: 60px 20px; color: #666;">
    <p style="font-size: 1.1em; margin-bottom: 10px;">이 카테고리에는 아직 포스트가 없습니다.</p>
    <p>곧 흥미로운 창업 포스트들이 추가될 예정입니다!</p>
  </div>
{% endif %}
</div>

<div class="navigation-links" style="text-align: center; margin: 40px 0;">
  <a href="{{ '/korean/' | relative_url }}" class="btn" style="display: inline-block; padding: 12px 24px; background: #8bc34a; color: white; text-decoration: none; border-radius: 8px; margin: 0 10px; font-weight: 600;">← 한국어 포스트 페이지로</a>
  <a href="{{ '/' | relative_url }}" class="btn" style="display: inline-block; padding: 12px 24px; background: #6c757d; color: white; text-decoration: none; border-radius: 8px; margin: 0 10px; font-weight: 600;">메인으로</a>
</div>

<style>
.post-card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.post-card:hover .post-footer a span {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .post-card {
    padding: 16px !important;
    margin-bottom: 16px !important;
  }
  
  .post-header h2 {
    font-size: 1.3em !important;
  }
  
  .post-meta {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }
}
</style>