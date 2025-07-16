---
layout: page
title: "한국어 포스트"
permalink: /korean/
language: korean
description: "한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다"
---

# 🇰🇷 한국어 포스트

한국어 기술 블로그 포스트를 카테고리별로 정리한 페이지입니다

{% include post-categorizer.html language='ko' %}

총 {{ tech_analysis_posts.size | plus: ai_news_posts.size | plus: algorithm_posts.size | plus: ai_lab_posts.size | plus: automation_posts.size | plus: programming_posts.size | plus: study_posts.size | plus: project_posts.size | plus: startup_posts.size | plus: dev_life_posts.size | plus: other_posts.size }}개의 포스트

## 📊 카테고리별 포스트

<div class="categories-container">

{% if tech_analysis_posts.size > 0 %}
<div class="category-section">
  <h3>📈 [기술시장분석]({{ '/korean/categories/tech_analysis/' | relative_url }}) ({{ tech_analysis_posts.size }}개)</h3>
  <p class="category-description">기술 산업 동향과 시장 분석</p>
  <div class="posts-grid">
    {% for post in tech_analysis_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if tech_analysis_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/tech_analysis/' | relative_url }}" class="btn-primary">+ {{ tech_analysis_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if ai_news_posts.size > 0 %}
<div class="category-section">
  <h3>🤖 [AI뉴스]({{ '/korean/categories/ai_news/' | relative_url }}) ({{ ai_news_posts.size }}개)</h3>
  <p class="category-description">AI 업계 최신 뉴스와 동향 분석</p>
  <div class="posts-grid">
    {% for post in ai_news_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if ai_news_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/ai_news/' | relative_url }}" class="btn-primary">+ {{ ai_news_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if algorithm_posts.size > 0 %}
<div class="category-section">
  <h3>💻 [알고리즘]({{ '/korean/categories/algorithm/' | relative_url }}) ({{ algorithm_posts.size }}개)</h3>
  <p class="category-description">알고리즘 문제 해결과 데이터 구조</p>
  <div class="posts-grid">
    {% for post in algorithm_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if algorithm_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/algorithm/' | relative_url }}" class="btn-primary">+ {{ algorithm_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if ai_lab_posts.size > 0 %}
<div class="category-section">
  <h3>🧠 [AI연구실습]({{ '/korean/categories/ai_lab/' | relative_url }}) ({{ ai_lab_posts.size }}개)</h3>
  <p class="category-description">AI 이론, 연구, 실습 프로젝트</p>
  <div class="posts-grid">
    {% for post in ai_lab_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if ai_lab_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/ai_lab/' | relative_url }}" class="btn-primary">+ {{ ai_lab_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if automation_posts.size > 0 %}
<div class="category-section">
  <h3>⚙️ [자동화]({{ '/korean/categories/automation/' | relative_url }}) ({{ automation_posts.size }}개)</h3>
  <p class="category-description">업무 자동화, 스크립트, 도구 개발</p>
  <div class="posts-grid">
    {% for post in automation_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if automation_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/automation/' | relative_url }}" class="btn-primary">+ {{ automation_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if programming_posts.size > 0 %}
<div class="category-section">
  <h3>💻 [프로그래밍]({{ '/korean/categories/programming/' | relative_url }}) ({{ programming_posts.size }}개)</h3>
  <p class="category-description">프로그래밍 언어, 개발 방법론, 소프트웨어 엔지니어링</p>
  <div class="posts-grid">
    {% for post in programming_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if programming_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/programming/' | relative_url }}" class="btn-primary">+ {{ programming_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if study_posts.size > 0 %}
<div class="category-section">
  <h3>📚 [학습 기록]({{ '/korean/categories/study/' | relative_url }}) ({{ study_posts.size }}개)</h3>
  <p class="category-description">개인 학습 과정, 회고, 성장 기록</p>
  <div class="posts-grid">
    {% for post in study_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if study_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/study/' | relative_url }}" class="btn-primary">+ {{ study_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if project_posts.size > 0 %}
<div class="category-section">
  <h3>🚀 [프로젝트]({{ '/korean/categories/project/' | relative_url }}) ({{ project_posts.size }}개)</h3>
  <p class="category-description">개인/팀 프로젝트, 오픈소스 기여, 포트폴리오</p>
  <div class="posts-grid">
    {% for post in project_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if project_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/project/' | relative_url }}" class="btn-primary">+ {{ project_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if startup_posts.size > 0 %}
<div class="category-section">
  <h3>💡 [창업아이디어]({{ '/korean/categories/startup/' | relative_url }}) ({{ startup_posts.size }}개)</h3>
  <p class="category-description">창업 아이디어, 비즈니스 모델, 스타트업 생태계</p>
  <div class="posts-grid">
    {% for post in startup_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if startup_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/startup/' | relative_url }}" class="btn-primary">+ {{ startup_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if dev_life_posts.size > 0 %}
<div class="category-section">
  <h3>☕ [개발자일상]({{ '/korean/categories/dev_life/' | relative_url }}) ({{ dev_life_posts.size }}개)</h3>
  <p class="category-description">개발자 문화, 일상, 회고, 성장 이야기</p>
  <div class="posts-grid">
    {% for post in dev_life_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if dev_life_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/dev_life/' | relative_url }}" class="btn-primary">+ {{ dev_life_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

{% if other_posts.size > 0 %}
<div class="category-section">
  <h3>📋 [기타]({{ '/korean/categories/other/' | relative_url }}) ({{ other_posts.size }}개)</h3>
  <p class="category-description">카테고리에 속하지 않는 다양한 주제의 이야기</p>
  <div class="posts-grid">
    {% for post in other_posts limit:6 %}
      <div class="post-card">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-meta">
          <time>{{ post.date | date: "%m/%d" }}</time>
          {% if post.categories %}
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          {% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
  {% if other_posts.size > 6 %}
    <div class="view-more">
      <a href="{{ '/korean/categories/other/' | relative_url }}" class="btn-primary">+ {{ other_posts.size | minus: 6 }}개 더 보기</a>
    </div>
  {% endif %}
</div>
{% endif %}

</div>

## 🕒 최근 포스트

<div class="posts-grid">
  {% assign all_posts = tech_analysis_posts | concat: ai_news_posts | concat: algorithm_posts | concat: ai_lab_posts | concat: automation_posts | concat: programming_posts | concat: study_posts | concat: project_posts | concat: startup_posts | concat: dev_life_posts | concat: other_posts %}
  {% assign recent_posts = all_posts | sort: 'date' | reverse %}
  {% for post in recent_posts limit:6 %}
    <article class="post-card">
      <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
        {% if post.categories %}
          {% for category in post.categories %}
            <span class="category-tag">{{ category }}</span>
          {% endfor %}
        {% endif %}
      </p>
      {% if post.excerpt %}
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      {% elsif post.description %}
        <p class="excerpt">{{ post.description | truncate: 150 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

## 🔗 다른 페이지로 이동

<div style="text-align: center; margin: 40px 0;">
  <a href="{{ '/' | relative_url }}" class="btn-primary">🏠 홈페이지</a>
  <a href="{{ '/english/' | relative_url }}" class="btn-secondary">🇺🇸 English Posts</a>
</div>