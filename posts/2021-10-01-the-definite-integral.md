---
layout: blog
title: The Definite Integral
description: The next calculus lesson after Approximating Area Under a Curve
date: 2021-10-01T16:49:31.725Z
---
# Definition and Notation

## Recall Reimann Sums

$$
A = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i}^{*}) \Delta{x}
$$

This definition came with restrictions that \\(f(x)\\) required to be continuous and nonnegative. Releasing these constraints help to yield a definite integral.

## Definition of a Definite Integral
If \\(f(x)\\) is defined on an interval \\([a,b]\\), the **definite integral** of \\(f\\) from a to b is given by:

$$
\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i}^{*}) \Delta{x}
$$

provided the limit exists. If the limit exists, the function \\(f(x)\\) is said to be integrable on \\([a,b]\\) or is an **integrable function.**

*Note, the definite integral is **not the same** as an indefinite integral, despite sharing very similar notation*

The function \\(f(x)\\) is the **integrand** and the \\(dx\\) indicates \\f(x)\\) is a function with respect to x, called the **variable of integration.** It is to be treated as a dummy variable that has no impact on the computation of the integral. Thus, any variable could be used as the variable of integration.

$$
\int_a^b f(x)dx = \int_a^b f(t)dt = \int_a^b f(u)du
$$

Recall that if \\(f(x)\\) is continuous on \\([a,b,]\\), then the limit of the Reimann sum exists and is unique. This leads to the following theorem.

### Continuous functions are integrable 
If \\(f(x)\\) is continuous on \\([a,b]\\), then \\(f\\) is integrable on \\([a,b]\\).

Functions that are not continuous on \\([a,b]\\) may still be integrable depending on the discontinuities. E.g., functions with a finite number of jump discontinuities on a closed interval are integrable. 

