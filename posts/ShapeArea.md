---
title: 'ShapeArea feat.Haskell'
date: '2020-12-10'
---

# Analysis

전체 네모 개수의 합은 위쪽 삼각형 네모의 개수 아래쪽 삼각형 네모 개수의 합과 같다.
$n$번째 위쪽 삼각형 네모 개수는 $\sum_{i = 0}^{n}(2i + 1)$ 이고 $n$번째 아래쪽 삼각형 네모 개수는 $\sum_{i = 1}^{n}(2i - 1)$이다.

# Code


```haskell
getOneFloor :: Int -> Int
getOneFloor n = 2 * n - 1

sumOfTri :: Int -> Int
sumOfTri 0 = 0
sumOfTri 1 = 1
sumOfTri n = (getOneFloor n) + (sumOfTri (n - 1))

shapeArea n =  (sumOfTri n) + (sumOfTri (n - 1))
```

`getOneFloor`가 한 층의 개수($2n - 1$)를 계산하고 `sumOfTri`가 $\sum_{i = 0}^{n}(2i + 1)$을 계산한다. `shapeArea`가 $n, n - 1$의 합을 계산한다.

