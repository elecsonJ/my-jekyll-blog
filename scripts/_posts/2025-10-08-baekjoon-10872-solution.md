---
categories:
- algorithm
- baekjoon
date: 2025-10-08 00:56:54 +0900
description: 백준 10872번 팩토리얼 문제의 해결 방법과 코드를 설명합니다.
difficulty: Bronze V
layout: post
problem_number: 10872
tags:
- 백준
- algorithm
- problem-solving
- 수학
- 구현
- 재귀
title: '[백준 10872] 팩토리얼 - Bronze V'
---

# 문제 정보

- **문제 번호**: 10872
- **문제 이름**: 팩토리얼
- **난이도**: Bronze V
- **알고리즘**: 수학, 구현, 재귀

## 📋 문제 설명

N!을 구하는 문제입니다. 재귀 또는 반복문을 사용하여 해결할 수 있습니다.

## 💡 접근 방법

이 문제의 핵심은 다음과 같습니다:

- **구현**: 문제에서 요구하는 조건을 정확히 코드로 구현하는 것이 중요합니다.
- **재귀**: 문제를 더 작은 단위로 나누어 해결하는 재귀적 사고가 필요합니다.
- **수학**: 수학적 공식이나 법칙을 활용하여 효율적으로 해결할 수 있습니다.


## 🔧 C++ 풀이

```cpp
#include <iostream>
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
}
```

## 🐍 Python 풀이

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

n = int(input())
print(factorial(n))
```

## 📚 해설

### 알고리즘 분석

이 문제는 **Bronze V** 난이도로, 주로 **수학** 개념을 다룹니다.

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
- 비슷한 난이도의 Bronze V 문제들
- 단계별 문제집의 해당 단계 문제들

---

**💬 질문이나 다른 풀이 방법이 있다면 댓글로 공유해주세요!**

*이 포스트는 자동으로 생성되었습니다. 코드의 정확성은 백준 온라인 저지에서 검증되었습니다.*
