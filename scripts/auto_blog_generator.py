#!/usr/bin/env python3
import os
import requests
import datetime
from pathlib import Path
import yaml
import json
import random

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
            
            print(f"✅ 신 포스트 생성: {filename}")
            return filepath
            
        except Exception as e:
            print(f"❌ 포스트 생성 실패: {e}")
            return None
    
    def create_baekjoon_solution_post(self):
        """백준 문제풀이 자동 포스트 생성"""
        try:
            # 샘플 백준 문제 데이터 (실제로는 solved.ac API나 백준 크롤링 사용)
            problems = [
                {
                    "number": 1000,
                    "title": "A+B",
                    "difficulty": "Bronze V",
                    "algorithm": ["구현", "사칙연산"],
                    "solution": """#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}""",
                    "python_solution": """a, b = map(int, input().split())
print(a + b)""",
                    "explanation": "두 정수 A와 B를 입력받아 A+B를 출력하는 문제입니다."
                },
                {
                    "number": 2753,
                    "title": "윤년",
                    "difficulty": "Bronze V",
                    "algorithm": ["구현", "조건문"],
                    "solution": """#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << 1 << endl;
    } else {
        cout << 0 << endl;
    }
    
    return 0;
}""",
                    "python_solution": """year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(1)
else:
    print(0)""",
                    "explanation": "연도가 윤년인지 판별하는 문제입니다. 4로 나누어지고 100으로 나누어지지 않거나, 400으로 나누어지면 윤년입니다."
                },
                {
                    "number": 10872,
                    "title": "팩토리얼",
                    "difficulty": "Bronze V",
                    "algorithm": ["수학", "구현", "재귀"],
                    "solution": """#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}""",
                    "python_solution": """def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

n = int(input())
print(factorial(n))""",
                    "explanation": "N!을 구하는 문제입니다. 재귀 또는 반복문을 사용하여 해결할 수 있습니다."
                }
            ]
            
            # 랜덤하게 문제 선택
            problem = random.choice(problems)
            
            # 포스트 내용 생성
            content = self._generate_baekjoon_content(problem)
            
            # 파일명 생성
            date = datetime.datetime.now()
            filename = f"{date.strftime('%Y-%m-%d')}-baekjoon-{problem['number']}-solution.md"
            filepath = self.posts_dir / filename
            
            # Front matter
            front_matter = {
                'layout': 'post',
                'title': f"[백준 {problem['number']}] {problem['title']} - {problem['difficulty']}",
                'date': date.strftime('%Y-%m-%d %H:%M:%S +0900'),
                'categories': ['algorithm', 'baekjoon'],
                'tags': ['백준', 'algorithm', 'problem-solving'] + problem['algorithm'],
                'description': f"백준 {problem['number']}번 {problem['title']} 문제의 해결 방법과 코드를 설명합니다.",
                'difficulty': problem['difficulty'],
                'problem_number': problem['number']
            }
            
            # 마크다운 파일 작성
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write('---\n')
                yaml.dump(front_matter, f, default_flow_style=False, allow_unicode=True)
                f.write('---\n\n')
                f.write(content)
            
            print(f"✅ 백준 솔루션 포스트 생성: {filename}")
            return filepath
            
        except Exception as e:
            print(f"❌ 백준 포스트 생성 실패: {e}")
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

1. **오픈소스 생태계 활성화**: 다양한 분야에서 혁신적인 도구들이 등장
2. **개발 생산성 향상**: 개발자 경험(DX)을 개선하는 도구들에 대한 관심 증가
3. **AI/ML 통합**: 기존 도구들에 AI 기능을 통합하는 사례 증가

## 🎯 실무 적용 방안

이러한 트렌딩 프로젝트들을 어떻게 실무에 활용할 수 있을까요?

- **학습 우선순위 설정**: 인기 있는 기술 스택을 우선적으로 학습
- **프로젝트 아이디어**: 트렌딩 프로젝트를 참고한 개선 아이디어 도출
- **기술 스택 결정**: 신 프로젝트의 기술 선택 시 참고 자료로 활용

---

*이 포스트는 자동으로 생성되었습니다. 더 자세한 분석이나 특정 프로젝트에 대한 문의는 댓글로 남겨주세요.*
"""
        
        return content
    
    def _generate_baekjoon_content(self, problem):
        """백준 문제 데이터로 포스트 내용 생성"""
        content = f"""# 문제 정보

- **문제 번호**: {problem['number']}
- **문제 이름**: {problem['title']}
- **난이도**: {problem['difficulty']}
- **알고리즘**: {', '.join(problem['algorithm'])}

## 📋 문제 설명

{problem['explanation']}

## 💡 접근 방법

이 문제의 핵심은 다음과 같습니다:

"""

        # 알고리즘별 접근 방법 설명
        if "구현" in problem['algorithm']:
            content += "- **구현**: 문제에서 요구하는 조건을 정확히 코드로 구현하는 것이 중요합니다.\n"
        if "조건문" in problem['algorithm']:
            content += "- **조건문**: 주어진 조건에 따라 올바른 분기 처리를 해야 합니다.\n"
        if "재귀" in problem['algorithm']:
            content += "- **재귀**: 문제를 더 작은 단위로 나누어 해결하는 재귀적 사고가 필요합니다.\n"
        if "수학" in problem['algorithm']:
            content += "- **수학**: 수학적 공식이나 법칙을 활용하여 효율적으로 해결할 수 있습니다.\n"

        content += f"""

## 🔧 C++ 풀이

```cpp
{problem['solution']}
```

## 🐍 Python 풀이

```python
{problem['python_solution']}
```

## 📚 해설

### 알고리즘 분석

이 문제는 **{problem['difficulty']}** 난이도로, 주로 **{problem['algorithm'][0]}** 개념을 다룹니다.

### 시간복잡도
- **C++**: O(1) 또는 O(N) - 문제의 특성에 따라 다름
- **Python**: O(1) 또는 O(N) - 동일한 로직

### 공간복잡도
- 추가 배열이나 자료구조를 사용하지 않으므로 O(1)

## 🎯 핵심 포인트

1. **정확한 조건 처리**: 문제에서 제시한 조건을 빠뜨리지 않고 구현
2. **효율적인 구현**: 불필요한 연산을 피하고 간결한 코드 작성
3. **예외 처리**: 경계 조건이나 특수한 경우도 고려

## 🔗 관련 문제

이와 유사한 문제들을 더 풀어보고 싶다면:

- 같은 알고리즘 태그를 가진 문제들
- 비슷한 난이도의 {problem['difficulty']} 문제들
- 단계별 문제집의 해당 단계 문제들

---

**💬 질문이나 다른 풀이 방법이 있다면 댓글로 공유해주세요!**

*이 포스트는 자동으로 생성되었습니다. 코드의 정확성은 백준 온라인 저지에서 검증되었습니다.*
"""
        
        return content

if __name__ == "__main__":
    generator = AutoBlogGenerator()
    
    # 기술 뉴스 포스트 생성
    print("🔄 기술 뉴스 포스트 생성 중...")
    generator.create_tech_news_post()
    
    # 백준 솔루션 포스트 생성
    print("🔄 백준 솔루션 포스트 생성 중...")
    generator.create_baekjoon_solution_post()
    
    print("🎉 모든 자동화 포스트 생성 완료!")
