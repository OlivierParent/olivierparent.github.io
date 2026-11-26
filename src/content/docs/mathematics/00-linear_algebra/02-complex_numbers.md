---
title: Complexe getallen
---

*[2D]: tweedimensionale ruimte
*[3D]: driedimensionale ruimte
*[Eng.]: Engels/English
*[Ned.]: Nederlands

Een 2D-rotatie kan eenvoudig berekend worden met behulp van complexe getallen.

## Imaginaire getal

> $$
> \begin{aligned}
> \mathbf{i} &= \sqrt{-1}
> \\\\
> \lbrace \enspace
>   \mathbf{i} &\in \mathbb{I}
> \enspace \rbrace
> \end{aligned}
> $$

### Eigenschappen

**Eigenschappen van $i$**

> $$
> \begin{aligned}
> \mathbf{i} &= \sqrt{-1} \\
> \mathbf{i}^2 &= -1 \\
> \mathbf{i}^2 + 1 &= 0
> \end{aligned}
> $$

## Complex getal

Een **complex getal** *(Eng. complex number)* is samengesteld uit een reëel getal en een imaginair getal.

> $$
> \begin{gathered}
> c = a + b \space \mathbf{i}
> \\\\
> \lbrace \enspace 
>   c \in \mathbb{C}
>   \enspace \vert \enspace
>   a, b \in \mathbb{R}
>   \enspace \vert \enspace
>   \mathbf{i} \in \mathbb{I}
> \enspace \rbrace
> \end{gathered}
> $$

## Complex getal als matrix

> $$
> \begin{gathered}
> a + b \space \mathbf{i} \leftrightarrow \begin{bmatrix}
>   a & -b \\
>   b &  a \\
> \end{bmatrix}
> \end{gathered}
> $$

## Complex vlak

De assen van het **complexe vlak** *(Eng. complex plane)* zijn vergelijkbaar met assen in het **cartesiaans vlak** *(Eng. Cartesian plane)*.

| As                                             | Cartesiaans vlak                  | Complex vlak                               |
|:-----------------------------------------------|:----------------------------------|:-------------------------------------------|
| **<Color value="ROOD">Horizontale as</Color>** | <Color value="ROOD">X-as</Color>  | <Color value="ROOD">Reële as</Color>       |
| **<Color value="GROEN">Verticale as</Color>**  | <Color value="GROEN">Y-as</Color> | <Color value="GROEN">Imaginaire as</Color> |

> $$
> \begin{gathered}
> c = v_x + v_y \space \mathbf{i}
> \\\\
> \lbrace \enspace 
>   c \in \mathbb{C}
>   \enspace \vert \enspace
>   v_x, v_y \in \mathbb{R}
>   \enspace \vert \enspace
>   \mathbf{i} \in \mathbb{I}
> \enspace \rbrace
> \end{gathered}
> $$

## Rotatie in 2D

We kunnen een complex getal roteren door het te vermenigvuldigen met een ander complex getal.

$$
\begin{aligned}
(a + b \space \mathbf{i}) \space (v_x + v_y \space \mathbf{i}) &= a \space v_x + a \space v_y \space \mathbf{i}+ b \space v_x \space \mathbf{i} + b \space v_y \space \mathbf{i}^2
\\
&= a \space v_x + (a \space v_y + b \space v_x) \space \mathbf{i} - b \space v_y
\\
&= a \space v_x - b \space v_y + (a \space v_y + b \space v_x) \space \mathbf{i}
\\
&= a \space v_x - b \space v_y + (b \space v_x + a \space v_y) \space \mathbf{i}
\\\\
a \space v_x - b \space v_y + (b \space v_x + a \space v_y) \space \mathbf{i} &\leftrightarrow \begin{bmatrix}
    a \space v_x - b \space v_y & -(b \space v_x + a \space v_y) \\
    b \space v_x + a \space v_y &   a \space v_x - b \space v_y  \\
\end{bmatrix}
\end{aligned}
$$

Als vermenigvuldiging van matrices:

$$
\begin{aligned}
\begin{bmatrix}
    a & -b \\
    b &  a \\
\end{bmatrix} \begin{bmatrix}
    v_x & -v_y \\
    v_y &  v_x \\
\end{bmatrix} &= \begin{bmatrix}
    a \space v_x - b \space v_y & -a \space v_y - b \space v_x \\
    b \space v_x + a \space v_y & -b \space v_y + a \space v_x \\
\end{bmatrix}
\\\\
&= \begin{bmatrix}
    a \space v_x - b \space v_y & -(b \space v_x + a \space v_y) \\
    b \space v_x + a \space v_y &   a \space v_x - b \space v_y  \\
\end{bmatrix}
\end{aligned}
$$

Omdat we enkel geïnteresseerd zijn in $v_x^{\prime}$ en $v_y^{\prime}$ kunnen we dit nog verder vereenvoudigen:

$$
\begin{aligned}
\begin{bmatrix}
    v_x^{\prime} \\
    v_y^{\prime} \\
\end{bmatrix} &= \begin{bmatrix}
    a & -b \\
    b &  a \\
\end{bmatrix} \begin{bmatrix}
    v_x \\
    v_y \\
\end{bmatrix}
\\\\
&= \begin{bmatrix}
    a \space v_x - b \space v_y \\
    b \space v_x + a \space v_y \\
\end{bmatrix}
\end{aligned}
$$

Daaruit kunnen we besluiten:

$$
\begin{aligned}
(a + b \space \mathbf{i}) \space (v_x + v_y \space \mathbf{i}) &= v_x^{\prime} + v_y^{\prime} \space \mathbf{i}
\\\\
\begin{cases}
v_x^{\prime} &= a \space v_x - b \space v_y
\\
v_y^{\prime} &= b \space v_x + a \space v_y
\end{cases}
\end{aligned}
$$

We kunnen het eerste complex getal door de **Eulerrotatie** vervangen:

**Complex getal als matrix**
> $$
> \begin{gathered}
> \begin{bmatrix}
>   \cos\theta & -\sin\theta \\
>   \sin\theta &  \cos\theta \\
> \end{bmatrix} \leftrightarrow \cos\theta + \sin\theta \space \mathbf{i}
> \end{gathered}
> $$

$$
\begin{aligned}
\begin{bmatrix}
    v_x^{\prime} \\
    v_y^{\prime} \\
\end{bmatrix} &= \begin{bmatrix}
    \cos\theta & -\sin\theta \\
    \sin\theta & \cos\theta \\
\end{bmatrix} \begin{bmatrix}
    v_x \\
    v_y \\
\end{bmatrix}
\\\\
&= \begin{bmatrix}
   \cos\theta \space v_x - \sin\theta \space v_y \\
   \sin\theta \space v_x + \cos\theta \space v_y \\
\end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
(\cos\theta + \sin\theta \space \mathbf{i}) \space (v_x + v_y \space \mathbf{i}) &= v_x^{\prime} + v_y^{\prime} \space \mathbf{i}
\\\\
\begin{cases}
v_x^{\prime} = \cos\theta \space v_x - \sin\theta \space v_y
\\
v_y^{\prime} = \sin\theta \space v_x + \cos\theta \space v_y
\end{cases}
\end{aligned}
$$
