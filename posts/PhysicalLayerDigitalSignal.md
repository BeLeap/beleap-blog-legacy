---
title: 'Physical Layer Digital Signal'
date: '2020-12-13'
---

데이터를 시그널로 변환

# Encoding(Line Coding)

디지털 데이터를 디지털 시그널(waveform)로 변환

* PSD: 어느 주파수가 얼마나 강한가
* 직각으로 떨어지는 주파수는 만들기 힘듦 $\therefore$ 부드럽게 떨어지게 만듦

## Clocking

* 고려해야할 점
    * sender와 receiver간의 sync
    * DC Component
        * long term: 한 비트가 지속되는 것
        * short term: 한 비트가 자주 나타남
            * baseline wander를 유발함

## 속도

* data가 단위: bps(bits per second)
* signal이 단위: baud(symbols per second)

<br/>

* bit to signal ratio($r$)
    * $N$ bits $\rightarrow M$ signals
    * $r = \frac{N}{M}$(bits per signal)
* baud
    * $f_s = \frac{M}{N}$

---

* 좋은 라인 코딩
    * bit sync가 가능
    * bandwidth를 가능한 작게
    * dc component가 없게
    * baseline wandering이 없게
    * transparency

## PSD(Power Spectral Density)

* DC Component: 0Hz에 튀어나온 것
* Baseline Wander: low frequency(0Hz 근처)에 높은 PSD

## Mapping Concept

* Data만: {1, 0}
* Data + Clock: {1, 0} + Clock Signal
    * Clock Signal은 비트 중간에 상태를 변경해서 전송함

<br/>

* Signal
    * Amplitude: $\{1, 0\} \rightarrow$ Unipolar$\{+V, 0\},$ Polar$\{+V, -V\},$ Bipolar$\{\pm V, 0\}$
    * AMI(Alternative Mark Inverted): 1을 짝수번째 보낼 때 +V, 홀수번째 보낼 때 -V를 사용
    * Transition of amplitude: bit period의 시작에 변경({transition, non-transition}), bit period의 중간에 변경({down transition, up transition})

## Unipolar RZ/NRZ

* RZ
![RZ](/images/PhysicalLayerDigitalSignal/unipolar_rz.png)
![RZ PSD](/images/PhysicalLayerDigitalSignal/unipolar_rz_psd.png)
    * 0Hz에 spike가 있음: long term DC effect
    * 0Hz 근처에 몰려있음: short term DC effect(baseline wander)
    * -2 - +2까지 사용: bandwidth가 큰 편
    * bit period 중 최소한 절반은 항상 baseline에 있음
    * $+V$에서 $0$으로 떨어지는 곳을 이용해 clocking(sync)함
* NRZ
![NRZ](/images/PhysicalLayerDigitalSignal/unipolar_nrz.png)
![NRZ PSD](/images/PhysicalLayerDigitalSignal/unipolar_nrz_psd.png)
    * 0Hz에 spike가 있음: long term DC effect
    * 0Hz 근처에 몰려있음: short term DC effect
    * clocking 없음
    * 연속된 0 또는 1을 보낼 수 없음

## Polar RZ/NRZ

* RZ
![RZ](/images/PhysicalLayerDigitalSignal/polar_rz.png)
![RZ PSD](/images/PhysicalLayerDigitalSignal/polar_rz_psd.png)
    * unipolar rz와 같지만 spike가 없음
* NRZ(NRZ-L)
![NRZ](/images/PhysicalLayerDigitalSignal/polar_nrz.png)
![NRZ PSD](/images/PhysicalLayerDigitalSignal/polar_nrz_psd.png)
    * unipolar nrz와 같지만 spike가 없음
* NRZ-L, NRZ-M(NRZ-I), NRZ-S
![Type of Polar NRZ](/images/PhysicalLayerDigitalSignal/type_of_polar_nrz.png)

## Bipolar RZ/NRZ

* RZ-AMI
![RZ](/images/PhysicalLayerDigitalSignal/bipolar_rz.png)
![RZ PSD](/images/PhysicalLayerDigitalSignal/bipolar_rz_psd.png)
    * DC Component, baseline wander 모두 없음
* NRZ-AMI
![NRZ](/images/PhysicalLayerDigitalSignal/bipolar_nrz.png)
![NRZ PSD](/images/PhysicalLayerDigitalSignal/bipolar_nrz_psd.png)
    * DC Component, baseline wander 모두 없음
    * 연속된 0을 보내지 못함
    * single bit error detection이 가능함

## Manchester encoding

![Manchester Encoding](/images/PhysicalLayerDigitalSignal/manchester_encoding.png)
* 같은 비트가 연속으로 나오면 transition이 일어남
* bit period 중간에 0이면 음의 방향으로 transition, 1이면 양의 방향으로 transition(반대도 사용됨)
* bit period 중간에는 항상 transition이 일어나고 bit period 시작에 0이면 transition, 1이면 transition을 하지 않는 differential manchester encoding

# Multilevel Coding

## 2B1Q

2 bit를 4개의 레벨로
![2B1Q](/images/PhysicalLayerDigitalSignal/2b1q.png)

## 8B6T

8 bit를 6개의 symbol($+V, 0, -V$)로 인코딩함($2^8 < 3^6$)

* 100Mbps Ethernet이 사용했었음

## MLT-3

$-1, 0, +1, 0$을 순회함
* 1이면 다음 state로 넘기고 0이면 유지함

## 4D-PAM

* 1Gbps Ethernet에서 사용함
* 4 Dimensional(UTP cat.6가 4페어 케이블을 사용함) 5 level Pulse Amplitude Modulation

# Input Data Randomization

* 특정 패턴의 데이터는 전송 못하는 coding방식이 있음
* DC Component
* Baseline wander
* 해결책: 데이터를 random하게 만듦

<br/>

* 방식
    * Code Mapping(Block Coding)
    * Substitute pre-defined input pattern
    * Scrambling

## Block Coding

### 4B5B

|Data|4B5B Code|
|:-|:-|
|0000|11110|
|0001|01001|
|0010|10100|
|0011|10101|
|0100|01010|
|0101|01011|
|0110|01110|
|0111|01111|
|1000|10010|
|1001|10011|
|1010|10110|
|1011|10111|
|1100|11010|
|1101|11011|
|1110|11100|
|1111|11101|

### 8B10B

## Substitute pre-defined input pattern

### B8ZS

8개의 연속된 0을 000VB0VB로 변경

![B8ZS](/images/PhysicalLayerDigitalSignal/b8zs.png)

### HDB3

4개의 연속된 0을 000V나 B00V로 변경

![HDB3](/images/physicalLayerDigitalSignal/hdb3.png)

## Scrambling

의사난수로 XOR로 인코딩하고 디코딩함
* 의사난수: LFSR(Line Feedback Shift Register)로 생성