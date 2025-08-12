---
layout: default
title: "한국어 포스트"
permalink: /korean/
lang: ko
---

<style>
.korean-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
  padding: 30px 0;
}

.page-title {
  font-size: 3em;
  margin-bottom: 15px;
  color: white;
}

.page-description {
  font-size: 1.2em;
  opacity: 0.9;
  color: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.category-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.category-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.category-icon {
  font-size: 2em;
  margin-right: 15px;
}

.category-name {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}

.category-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  line-height: 1.6;
}

.category-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.post-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9em;
}

.view-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
}

.recent-posts {
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
}

.section-title {
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: white;
}

.posts-list {
  display: grid;
  gap: 20px;
}

.post-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.post-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

.post-title {
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
}

.post-meta {
  display: flex;
  gap: 20px;
  font-size: 0.9em;
  opacity: 0.8;
}

.post-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 10px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2em;
  }
}
</style>

<div class="korean-page-container">
  <!-- 페이지 헤더 -->
  <div class="page-header">
    <h1 class="page-title">📚 한국어 포스트</h1>
    <p class="page-description">기사, 시사통찰, 프로젝트, 프로그래밍, 학습기록 등 다양한 주제의 기술 블로그</p>
  </div>

  <!-- 카테고리 그리드 -->
  <div class="categories-grid">
    {% assign categories = site.data.korean.categories %}
    {% assign category_order = "news,analysis,dev,essay" | split: "," %}
    
    {% for cat_key in category_order %}
      {% assign category = categories[cat_key] %}
      {% if category %}
        <!-- 각 카테고리별 포스트 개수 계산 -->
        {% assign cat_posts_count = 0 %}
        {% assign posts_to_check = site.posts | where_exp: "post", "post.lang == 'ko' or post.language == 'korean' or post.categories contains 'korean-posts' or post.name contains 'korean'" %}
        
        {% for post in posts_to_check %}
          {% if post.categories contains cat_key %}
            {% assign cat_posts_count = cat_posts_count | plus: 1 %}
          {% endif %}
        {% endfor %}
        
        <a href="{{ '/korean/categories/' | append: cat_key | append: '/' | relative_url }}" class="category-card">
          <div class="category-header">
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-name">{{ category.name }}</span>
          </div>
          <p class="category-description">{{ category.description }}</p>
          <div class="category-stats">
            <span class="post-count">{{ cat_posts_count }}개의 글</span>
            <span class="view-link">보러가기 →</span>
          </div>
        </a>
      {% endif %}
    {% endfor %}
  </div>

  <!-- 최신 포스트 섹션 -->
  <div class="recent-posts">
    <h2 class="section-title">🆕 최신 포스트</h2>
    <div class="posts-list">
      {% assign korean_posts = site.posts | where_exp: "post", "post.lang == 'ko' or post.language == 'korean' or post.categories contains 'korean-posts' or post.name contains 'korean'" | sort: 'date' | reverse %}
      
      {% for post in korean_posts limit: 10 %}
        <div class="post-item">
          <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
          <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</span>
            {% if post.categories[0] %}
              {% assign display_cat = post.categories[0] %}
              
              {% if categories[display_cat] %}
                <span class="post-category">{{ categories[display_cat].name }}</span>
              {% else %}
                <span class="post-category">{{ display_cat }}</span>
              {% endif %}
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <!-- 네비게이션 -->
  <div style="text-align: center; margin-top: 60px; padding: 30px;">
    <a href="{{ '/' | relative_url }}" style="display: inline-block; padding: 15px 30px; background: white; color: #667eea; border-radius: 10px; text-decoration: none; font-weight: bold; margin: 0 10px;">
      🏠 홈으로
    </a>
    <a href="{{ '/english/' | relative_url }}" style="display: inline-block; padding: 15px 30px; background: white; color: #667eea; border-radius: 10px; text-decoration: none; font-weight: bold; margin: 0 10px;">
      🇺🇸 English Posts
    </a>
  </div>
</div>

<script>
// 부드러운 스크롤 효과
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.category-card, .post-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          entry.target.style.transition = 'all 0.5s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  });
  
  cards.forEach(card => observer.observe(card));
});
</script>