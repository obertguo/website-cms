---
layout: blog
title: Approximating Area Under a Curve
description: Introduction to integration calculus
date: 2021-09-26T00:24:52.178Z
---
# Approximating Area

Let f(x) be a continuous, nonnegative function defined on a closed interval \[a, b], and we want to approximate the area A bounded by f(x) above and the x-axis below, the line x=a on the left and the line x=b on the right. 

![Area](https://openstax.org/apps/archive/20210823.155019/resources/ece0643b4b0521f672d9c7d8671b95ed51418e9d "Area")

To approximate the area under the curve, a geometric approach can be used by dividing the area into smaller shapes that have known area formulas. The sum of the smaller areas will represent an approximation of the true area. 



The easiest and most well-known approach is to divide the interval \[a,b] into n subintervals of equal width.



$$

\Delta{x} = \frac{b-a}{n}

\text{where} 

\Delta{x} = x_{i} - x{i-1} for points x_0, x_1,..., x_n 

\text{ and } x_0 = a, x_n = b

$$



Thus, the location of each point can be represented as 

$$

x_i = x_0 + i\Delta{x}

$$