---
title: 'Physical Layer Frame'
date: '2020-12-15'
---

# Bit Timing and Physical Layer Frame

## Bit Timing

* Async: 동기화된 clock이 없음
* Sync: 동기화된 clock을 사용함

### Asynchronous Bit Transmission

* start, stop signal을 보냄

---

* 한 번에 한개의 character만 전송
* 앞 뒤에 start, stop big
    * $overhead = \frac{data}{data + start bits + stop bits}$
* 한 번에 8bit 이상 보내면 timing bit가 날 확률이 높음
* 컴퓨터가 사람보다 빨라서 옛날에는 많이 썻음

### Synchronous Bit Transmission

* clock 동기화 정보를 보냄
* 데이터 앞에 preamble을 보냄

### Asynchronous Frame Transmission with Synchronous Bit Transmission

* Asynchronous Frame
    * 데이터가 없을 때 보내지 않음
    * idle 동안 clock sync가 불가능
    * preamble로 clock training을 함
    * 프레임 start, stop delimiter가 필요

### Synchronous Frame Transmission with Synchronous Bit Transmission

* Synchronous Frame
    * 데이터가 없을 때도 무언가를 계속 보냄
    * 예전 전화에 사용됨

## Multiplexing

* 느린 회선 여러개를 묶어 빠른 회선 하나로 보내는 것

### TDM

* 시간(Time)을 쪼개서 여러개를 동시에 보냄

* Synchronous TDM: time slot이 미리 할당되어 있음(signaling을 통해 미리 정해둠), TS는 보낼 데이터가 없더라도 무조건 소모됨
* Asynchronous(Statistical) TDM: identifier를 가지고 사용 중인 채널을 구분함

### FDM

* 주파수(Frequency)를 사용

#### OFDM(Orthogonal Frequency Division Multiplexing)

* IFFT를 사용해 channel을 합침

### WDM

* 여러개의 파장(Wavelength)을 사용
* 프리즘으로 분해

### CDM

* Code-Division Multiplexing
* Walsh Matrix
    * 임의의 두 행(혹은 열)을 내적하면 0이 나옴 $\rightarrow$ orthogonal
$$
\begin{bmatrix}
H && H\\
H && -H
\end{bmatrix}
$$

* Walsh Matrix의 한 row(chip)가 한 channel이 됨
    * Data를 row에 곱함 $\rightarrow$ frequency가 올라감: 이를 데이터가 증가했다는 의미로 DSSS(Direct Sequence Spread Spectrum)라고 부름
    * 받은 데이터도 row와 곱해서 channel 개수로 나눔(Channel끼리 더해지며 커졌기 때문에)

#### DSSS

* chip이 한 개임
* 채널이 한 개임
    * 데이터를 spread하는 용도로 사용됨(row frequency를 high frequency로 바꿈, 대역폭을 증가시킴)
    * 대역폭이 중가하지만 노이즈가 많은 채널에서 data correction을 할 수 있어서 사용됨(무선에서 주로 사용됨)

### SDM

* 공간(Space)을 나눔
* MIMO, CDD(Cyclic Delay Diversity), MRC(Maximal Ratio Combining)
    * CDD: 피크되는 곳을 다르게 해서 구분함
    * MRC: 두개에서 받은 것을 합쳐서 사용

![SDM](/images/PhysicalLayerFrame/sdm.png)

#### MIMO

Multiple Input Multiple Output

* 데이터를 안정적으로 보내거나 더 빠른 속도로 보내기 위해 사용됨

# Connection Types

* Connection oriented connection
    * Circuit Connection
        * Channel을 exclusive하게 사용
    * Virtual Circuit Connection
        * Channel을 공유
* Connectionless
    * Virtual Circuit보다 processing time이 증가(어디로 가야하는지 계산해야함)

![Circuit Connection](/images/PhysicalLayerFrame/circuit.png)
![Virtual Circuit Connection](/images/physicalLayerFrame/virtual_circuit.png)
![Connectionless](/images/PhysicalLayerFrame/connectionless.png)