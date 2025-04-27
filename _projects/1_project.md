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

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}