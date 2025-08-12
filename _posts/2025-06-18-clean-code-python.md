---
layout: post
title: "클린 코드의 핵심: 가독성 높은 Python 코드 작성법"
date: 2025-06-18
categories: [dev]
tags: [Python, 클린코드, 리팩토링, 코딩규칙, PEP8]
lang: ko
description: "읽기 쉽고 유지보수하기 좋은 Python 코드를 작성하는 실용적인 방법들을 소개합니다."
---

# 클린 코드의 핵심: 가독성 높은 Python 코드 작성법

> "코드는 작성하는 시간보다 읽는 시간이 10배는 더 많다" - Robert C. Martin

## 1. 의미 있는 변수명 사용하기

### ❌ 나쁜 예
```python
def calc(x, y):
    d = []
    for i in x:
        if i > y:
            d.append(i)
    return d
```

### ✅ 좋은 예
```python
def filter_values_above_threshold(values, threshold):
    """주어진 임계값보다 큰 값들만 필터링합니다."""
    filtered_values = []
    for value in values:
        if value > threshold:
            filtered_values.append(value)
    return filtered_values
```

## 2. 함수는 하나의 일만 하도록

### ❌ 나쁜 예
```python
def process_user_data(users):
    # 데이터 검증하고, 변환하고, 저장까지...
    valid_users = []
    for user in users:
        if user.get('age') and user['age'] > 18:
            user['is_adult'] = True
            user['created_at'] = datetime.now()
            db.save(user)
            valid_users.append(user)
    return valid_users
```

### ✅ 좋은 예
```python
def validate_adult_users(users):
    """성인 사용자만 필터링합니다."""
    return [user for user in users if user.get('age', 0) > 18]

def enrich_user_data(users):
    """사용자 데이터에 추가 정보를 더합니다."""
    for user in users:
        user['is_adult'] = True
        user['created_at'] = datetime.now()
    return users

def save_users_to_database(users):
    """사용자 데이터를 데이터베이스에 저장합니다."""
    for user in users:
        db.save(user)
    return users

# 사용
adult_users = validate_adult_users(users)
enriched_users = enrich_user_data(adult_users)
saved_users = save_users_to_database(enriched_users)
```

## 3. 조기 반환으로 중첩 줄이기

### ❌ 나쁜 예
```python
def get_user_discount(user):
    if user is not None:
        if user.is_premium:
            if user.years_member > 5:
                return 0.2
            else:
                return 0.1
        else:
            return 0.05
    else:
        return 0
```

### ✅ 좋은 예
```python
def get_user_discount(user):
    if user is None:
        return 0
    
    if not user.is_premium:
        return 0.05
    
    if user.years_member > 5:
        return 0.2
    
    return 0.1
```

## 4. 상수 활용하기

### ❌ 나쁜 예
```python
def calculate_price(base_price, user_type):
    if user_type == 1:
        return base_price * 0.9
    elif user_type == 2:
        return base_price * 0.8
    elif user_type == 3:
        return base_price * 0.7
```

### ✅ 좋은 예
```python
from enum import Enum

class UserType(Enum):
    REGULAR = 1
    PREMIUM = 2
    VIP = 3

DISCOUNT_RATES = {
    UserType.REGULAR: 0.9,
    UserType.PREMIUM: 0.8,
    UserType.VIP: 0.7
}

def calculate_price(base_price, user_type):
    discount_rate = DISCOUNT_RATES.get(user_type, 1.0)
    return base_price * discount_rate
```

## 5. 예외 처리는 구체적으로

### ❌ 나쁜 예
```python
def process_data(data):
    try:
        result = complex_operation(data)
        return result
    except:
        return None
```

### ✅ 좋은 예
```python
def process_data(data):
    try:
        result = complex_operation(data)
        return result
    except ValueError as e:
        logger.error(f"Invalid data format: {e}")
        raise DataProcessingError(f"Cannot process data: {e}")
    except ConnectionError as e:
        logger.error(f"Database connection failed: {e}")
        raise DatabaseError(f"Failed to connect to database: {e}")
```

## 6. Type Hints 활용하기

### ❌ 나쁜 예
```python
def process_items(items, filter_func, transform_func):
    result = []
    for item in items:
        if filter_func(item):
            result.append(transform_func(item))
    return result
```

### ✅ 좋은 예
```python
from typing import List, Callable, TypeVar

T = TypeVar('T')
U = TypeVar('U')

def process_items(
    items: List[T],
    filter_func: Callable[[T], bool],
    transform_func: Callable[[T], U]
) -> List[U]:
    """아이템을 필터링하고 변환합니다.
    
    Args:
        items: 처리할 아이템 리스트
        filter_func: 필터링 조건 함수
        transform_func: 변환 함수
        
    Returns:
        필터링되고 변환된 아이템 리스트
    """
    result: List[U] = []
    for item in items:
        if filter_func(item):
            result.append(transform_func(item))
    return result
```

## 7. 리스트 컴프리헨션 적절히 사용하기

### ✅ 간단한 경우 - 리스트 컴프리헨션 사용
```python
# 좋은 예
squared_evens = [x**2 for x in numbers if x % 2 == 0]
```

### ✅ 복잡한 경우 - 일반 루프 사용
```python
# 복잡한 로직은 리스트 컴프리헨션보다 일반 루프가 더 명확
results = []
for user in users:
    if user.is_active and user.age > 18:
        profile = fetch_user_profile(user.id)
        if profile and profile.is_verified:
            results.append({
                'id': user.id,
                'name': user.name,
                'score': calculate_score(profile)
            })
```

## 마치며

클린 코드는 단순히 동작하는 코드가 아니라, **다른 개발자(미래의 나 자신 포함)가 쉽게 이해하고 수정할 수 있는 코드**입니다.

처음부터 완벽한 코드를 작성할 필요는 없습니다. 지속적인 리팩토링을 통해 코드 품질을 개선해 나가세요!

**다음 포스트에서는 Python의 디자인 패턴에 대해 다루겠습니다.**
