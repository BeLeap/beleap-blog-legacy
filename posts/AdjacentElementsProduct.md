---
date: '2020-12-10'
title: 'adjacentElementsProduct feat. Haskell'
---

## Method

Calculate product of adjacent elements in list then find max element of that list.

## Code

``` {.haskell}
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
