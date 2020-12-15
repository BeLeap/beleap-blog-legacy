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
    * 한 개의 비트가 전송할 때 매체에서 차지하는 거리
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

# Fourier analysis and Fourier Transform

time domain을 frequency domain으로 변경

* fundamental frequency($f_0 = \frac{1}{T}$)의 정수배로 분해

$$
f(t) = \frac{4V}{\pi}[\sin 2\pi\frac{1}{T}t + \frac{1}{3}\sin 2\pi\frac{3}{T}t + \frac{1}{5}\sin 2\pi\frac{5}{T}+...]
$$

# Channel Capacity

* 채널을 통해 보낼 수 있는 최고의 속도
* Shannon으로 최대 capacity를 계산하고 Nyquist로 signal level을 계산함
    * 요즘에는 space division을 이용해서 최대 capacity를 넘기는 것도 가능함

## Shannon Capacity

* 노이즈가 있는 상태에서의 채널 융량
* $SNR_{db} = 10 \log_{10}(signal/noise)$
* $C = B \log_{2}(1 + SNR)$
    * $C$: capacity

## Nyquist Bandwidth

* 노이즈가 없는 상태에서의 채널 용량
* $C = 2B\log_{2}L$
    * $L$: signal levels

# Analog Data Digitization(PCM)

$\rightarrow$ PAM Sampler(Sampling) $\rightarrow$ Quantizer(Normalization) $\rightarrow$ Encoder $\rightarrow$

## Sampling

* PCM: $T$초마다 값을 가져옴
    * sampling frequency $f_s = \frac{1}{T}$
    * 음성은 $T = 8000(8$kHz$)$를 사용함
* Nyquist Rate
    * 샘플링 된 걸 복원했을 때 충분히 잘 복원하려면 얼마나 샘플링해야하는가
    * Cycle의 절반을 샘플링해야함.
    * e.g. 사람목소리는 300kHz - 3400kHz(약 4000kHz) 대충 8000kHz를 샘플링함

## Quantization

* 아날로그 값이라 실수임 $\rightarrow$ 실수는 디지털로 보낼 수 없기 때문에 적절한 값으로 매핑함

## Encoding

* Companding(Compansion)
    * 보통 사람들의 목소리는 특정 주파수 영역대에 집중되어 있음 $\therefore$ 특정 영역의 변화를 과장함
    ![Companding](/images/PhysicalLayerBasicConcepts/companding.png)