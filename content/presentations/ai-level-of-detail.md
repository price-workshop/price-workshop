---
title: "AI Level of Detail: Distance-Aware ML Model Precision Selection for Real-Time Human Motion Prediction in Games"
date: 2026-06-18
weight: 4
authors:
  - name: Mathew Varghese
    affiliation: University of Washington
track: Sketch
presenter: Mathew Varghese
abstract: >
  Modern game engines spend significant compute animating NPCs with learned motion models. This paper proposes AI Level of Detail (AI LOD), a framework in which machine learning inference precision is adapted based on the distance between each NPC and the player camera. The core idea mirrors classical geometry LOD [2, 4]: substitute a cheaper approximation where the difference is imperceptible. Here, the approximation is a lower-precision quantized machine learning model rather than a lower-polygon mesh. The contribution of this work is the AI LOD concept itself: that inference-time quantization can serve as the LOD axis for AI-driven character animation—and more broadly, for any AI-based runtime system where perceptual sensitivity varies with context. The convolutional sequence-to-sequence model of Li et al. [7] is used as a representative example to demonstrate the concept, with its trained checkpoint exported into three ONNX Runtime variants (FP32, FP16, and INT8 per-tensor), intended to be routed by a distance-based selector at runtime. Evaluation on the CMU Mocap dataset [1] provides initial evidence that each precision tier can be served at its assigned distance range with negligible perceptible degradation, supporting the broader premise that distance-aware ML model precision selection is a viable LOD strategy for AI-based character animation
links: []
---