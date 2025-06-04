#!/usr/bin/env python3
import os
import requests
import datetime
from pathlib import Path
import yaml
import json

class AutoBlogGenerator:
    def __init__(self, posts_dir="_posts"):
        self.posts_dir = Path(posts_dir)
        self.posts_dir.mkdir(exist_ok=True)
    
    def create_tech_news_post(self):
        """기술 뉴스 자동 수집 및 포스트 생성"""
        try:
            # GitHub Trending API (무료)
            url = "https://api.github.com/search/repositories"
            params = {
                'q': 'created:>2025-01-01',
                'sort': 'stars',
                'order': 'desc',
                'per_page': 5
            }
            
            response = requests.get(url, params=params)
            data = response.json()
            
            # 포스트 내용 생성
            content = self._generate_trending_content(data['items'])
            
            # 파일명 생성
            date = datetime.datetime.now()
            filename = f"{date.strftime('%Y-%m-%d')}-weekly-github-trending.md"
            filepath = self.posts_dir / filename
            
            # Front matter
            front_matter = {
                'layout': 'post',
                'title': f"이번 주 GitHub 트렌딩 프로젝트 ({date.strftime('%Y.%m.%d')})",
                'date': date.strftime('%Y-%m-%d %H:%M:%S +0900'),
                'categories': ['tech', 'github'],
                'tags': ['trending', 'opensource', 'development'],
                'description': '이번 주 가장 주목받는 GitHub 오픈소스 프로젝트들을 소개합니다.'
            }
            
            # 마크다운 파일 작성
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write('---\n')
                yaml.dump(front_matter, f, default_flow_style=False, allow_unicode=True)
                f.write('---\n\n')
                f.write(content)
            
            print(f"✅ 새 포스트 생성: {filename}")
            return filepath
            
        except Exception as e:
            print(f"❌ 포스트 생성 실패: {e}")
            return None
    
    def _generate_trending_content(self, repos):
        """트렌딩 리포지토리 데이터로 포스트 내용 생성"""
        content = """개발자들이 주목하는 최신 GitHub 트렌딩 프로젝트들을 살펴보겠습니다.

## 🔥 이번 주 인기 프로젝트

"""
        
        for i, repo in enumerate(repos, 1):
            language = repo.get('language', 'Unknown')
            stars = repo.get('stargazers_count', 0)
            description = repo.get('description', '설명 없음')
            
            content += f"""### {i}. [{repo['name']}]({repo['html_url']})

**언어:** {language} | **⭐ Stars:** {stars:,}

{description}

**주요 특징:**
- 최근 주목받고 있는 {language} 프로젝트
- {stars:,}개의 스타를 획득하며 빠른 성장세
- 실무 적용 가능성이 높은 도구

---

"""
        
        content += """## 💡 개발자를 위한 인사이트

이번 주 트렌딩 프로젝트들을 보면 다음과 같은 트렌드를 확인할 수 있습니다:

1. **오픈소스 생태계의 활성화**: 다양한 분야에서 혁신적인 도구들이 등장
2. **개발 생산성 향상**: 개발자 경험(DX)을 개선하는 도구들에 대한 관심 증가
3. **AI/ML 통합**: 기존 도구들에 AI 기능을 통합하는 사례 증가

## 🚀 실무 적용 방안

이러한 트렌딩 프로젝트들을 어떻게 실무에 활용할 수 있을까요?

- **학습 우선순위 설정**: 인기 있는 기술 스택을 우선적으로 학습
- **프로젝트 아이디어**: 트렌딩 프로젝트를 참고한 개선 아이디어 도출
- **기술 스택 결정**: 새 프로젝트의 기술 선택 시 참고 자료로 활용

---

*이 포스트는 자동으로 생성되었습니다. 더 자세한 분석이나 특정 프로젝트에 대한 문의는 댓글로 남겨주세요.*
"""
        
        return content

if __name__ == "__main__":
    generator = AutoBlogGenerator()
    generator.create_tech_news_post()
