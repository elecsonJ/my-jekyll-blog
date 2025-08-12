# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Environment Setup

### Local Development
```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build --baseurl "/my-jekyll-blog"
```

### Blog Post Creation
```bash
# Create new post (filename format is critical)
touch _posts/YYYY-MM-DD-post-title-slug.md
```

## Blog Architecture and Quality Standards

### Post Quality Classification System
This blog operates on a strict quality tier system:

- **S-tier (고품질)**: 2,000+ words, original insights, concrete data/evidence, practical applications
- **A-tier (중품질)**: 1,000-2,000 words, informative but may lack originality  
- **B-tier (저품질)**: <1,000 words, basic summaries, limited reader value
- **C-tier (제거대상)**: Test posts, incomplete content, formatting errors

### Content Standards
- Minimum 2,000 words for high-quality posts
- Must include concrete examples, case studies, or real-world data
- Avoid superficial bullet-point lists without deep analysis
- Include practical applications and actionable insights

### Front Matter Template
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2, tag3]
lang: ko  # or en
description: "SEO-optimized post summary"
---
```

### Category System
The blog uses a simplified 4-category system for clear content organization:

- **news**: Industry news, company announcements, timely issues and trends
- **analysis**: Deep-dive analysis, social impact of technology, philosophical insights  
- **dev**: Programming, tools, projects, developer career - everything development-related
- **essay**: Personal experiences, thoughts, learning records, reflections - subjective perspectives

**Important**: Each post should have exactly ONE primary category. Avoid mixing categories unless absolutely necessary.

## Content Management Workflow

### Quality Control Process
1. Write content following S-tier standards (2,000+ words)
2. Include specific examples, case studies, statistics
3. Add cross-references to related posts
4. Commit with detailed Korean commit messages
5. Deploy to GitHub Pages automatically

### Git Workflow
All commits should use Korean commit messages with this format:
```bash
git commit -m "포스트 제목 추가/수정

- 주요 변경사항 설명
- 카테고리: [category]
- 태그: [tag1, tag2]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Automation and CI/CD

### GitHub Actions Workflow
- **Trigger**: Push to main branch or daily at 9 AM KST
- **Process**: Auto-generates posts → Builds Jekyll → Deploys to GitHub Pages
- **Python Scripts**: Located in `scripts/` directory for content generation

### Auto-Generated Content
The `scripts/auto_blog_generator.py` generates:
- Weekly GitHub trending posts
- Algorithm problem solutions (Baekjoon)
- Tech news summaries

These auto-generated posts are typically B or C-tier quality and should be manually reviewed/enhanced or removed.

## Key Documentation Files

### Essential References
- `BLOG_MANAGEMENT_MANUAL.md`: Comprehensive operational guide
- `BLOG_QUALITY_ASSESSMENT.md`: Current quality status of all posts
- `CATEGORY_SYSTEM_GUIDE.md`: Category management system
- `ARCHITECTURE.md`: Technical system structure

### Cross-Document Navigation
All documentation includes cross-reference links. Always check these files before making structural changes.

## Content Creation Guidelines

### High-Quality Post Structure
1. **Compelling Opening**: Start with real scenarios, specific cases, or striking statistics
2. **Chapter-Based Organization**: Use clear chapter divisions for long-form content
3. **Concrete Examples**: Include named individuals (pseudonyms OK), companies, specific data
4. **Multiple Perspectives**: Present different viewpoints on complex issues
5. **Actionable Conclusions**: End with practical implications or solutions

### Avoid These Patterns
- Simple bullet-point summaries without context
- Generic industry overviews without unique insights  
- Test posts or placeholder content
- Pure translation posts without added value
- Algorithm solutions without educational context

## Site Configuration

### Jekyll Settings
- **Base URL**: `/my-jekyll-blog`
- **Hosting**: GitHub Pages at `elecsonj.github.io`
- **Plugins**: SEO-tag, sitemap, feed, paginate
- **Language**: Primarily Korean with some English content

### Multi-language Support
- Korean content: Default, stored in main `_posts/`
- English content: Uses `lang: en` in front matter
- Category pages: Separate Korean/English directory structures

## Quality Maintenance

### Monthly Review Process
1. Assess all posts against quality tiers
2. Remove or enhance C-tier content
3. Update cross-references and internal links
4. Check for outdated information in tech posts

### Current Quality Metrics (as of 2025-07-17)
- Total posts: 33 (after cleanup from 44)
- S-tier: 12 posts (36%)
- A-tier: 21 posts (64%) 
- B/C-tier: 0 posts (cleaned up)
- Target: 60% S-tier within 6 months