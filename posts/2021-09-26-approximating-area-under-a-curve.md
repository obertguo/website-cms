---
layout: blog
title: Approximating Area Under a Curve
description: Introduction to integration calculus
date: 2021-09-26T00:24:52.178Z
---
# Approximating Area

Let \\(f(x)\\) be a continuous, nonnegative function defined on a closed interval \\([a, b]\\), and we want to approximate the area \\(A\\) bounded by \\(f(x)\\) above and the x-axis below, the line \\(x=a\\) on the left and the line \\(x=b\\) on the right. 

![Area](https://openstax.org/apps/archive/20210823.155019/resources/ece0643b4b0521f672d9c7d8671b95ed51418e9d "Area")

To approximate the area under the curve, a geometric approach can be used by dividing the area into smaller shapes that have known area formulas. The sum of the smaller areas will represent an approximation of the true area. 

The easiest and most well-known approach is to divide the interval \\( [a,b] \\) into \\(n\\) subintervals of equal width.

$$
\Delta{x} = \frac{b-a}{n}\\\\
\text{where } 
\Delta{x} = x_{i} - x_{i-1} \text{ for points } x_0, x_1, x_2,..., x_n \\\\
\text{ and } x_0 = a, x_n = b
$$

Thus, the location of each point can be represented as 

$$
x_i = x_0 + i\Delta{x}
$$


## Partition
A set of points \\(P\\) for \\(i = 0, 1, 2,..., n\\) with \\(a = x_0 \lt x_1 \lt ... \lt x_n = b\\) which divides the interval \\([a, b]\\) into subintervals of the form \\([x_0, x_1], [x_1, x_2],..., [x_{n-1}, x_n]\\) is called a **partition** of \\([a, b]\\). A partition is called a **regular partition** \\(\iff\\) the subintervals all have the same width along the interval \\([a, b]\\). 

# Endpoint Approximations 
## Left-Endpoint Approximation 
On each subinterval \\([x_{i-1}, x_i]\\) for \\(i = 1, 2,..., n\\), construct a rectangle with a width \\(\Delta{x}\\) and a height equal to \\(f(x_{i-1})\\), which is the function value at the left endpoint of the subinterval. The area of the rectangle is \\(f(x_{i-1}) \Delta{x}\\). By adding the area of all the rectangles, an approximate area for \\(A\\) is generated. The notation \\(L_n\\) is used to denote that this is a **left-endpoint approximation** of \\(A\\) using \\(n\\) subintervals. 

$$
A \approx L_n = f(x_0)\Delta{x} + f(x_1)\Delta{x} +...+ f(x_{n-1})\Delta{x}\\\\
= \sum_{i=1}^{n} f(x_{i-1})\Delta{x}
$$
![Left-endpoint approximation](https://openstax.org/apps/archive/20210823.155019/resources/b8744a12877aa8d817a700ae3dfddb5fbfc0f4b7 "Left-endpoint approximation")

## Right-Endpoint Approximation
On each subinterval \\([x_{i-1}, x_i]\\) for \\(i = 1, 2,..., n\\), construct a rectangle with a width \\(\Delta{x}\\) and a height equal to \\(f(x_{i})\\), which is the function value at the right endpoint of the subinterval. The area of the rectangle is \\(f(x_{i}) \Delta{x}\\). By adding the area of all the rectangles, an approximate area for \\(A\\) is generated. The notation \\(R_n\\) is used to denote that this is a **right-endpoint approximation** of \\(A\\) using \\(n\\) subintervals. 

$$
A \approx R_n = f(x_1)\Delta{x} + f(x_2)\Delta{x} +...+ f(x_{n})\Delta{x}\\\\
= \sum_{i=1}^{n} f(x_{i})\Delta{x}
$$
![Right-endpoint approximation](https://openstax.org/apps/archive/20210823.155019/resources/1beb274f0ec267d800c5850bb6540f4e54e44a15 "Right-endpoint approximation")

# Forming Riemann Sums
Thus far, rectangles are used to approximate the area under a curve where the height of each rectangle are determined by using the functional value at either left or the right endpoint of the subinterval \\([x_{i-1}, x_i]\\). In reality, there is no need to restrict the evaluation of a function to either left or right endpoints. Any point \\(x_i\\) in the subinterval \\([x_{i-1}, x_{i}]\\) can be used to determine the height of the rectangle at \\(f(x_{i}^*)\\). Thus, the estimate of the area becomes

$$
A \approx \sum_{i=1}^{n} f(x_{i}^{*}) \Delta{x}
$$

As left and right endpoint approximations become more accurate as \\(n\\) becomes larger, a similar occurance appears with Riemann sums. Riemann sums give better approximation for larger values of \\(n\\). 

## Area Under a Curve using Riemann Sums
Let \\(f(x)\\) be a continuous, nonnegative function on an interval \\([a, b]\\) and let 

$$
\sum_{i=1}^{n} f(x_{i}^{*})\Delta{x} 
$$

be a Riemann sum for \\(f(x)\\). The area under the curve \\(y = f(x)\\) on \\([a, b]\\) is given by 
$$
A = \lim_{n \to \infty} \sum_{i = 1}^{n}f(x_{i}^{*})\Delta{x}
$$

### Note
1. Taking the limit of a sum is different from taking a limit of a function \\(f(x)\\) as x tends to infinity. (Sequence and series) However, for now, we can assume that computational techniques used to compute limits of functions can also be used to calculate limits of sums. 
2. Consider what to do if the expression converges to different limits for different choices of \\( { x_{i} }\\). Fortunately, this does not happen, but the proof is beyond the scope of this text. It can be shown that if \\(f(x)\\) is continuous on the closed interval \\([a. b]\\), then the following summation exists and is unique. (Does not depend on the choice of \\( { x_{i} }\\))
$$
\lim_{n \to \infty} \sum_{i = 1}^{n}f(x_{i}^{*})\Delta{x}
$$ 

# Upper and Lower Sums 
Although any choice for \\( { x_{i} }\\) can be used to estimate the area under a curve, we do not know if that estimate is too high or too low (overestimate and underestimate). If it is important to know if our estimate is high or low, a value for \\( { x_{i} }\\) can be selected to guarantee one result or another. 

## Upper Sum
If we want an overestimate, we can choose \\( { x_{i} }\\) such that for \\( i = 1, 2, 3,..., n, f(x_i) \geq f(x)\\) for all \\(x \in [x_{i-1}, x_i]\\). I.e., we choose \\( { x_{i} }\\) such that for \\(i = 1, 2, 3,..., n, f(x_i)\\) is the maximum function value on the interval \\([x_{i-1}, x_i]\\). 

## Lower Sum
If we want an underestimate, we can choose \\( { x_{i} }\\) such that for \\(i = 1, 2, 3,..., n, f(x_i) \leq f(x)\\) for all \\(x \in [x_{i-1}, x_i]\\). I.e., we choose \\( { x_{i} }\\) such that for \\(i = 1, 2, 3,..., n, f(x_i)\\) is the minimum function value on the interval \\([x_{i-1}, x_i]\\). 

