---
title: "General Relativity"
slug: "/general_relativity"
---

# General Relativity

## Table of Contents 

- [General Relativity](#general-relativity)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [4-D Spacetime](#4-d-spacetime)
  - [Equations](#equations)
    - [The Einstein Field Equations](#the-einstein-field-equations)
    - [The Schwarzschild Solution](#the-schwarzschild-solution)
    - [The Friedmann Equations](#the-friedmann-equations)
    - [The Geodesic Equations](#the-geodesic-equations)
    - [The Raychaudhuri Equations](#the-raychaudhuri-equations)


## Introduction

General relativity is a theory of gravitation that was developed by Albert Einstein in 1915. It is based on the principle that the laws of physics should be the same for all observers, regardless of their relative motion. According to general relativity, the observed gravitational attraction between masses results from the warping of space and time by those masses. This warping is described by a set of equations known as the Einstein field equations. General relativity has been used to make predictions that have been confirmed by observation and experiment, including the existence of black holes and the bending of light by massive objects. It has also been used to develop models of the structure and evolution of the universe.

## 4-D Spacetime 

General relativity states that the universe is a hyperstructure with 3 dimensions of space, and one dimension of time. Objects can move freely within the 3 Dimensions of space, but as time only consists of one dimension they can only move forwards (or backwards in the case of antimatter). The speed of objects in the universe can be measured along the spatial dimensions resulting in their spatial speed and along the temporal dimension resulting in their temporal speed. 
All objects in the universe move at C through space, however objects with mass create drag when they interact with the higgs field and as such much of their spatial speed is converted to temporal speed. Objects with mass warp the fabric of spacetime, and thus cause other objects travelling through the spacetime bulk to be "pulled" into them. This pulling force is more of an illusion however, as all objects are doing is following the straightest possible path, or geodesic, on a now curved spacetime. 
The object enters freefall because it's time dimension has been warped towards the massive object; it's future has been warped by the massive objects effect on spacetime. 


![Relativity](/images/relativity/saptial_V_temporal.png)

## Equations

### The Einstein Field Equations

This equation relates the curvature of spacetime to the distribution of matter and energy. It states that the curvature of spacetime is proportional to the energy-momentum tensor, which describes the distribution of matter and energy in the universe. 

$$ G_{\mu \nu} = \frac{8\pi G}{c^4} T_{\mu \nu} $$

where $G_{\mu \nu}$ is the Einstein tensor, $G$ is the gravitation constant, $c$ is the speed of light, and $T_{\mu\nu}$ is the energy-momentum tensor.

### The Schwarzschild Solution

This equation describes the spacetime outside a spherically symmetric, non-rotating, massive body. It gives the metric of the spacetime and describes the gravitational field of a single body. 

$$ ds^2 = -\left(1-\frac{2GM}{c^2r}\right)dt^2 + \left(1-\frac{2GM}{c^2r}\right)^{-1}dr^2 + r^2d\Omega^2 $$ 

where $ds^2$ is the metric of the spacetime, $M$ is the mass of the body, $c$ is the speed of light, $r$ is the radial coordinate, and $d\Omega^2$ is the solid angle element.

### The Friedmann Equations

This equation describes the expansion of the universe. It describes the evolution of the universe over time and gives the rate at which the universe is expanding. 

$$ \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2} $$

$$ \frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right) $$

Where $a$ is the scale factor, $\rho$ is the density of the universe, $k$ is the curvature of the universe, $p$ is the pressure of the universe, and $c$ is the speed of light.

### The Geodesic Equations 

This equation describes the motion of a particle or test mass in a curved spacetime. It gives the path that the particle or test mass follows in the curved spacetime. 

$$ \frac{d^2x^{\mu}}{d\tau^2} + \Gamma^{\mu}_{\alpha\beta}\frac{dx^{\alpha}}{d\tau}\frac{dx^{\beta}}{d\tau} = 0 $$

Where $x^{\mu}$ are coordinates, $\tau$ is the proper time, and $\Gamma^{\mu}_{\alpha\beta}$ are the Christoffel symbols.

### The Raychaudhuri Equations

This equation describes the evolution of a congruence of timelike or null geodesics. It gives the rate at which a congruence of geodesics is focusing or defocusing. 

$$ \frac{d\theta}{d\tau} + \frac{1}{3}\theta^2 + \sigma_{\alpha\beta}\sigma^{\alpha\beta} - \omega_{\alpha\beta}\omega^{\alpha\beta} = -R_{\alpha\beta}u^{\alpha}u^{\beta} $$


Where $\theta$ is the expansion scalar, $\sigma_{\alpha\beta}$ is the shear tensor, $\omega_{\alpha\beta}$ is the vorticity tensor, $u^{\alpha}$ is the four-velocity of the particle, and $R_{\alpha\beta}$ is the Ricci curvature tensor.