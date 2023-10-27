---
title: "Quantum Field Theory"
slug: "/quantum_field_theory"
---

# Quantum Field Theory

- [Quantum Field Theory](#quantum-field-theory)
  - [Introduction](#introduction)
  - [Equations](#equations)
  - [Schrödinger equation](#schrödinger-equation)
  - [The Dirac equation](#the-dirac-equation)
  - [The Klein-Gordon equation](#the-klein-gordon-equation)
  - [The Maxwell equations](#the-maxwell-equations)
  - [The Yang-Mills equations](#the-yang-mills-equations)
  - [Lagrangians](#lagrangians)
    - [Lagrangian Equations](#lagrangian-equations)


## Introduction

Quantum Field Theory (QFT) is a mathematical framework used to describe the behavior of fields, particles, and their interactions. It is a powerful tool for understanding the fundamental forces of nature, such as the strong and weak nuclear forces, electromagnetism, and the gravitational force. QFT combines the principles of quantum mechanics, which govern the behavior of matter on the atomic scale, with the principles of relativity, which describe the behavior of matter on the cosmic scale. At its core, QFT is a set of equations that govern the behavior of particles, fields, and their interactions. These equations are used to make predictions about the behavior of these particles and fields, as well as to calculate the probability of various phenomena, such as particle scattering.

## Equations

## Schrödinger equation

The Schrödinger equation is an equation that describes how the quantum state of a system changes over time. It is written as:

$$
i\hbar\frac{\partial}{\partial t}\Psi(x,t) = \hat{H}\Psi(x,t)
$$

Where $\hbar$ is Planck's constant, $\Psi(x,t)$ is the wavefunction of the system, and $\hat{H}$ is the Hamiltonian operator, which contains information about the system's energy and interactions. The equation states that the rate of change of the wavefunction with respect to time is equal to the Hamiltonian acting on the wavefunction. This equation can be used to calculate the evolution of a system's quantum state over time.

## The Dirac equation

$$
\left(i \hbar \gamma^{\mu} \partial_{\mu} - m \right) \psi = 0
$$

The Dirac equation is a quantum equation that describes the behavior of fermions, such as electrons, muons, and quarks. Here, the term $\gamma^{\mu}$ is the Dirac matrices, which represent the spinors of the particle, and $\partial_{\mu}$ is the partial derivative with respect to the space-time coordinates. The term $m$ is the mass of the particle. The $\hbar$ is the reduced Planck constant, which is a fundamental physical constant that is related to the quantum scale of physics. It is equal to the Planck constant divided by $2\pi$. The Planck constant determines the size of the smallest quantum units, and $\hbar$ is used to convert between classical and quantum scale.

## The Klein-Gordon equation

$$
\left(\Box + \frac{m^2 c^2}{\hbar^2} \right) \phi = 0
$$

The Klein-Gordon equation is a quantum equation that describes the behavior of bosons, such as photons, W and Z bosons, and gluons. Here, the term $\Box$ is the d’Alembertian operator, which represents the wave operator in the equation, and $m$ is the mass of the particle.

## The Maxwell equations

\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= - \frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align}

The Maxwell equations describe the behavior of electromagnetic fields. Here, $\mathbf{E}$ is the electric field, $\mathbf{B}$ is the magnetic field, $\rho$ is the charge density, $\epsilon_0$ is the permittivity of free space, $\mathbf{J}$ is the electric current density, $\mu_0$ is the permeability of free space, and $\partial \mathbf{E}/\partial t$ is the electric field's time derivative.

## The Yang-Mills equations

\begin{align}
(D_{\mu} F^{\mu\nu})^a &= J^{\nu a} \\
\left[ D_{\mu}, D_{\nu} \right]^a &= -g f^{abc}A^b_{\mu} A^c_{\nu}
\end{align}

The Yang-Mills equations describe the behavior of the strong nuclear force. Here, $D_{\mu}$ is the covariant derivative, $F^{\mu\nu}$ is the field strength tensor, $J^{\nu a}$ is the source current, $g$ is the coupling constant, $f^{abc}$ is the structure constant, and $A^b_{\mu}$ is the gauge potential.

## Lagrangians

A Lagrangian is a function that describes the motion of a system. It is a function of the positions and velocities of the system's particles and is defined as the difference between the kinetic and potential energy of the system. The Lagrangian is used to derive the equations of motion for the system, known as the Lagrangian equations.

### Lagrangian Equations

The Lagrangian equations are a set of equations that describe the motion of a system with a given Lagrangian. The Lagrangian is a function of the configuration of the system and the time and is defined as the difference between the kinetic and potential energy of the system: 

$$
L = K - U
$$

Where K is the kinetic energy and U is the potential energy. 

The Lagrangian equations are derived by taking the partial derivatives of the Lagrangian with respect to the coordinates of the system, as well as the partial derivatives with respect to the time. These equations are known as the Euler-Lagrange equations, and they are written as follows: 

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) = \frac{\partial L}{\partial q_i}
$$

where $q_i$ is a coordinate of the system and $\dot{q_i}$ is its time derivative. 

These equations are used to determine the dynamics of a system, as they describe how the system behaves over time given certain initial conditions. In other words, they describe the motion of the system over time.
