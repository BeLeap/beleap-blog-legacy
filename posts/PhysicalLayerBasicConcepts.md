---
title: 'Physical Layer Basic Concepts'
date: '2020-12-12'
---

# Signal

## Sine Wave

$$
A \sin(2 \pi f t + \phi)
$$

* $A$: peek amplitude
* $f$: frequency
    * $T$: period($= \frac{1}{f}$)
* $\phi$: phase
* $\lambda$: wavelength
    * 한 사이클에 갈 수 있는 거리
    * $= c \times T = \frac{c}{f}$
        * propagation speed(speed of light $c$) $\times$ period
* bit length
    * 한 개의 비트가 전송할 때 매체이서 차지하는 거리
    * propagation speed $\times$ bit duration
    * 전자(electron)의 propagation speed는 $\frac{2}{3}c$
    * bit duration = $\frac{1}{N} (N = $ bit rate $)$

# Digital Data and Signal

* Data: 정보의 단위
    * Data Rate: bps
* Signal: 전자적인 그것
    * Signal Rate: baud
        * symbols per second
        * 한 symbol에 $N$비트를 전송하고 bit rate가 $R$이라면 symbol rate($f_s$)와 symbol duration time($T_s$)는 아래와 같다
        $$
        f_s = \frac{R}{N}, 
        T_s = \frac{1}{f_s}
        $$

# Bandwidth

* 가장 높은 frequency와 가장 낮은 frequency의 차(Hz)

<br/>

* Passband: 중간부터 시작함
* Baseband: 0부터 시작함
    * 따라서 보통 Passband임

<br/>

* 3bit를 $f = 0, \frac{N}{4}, \frac{N}{2}$로 모두 표현할 수 있음
    * 따라서 보통 bandwidth는 data rate의 절반으로 계산함