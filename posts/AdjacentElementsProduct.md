---
date: '2020-12-10'
title: 'adjacentElementsProduct feat.Haskell'
---

# Analysis

인접한 두 element의 곱을 저장한 Array를 만들고 그 Array에서 최대값을 찾는다.

# Code

```haskell
proc2 :: [Int] -> Int -> [[Int]]
proc2 [] _ = [[]]
proc2 (x:xs) prev = [prev, x]:(proc2 xs x)

proc3 :: [[Int]] -> Int -> Int
proc3 [[]] max = max
proc3 ((x:(x2:[])):xs) max = 
    if x * x2 > max
    then proc3 xs (x * x2)
    else proc3 xs max

proc :: [Int] -> Int
proc [] = 0
proc lst =
    case (proc2 lst 0) of
      (_:x:xs) -> case x of
                  (xp:xp2:[]) -> proc3 xs (xp * xp2)

adjacentElementsProduct inputArray = proc inputArray
```

proc2가 인접한 element의 리스트를 만들고 proc3가 곱했을 때 최대값이 나오는 것을 찾는다.
