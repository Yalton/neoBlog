---
title: "Diffusion Models"
slug: "/diffusion_models"
---

Diffusion Models
================

The term “diffusion” in the context of artificial intelligence (AI),
specifically deep learning, often refers to diffusion models, also known
as “generative models”. Generative models are a class of statistical
models used to generate new samples that resemble the training data.

<figure>
<img src="diffusion.png" style="width:50.0%" alt="" /><figcaption>Diffusion</figcaption>
</figure>

Diffusion models aim to model the data distribution by simulating a
diffusion process, which starts from a noise prior and gradually
“refines” the noise over time, eventually producing a sample from the
target distribution.

The name “diffusion” comes from the fact that these models are related
to the diffusion equations from physics, which describe how particles
spread out, or diffuse, over time.

In a diffusion model, this concept is used to describe how a simple
random process (like random noise) can gradually transform into a
complex structure (like an image or a sentence). This process is often
modeled as a series of small random steps (like the random motion of
particles), where each step refines the structure a little bit.

An example of this approach can be found in the work called “Diffusion
Models Beat GANs on Image Synthesis”, by Prafulla Dhariwal and Alex
Nichol. They propose a training algorithm for generative models based on
the denoising score matching objective and continuous noise schedules,
which outperforms Generative Adversarial Networks (GANs) on standard
image synthesis benchmarks.

One advantage of diffusion models is that they can provide a natural way
to generate samples in a “dream-like” manner, by starting from a random
noise image and gradually refining it to look more like an image from
the target distribution. This could be used for things like art,
animation, or other creative applications. It can also be used for
scientific applications, such as simulating complex systems that evolve
over time.
