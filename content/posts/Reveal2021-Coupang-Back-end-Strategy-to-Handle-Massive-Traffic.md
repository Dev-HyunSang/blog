---
title: "Reveal2021 - 쿠팡의 대규모 트래픽을 다루는 백앤드 전략"
subtitle: "쿠팡에서는 어떻게 대규모 트래픽을 다루는가"
author: "HyunSang"
date: 2023-12-24
toc:
    enable: true
    auto: true
categories: ["컨퍼런스"]
tags: ["백엔드", "서비스"]
---

백엔드 공부를 하면서 어떻게 하면 트래픽을 다루고 큰 서비스를 하고 있는 회사에서는 어떻게 트래픽을 다루고 서비스를 만드는지에 궁금했습니다.  
좋은 자료를 찾던 도중 쿠팡 Reveal2021에서 `쿠팡의 대규모 트래픽을 다루는 백엔드 전략`을 보고 많은 점들을 배우게 되었습니다.

{{<youtube qzHjK1-07fI >}}

## Topic1 - Core Serving Platform
- **Circumstances : growth At Scale**
    - 쿠팡은 2018년도와 비교하여 4배 이상 성장함.
    - 고객들을 만족시키기 위한 로켓배송, 로켓프레쉬 등을 다양한 서비스 존재.
- **What Circumstances : e-Commerce Data**
    - Aggregate from Multiple Domain Data
    - Change Frequently and Instantly
    - The more Displayed, The more Sales
    - 쿠팡은 다른 이커머스와 다르게 상품을 구매하여 직배송하는 서비스를 하고 있음. => 로켓배송, 로켓프레쉬 등이 있음.
        - 이러한 서비스를 MSA(MicroService Architecture)를 하고 있음.
- **If we don't have systematic solution for these issues**
    - Each backend service should guarantee highly available
    - Business complexity will be led to produtivity loss
