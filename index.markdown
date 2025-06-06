---
layout: home
title: "재훈의 AI 자동화 블로그"
description: "AI, 자동화, Jekyll을 활용한 기술 블로그"
---

<!-- 언어별 네비게이션 섹션 -->
<div class="language-navigation" style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center;">
  <h2 style="margin-bottom: 15px;">🌍 Choose Your Language / 언어를 선택하세요</h2>
  
  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <a href="{{ '/korean/' | relative_url }}" class="language-btn" 
       style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
      🇰🇷 한국어 포스트
    </a>
    
    <a href="{{ '/english/' | relative_url }}" class="language-btn"
       style="display: inline-block; padding: 12px 24px; background: #28a745; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
      🇺🇸 English Posts
    </a>
  </div>
</div>

<!-- 블로그 소개 섹션 -->
<div class="blog-intro" style="margin: 30px 0;">
  <h2>🚀 Welcome to My Tech Blog</h2>
  
  <p><strong>안녕하세요!</strong> 서울시립대학교 컴퓨터과학부 2학년 한재훈입니다.</p>
  
  <p>이 블로그는 <strong>Jekyll</strong>과 <strong>Claude MCP</strong>, <strong>GitHub Actions</strong>를 활용한 
  완전 자동화 시스템으로 운영됩니다.</p>
  
  <h3>🎯 주요 주제</h3>
  <ul>
    <li><strong>인공지능 (AI)</strong> - 머신러닝, 딥러닝 연구 및 실습</li>
    <li><strong>자동화 (Automation)</strong> - Jekyll, GitHub Actions, Claude MCP</li>
    <li><strong>웹 개발 (Web Development)</strong> - 프론트엔드, 백엔드 기술</li>
    <li><strong>알고리즘 (Algorithm)</strong> - 컴퓨터과학 학습 과정</li>
    <li><strong>프로젝트 (Project)</strong> - 개인 프로젝트 및 포트폴리오</li>
    <li><strong>뉴스 & 트렌드 (News)</strong> - 기술 업계 최신 동향</li>
  </ul>
</div>

<!-- 기술 스택 섹션 -->
<div class="tech-stack" style="background: #f8f9fa; padding: 20px; margin: 30px 0; border-radius: 8px;">
  <h2>💻 Tech Stack</h2>
  
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
    {% assign tech_items = "Python,Jekyll,GitHub Actions,Claude MCP,JavaScript,HTML/CSS,Git,Markdown" | split: "," %}
    {% for tech in tech_items %}
      <span style="background: #007bff; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9em;">
        {{ tech }}
      </span>
    {% endfor %}
  </div>
</div>

<!-- 연락처 및 링크 -->
<div class="contact-links" style="text-align: center; margin: 30px 0; padding: 20px; background: #e9ecef; border-radius: 8px;">
  <h2>🔗 Connect with Me</h2>
  
  <div style="margin-top: 15px;">
    <a href="https://github.com/elecsonJ" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #333; color: white; text-decoration: none; border-radius: 5px;">
      📄 GitHub
    </a>
    
    <a href="mailto:gkswogns2013@gmail.com" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #dc3545; color: white; text-decoration: none; border-radius: 5px;">
      📧 Email
    </a>
    
    <a href="{{ '/about/' | relative_url }}" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #28a745; color: white; text-decoration: none; border-radius: 5px;">
      🙋‍💻 About Me
    </a>
  </div>
</div>
