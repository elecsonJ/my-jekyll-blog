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

{% comment %} 생략된 중간 부분... {% endcomment %}

</div>
