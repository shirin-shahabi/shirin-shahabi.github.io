---
layout: page
title: Local Quantized DeepSeek-R1 the 671B-Parameter Model
description: Dynamic Quantization Approach for Large Language Models
img: assets/img/McStudio.jpg
importance: 1
category: work
related_publications: false
---

# Dynamic Quantization: A Tailored Approach

The Unsloth AI team's approach involves dynamic quantization, where variable bit precisions are assigned based on the sensitivity of different network components. Key technical insights include:

## Selective Precision Assignment

The initial dense layers and the down-projection (down_proj) matrices, critical for setting up stable representations and managing the scaling properties in SwiGLU activations, are maintained at higher precisions (4-bit or 6-bit). Conversely, the bulk of the parameters — primarily within the Mixture-of-Experts (MoE) layers, which constitute about 88% of the model — are quantized aggressively to 1.5–2 bits.

## Importance Matrix Calibration

Incorporating an importance matrix during the quantization process allows the method to dynamically adjust precision levels per layer. This calibration prevents common pitfalls such as infinite loops or nonsensical outputs that typically arise from uniform quantization.

## Layer-Specific Sensitivity Analysis

Technical evaluations indicated that while MoE layers tolerate lower precision, components like the attention mechanisms, embedding layers, and final output heads require more bits to preserve activation distributions. This nuanced strategy ensures that critical paths in the computation graph retain sufficient fidelity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/McStudio.jpg" title="Model Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the DeepSeek-R1 model architecture with dynamic quantization.
</div>