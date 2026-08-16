---
title: "Improving Interaction by Transforming the Render-Display Pipeline"
date: 2026-06-18
weight: 5
authors:
  - name: Aaron Fulmer
    affiliation: Francis Marion University
  - name: Evan Jonson
    affiliation: North Carolina State University
  - name: Hee-Jin Choi
    affiliation: Sejong University
  - name: Hyoungsik Nam
    affiliation: Kyung Hee University
  - name: Benjamin Watson
    affiliation: North Carolina State University
track: Sketch
presenter: Aaron Fulmer
abstract: >
  Over fifty years ago, rendering and display systems were designed for latency-free, recorded media. Yet today's interactive systems --- which suffer significantly from latency --- are still based on the old latency-free design assumptions. We propose an alternative: close integration of input, render, and display that reduces interactive latency far below delays in current systems. By combining just-in-time input sampling; frameless, image-order rendering; and random-access displays supporting flexible scanning; we eliminate frame and synchronization delays, mitigate refresh delays, and reduce click-to-photon latency below 2 ms.
links:
  - title: "ACM Digital Library"
    url: "https://dl.acm.org/doi/10.1145/3799828.3816007"
---