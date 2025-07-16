---
layout: page
title: "한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 독자를 위한 기술 블로그 포스트들"
---

# 🇰🇷 한국어 포스트

안녕하세요! 여기서는 한국어로 작성된 기술 블로그 포스트들을 확인할 수 있습니다.

## 📚 카테고리

### 📰 [기사 (News)]({{ '/korean/categories/news/' | relative_url }})
AI, 기술 관련 최신 뉴스와 업계 동향 분석
- 🤖 [AI 뉴스]({{ '/korean/categories/news/ai/' | relative_url }}) - AI 기업 동향, AI 산업 분석
- 📊 [기술 뉴스]({{ '/korean/categories/news/tech/' | relative_url }}) - IT 업계 동향, 기술 기업 분석

### 💡 [시사 통찰 (Insights)]({{ '/korean/categories/insights/' | relative_url }})
개인적인 의견과 시각으로 바라본 시대적 이슈와 통찰

### 🚀 [프로젝트 (Projects)]({{ '/korean/categories/projects/' | relative_url }})
개인 프로젝트, 대외활동, 개발 프로젝트 경험 공유
- ⚡ [개인 프로젝트]({{ '/korean/categories/projects/personal/' | relative_url }}) - 개인적으로 진행한 개발 프로젝트
- 🏆 [대외활동]({{ '/korean/categories/projects/external/' | relative_url }}) - 해커톤, 공모전, 팀 프로젝트

### 💻 [프로그래밍 (Programming)]({{ '/korean/categories/programming/' | relative_url }})
프로그래밍 언어, 알고리즘, 개발 방법론 및 기술 관련 내용

### 📚 [학습 기록 (Study)]({{ '/korean/categories/study/' | relative_url }})
개인 학습 과정, 회고, 성장 기록

### 💰 [금융 (Finance)]({{ '/korean/categories/finance/' | relative_url }})
투자, 금융 지식, 재테크 관련 정보와 경험

---

## 📝 최근 한국어 포스트

<div class="korean-posts">
{% assign all_posts = site.posts %}
{% assign korean_posts = "" | split: "" %}

{% for post in all_posts %}
  {% if post.lang == 'ko' or post.lang == nil or post.lang == 'korean' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% elsif post.language == 'korean' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% elsif post.lang != 'en' and post.lang != 'english' %}
    {% assign korean_posts = korean_posts | push: post %}
  {% endif %}
{% endfor %}

{% if korean_posts.size > 0 %}
  <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
    {% for post in korean_posts limit:12 %}
      <article class="post-preview" style="border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; background: white; transition: box-shadow 0.3s ease;">
        <h3 style="margin-top: 0;"><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h3>
        <p class="post-meta" style="color: #666; font-size: 0.9em; margin: 10px 0;">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
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
        <a href="{{ post.url | relative_url }}" style="color: #007bff; text-decoration: none; font-weight: bold;">더 읽기 →</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>아직 한국어 포스트가 없습니다. 곧 추가될 예정입니다!</p>
{% endif %}
</div>

<div class="navigation-links" style="text-align: center; margin: 40px 0;">
  <a href="{{ '/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">← 메인으로</a>
  <a href="{{ '/english/' | relative_url }}" class="btn" style="display: inline-block; padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; margin: 0 10px;">English Posts →</a>
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
