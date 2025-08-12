---
layout: post
title: "알고리즘 기초: 정렬 알고리즘 완전정복"
date: 2025-06-18
categories: [dev]
tags: [알고리즘, 정렬, 코딩테스트, 자료구조]
lang: ko
description: "기본적인 정렬 알고리즘들을 구현하고 시간복잡도를 분석해봅니다."
---

# 알고리즘 기초: 정렬 알고리즘 완전정복

코딩 테스트와 개발에서 가장 기본이 되는 정렬 알고리즘들을 알아봅시다.

## 1. 버블 정렬 (Bubble Sort)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 시간복잡도: O(n²)
# 공간복잡도: O(1)
```

## 2. 퀵 정렬 (Quick Sort)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# 평균 시간복잡도: O(n log n)
# 최악 시간복잡도: O(n²)
```

## 3. 병합 정렬 (Merge Sort)

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 시간복잡도: O(n log n)
# 공간복잡도: O(n)
```

## 정렬 알고리즘 비교

| 알고리즘 | 평균 시간복잡도 | 최악 시간복잡도 | 공간복잡도 | 안정성 |
|---------|---------------|---------------|------------|-------|
| 버블 정렬 | O(n²) | O(n²) | O(1) | 안정 |
| 퀵 정렬 | O(n log n) | O(n²) | O(log n) | 불안정 |
| 병합 정렬 | O(n log n) | O(n log n) | O(n) | 안정 |

**언제 어떤 정렬을 사용할까?**
- **작은 데이터**: 삽입 정렬
- **일반적인 경우**: 퀵 정렬
- **안정성이 중요한 경우**: 병합 정렬
- **메모리 제약이 있는 경우**: 힙 정렬

다음 포스트에서는 트리와 그래프 알고리즘을 다뤄보겠습니다!
