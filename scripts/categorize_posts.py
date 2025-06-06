#!/usr/bin/env python3
"""
Jekyll 블로그 포스트 카테고리 자동 분류 스크립트
이 스크립트는 모든 포스트의 front matter를 분석하고 
일관된 카테고리 시스템으로 업데이트합니다.
"""

import os
import re
import yaml
from typing import List, Dict, Tuple

def categorize_post_by_filename(filename: str) -> Tuple[str, List[str]]:
    """파일명을 기반으로 언어와 카테고리를 결정합니다."""
    lower = filename.lower()
    
    # 언어 판별
    if '-english' in lower:
        lang = 'en'
    elif '-korean' in lower or 'guide-korean' in lower:
        lang = 'ko'
    else:
        lang = 'ko'  # 기본값
    
    # 주제별 카테고리 분류
    categories = []
    
    # AI 관련
    if any(keyword in lower for keyword in ['ai', 'agi', 'deepmind', 'ernie', 'claude', 'breakthrough', 'anthropic']):
        categories.append('ai')
    
    # 자동화 관련  
    if any(keyword in lower for keyword in ['mcp', 'automation', 'automated', 'jekyll', 'github-actions', 'shortcuts']):
        categories.append('automation')
    
    # 기술 관련
    if any(keyword in lower for keyword in ['baekjoon', 'solution', 'troubleshooting', 'guide', 'developer', 'trending']):
        categories.append('tech')
    
    # 블로그 관련
    if any(keyword in lower for keyword in ['blog', 'welcome', 'deployment-test']):
        categories.append('blog')
    
    # 프로젝트 관련 (추후 확장 가능)
    if any(keyword in lower for keyword in ['project']):
        categories.append('project')
    
    # 기본 카테고리가 없다면 tech 추가
    if not categories:
        categories.append('tech')
    
    return lang, categories

def update_front_matter(content: str, new_categories: List[str], lang: str) -> str:
    """포스트의 front matter를 업데이트합니다."""
    
    # YAML front matter 추출
    if not content.startswith('---'):
        return content
    
    try:
        # front matter와 본문 분리
        parts = content.split('---', 2)
        if len(parts) < 3:
            return content
            
        front_matter_str = parts[1].strip()
        body = parts[2]
        
        # YAML 파싱
        front_matter = yaml.safe_load(front_matter_str)
        
        # 카테고리 업데이트
        front_matter['categories'] = new_categories
        front_matter['lang'] = lang
        
        # YAML 재생성
        updated_front_matter = yaml.dump(front_matter, default_flow_style=False, allow_unicode=True)
        
        # 전체 내용 재구성
        return f"---\n{updated_front_matter}---{body}"
        
    except Exception as e:
        print(f"YAML 파싱 오류: {e}")
        return content

def main():
    """메인 실행 함수"""
    
    # 파일 매핑 (실제 사용시에는 GitHub API를 통해 동적으로 가져와야 함)
    post_files = [
        "2025-01-15-ai-era-developer-guide-english.md",
        "2025-01-15-ai-era-developer-guide-korean.md",
        "2025-06-04-ai-breakthroughs-2025-analysis.md",
        "2025-06-04-automated-jekyll-blog-claude-mcp.md",
        "2025-06-04-baekjoon-1000-solution.md",
        "2025-06-04-claude-mcp-github-actions-troubleshooting-guide.md",
        "2025-06-04-deployment-test.md",
        "2025-06-04-jekyll-automation-blog-launch.md",
        "2025-06-04-latest-ai-breakthroughs-2025.md",
        "2025-06-04-mcp-servers-complete-guide.md",
        "2025-06-04-ultimate-mcp-server-guide.md",
        "2025-06-04-weekly-github-trending.md",
        "2025-06-04-welcome-to-jekyll.markdown",
        "2025-06-05-agi-2030-prediction-safety-analysis.md",
        "2025-06-05-apple-shortcuts-ai-evolution-english.md",
        "2025-06-05-apple-shortcuts-ai-evolution-korean.md",
        "2025-06-05-apple-wwdc-2025-ai-shortcuts-automation.md",
        "2025-06-05-baidu-ernie-open-source-strategy-analysis.md",
        "2025-06-05-baidu-ernie-open-source-strategy-english.md",
        "2025-06-05-google-deepmind-alphaevolve-breakthrough.md",
        "2025-06-05-google-deepmind-alphaevolve-english.md",
        "2025-06-05-reddit-anthropic-lawsuit-english.md",
        "2025-06-05-reddit-anthropic-lawsuit-korean.md"
    ]
    
    print("📝 포스트 카테고리 분류 시작...")
    print("=" * 50)
    
    updated_count = 0
    
    for filename in post_files:
        lang, categories = categorize_post_by_filename(filename)
        
        print(f"📄 {filename}")
        print(f"   언어: {lang}")
        print(f"   카테고리: {categories}")
        print(f"   제안 front matter:")
        print(f"   categories: {categories}")
        print(f"   lang: {lang}")
        print()
        
        updated_count += 1
    
    print(f"✅ 총 {updated_count}개 포스트 분류 완료!")
    print()
    print("🎯 다음 단계:")
    print("1. GitHub API를 통해 각 포스트의 front matter 업데이트")
    print("2. 카테고리 페이지에서 정상 작동 확인")
    print("3. 언어별 필터링 기능 테스트")

if __name__ == "__main__":
    main()
