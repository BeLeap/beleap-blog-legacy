---
title: 'ShapeArea feat.Haskell'
date: '2020-12-10'
---

# Analysis

전체 네모 개수의 합은 위쪽 삼각형 네모의 개수 아래쪽 삼각형 네모 개수의 합과 같다.
위쪽 삼각형 네모 개수는 (2n + 1), (2(n - 1) + 1), ... 을 합한 개수이고 아래쪽 삼각형 네모 개수는 (2(n - 1) + 1), (2(n - 1) + 1), ... 을 합한 개수이다.

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

`getOneFloor`가 (2n + 1), (2(n - 1) + 1), ... 의 합을 계산해주고 `sumOfTri`가 위와 아래인 n, n - 1의 합을 구해 결과를 계산한다.
