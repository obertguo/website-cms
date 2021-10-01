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

This definition came with restrictions that \(f(x)\) required to be continuous and nonnegative. Releasing these constraints help to yield a definite integral.

If \\(f(x)\\) is defined on an interval \\([a,b]\\), the **definite integral** of f from a to b is given by:

$$
\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i}^{*}) \Delta{x}
$$

provided the limit exists. If the limit exists, the function \\(f(x)\\) is said to be integrable on \\([a,b]\\) or is an **integrable function.**