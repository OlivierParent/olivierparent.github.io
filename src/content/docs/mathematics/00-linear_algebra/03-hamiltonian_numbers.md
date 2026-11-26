---
title: Hamiltoniaanse getallen
---

*[2D]: tweedimensionale ruimte
*[3D]: driedimensionale ruimte
*[Eng.]: Engels/English
*[Lat.]: Latijn/lingua latina
*[Ned.]: Nederlands
*[o.m.]: onder meer
*[vs.]: versus

## Waarom?

Werken met eulerrotaties in 3D is moeilijk. Bovendien is de volgorde van de rotaties van belang.

Het is mogelijk dat er **gimbal lock** *(Ned. cardanische ophangingsvergrendeling)* ontstaat. Bij eulerrotaties draaien de rotatievlakken mee, en dan kunnen twee rotatievlakken samenvallen waardoor er een **graad van vrijheid** *(Eng. degree of freedom)* verloren gaat en vervolgens niet elke rotatie meer mogelijk is. 

Voor animaties, bijvoorbeeld, start men met een beginvector en een eindvector en berekent men de tussenvectoren via **interpolatie**. Met eulerrotaties kan er bij interpolatie een onverwachte verandering ontstaan, waardoor de animatie niet meer uit vloeiende overgangen bestaat.

Om dit op te lossen kan je **hamiltoniaanse getallen** gebruiken voor de rotaties in de 3D. We noemen die getallen **quaternionen**. Quaternionen zijn veel minder intuïtief om mee te werken door de vierdimensionaliteit van de ruimte waarbinnen ze bestaan.

::: icon-good Voordelen  
De voordelen van quaterionen gebruiken vs. eulerrotaties:
- Geen gimbal lock mogelijk;
- Vloeiende interpolatie tussen twee vectoren.
:::

::: icon-know  
Naast computergrafiek hebben quaternionen ook hebben heel belangrijke toepassingen in onder meer robotica en kwantumfysica.  
:::

## Quaternion

Naar analogie met de tweedimensionale rotatie met complexe getallen, heeft men lang gezocht naar een driedimensionale rotatie. Waar een complex getal twee getallen heeft -- een reëel getal en een imaginair getal -- en werkte voor rotaties in 2D, dacht men intuïtief dat een derde, imaginair getal zou werken voor rotaties in 3D. Maar helaas.

Hamilton vond uiteindelijk de oplossing door een **vierde imaginair getal** te gebruiken: een reëel getal en drie imaginaire getallen -- een ==**groep van vier** *(Lat. quaternion)* getallen.==

::: icon-person Hamilton  
:ireland: [Sir William Rowan Hamilton](https://nl.wikipedia.org/wiki/William_Rowan_Hamilton)  
:::

> $$
> \begin{gathered}
> q = q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}
> \\\\
> \lbrace \enspace
>   q, \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
>   \enspace \vert \enspace
>   q_w, q_x, q_y, q_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

Complexe getallen ($\mathbb{C}$) zijn een **deelverzameling** *(Eng. subset)* van hamiltoniaanse getallen ($\mathbb{H}$). dat wil zeggen dat elk complex getal ook een hamiltoniaans getal is.

> $$
> \mathbb{R} \subset \mathbb{C} \subset \mathbb{H}
> $$

### Pure quaternion

Een **pure quaternion** heeft geen scalair deel.

> $$
> \begin{gathered}
> q = q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}
> \\\\
> \lbrace \enspace
>   q, \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
>   \enspace \vert \enspace
>   q \in \mathbb{R}^3
>   \enspace \vert \enspace
>   q_x, q_y, q_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

> Een pure quaternion wordt gebruikt om een **positie** weer te geven, en komt dus overeen met een euclidische vector.

### Indentiteitsquaternionen

De **additieve identeitsquaternion** ($0_\mathbb{H}$) heeft geen invloed op het resultaat van een optelling.

> $$
> 0_\mathbb{H} = 0 + 0 \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}
> $$

$$
q + 0_\mathbb{H} = 0_\mathbb{H} + q = q
$$

De **multiplicatieve identeitsquaternion** ($1_\mathbb{H}$) heeft geen invloed op het resultaat van een vermenigvuldiging.

> $$
> 1_\mathbb{H} = 1 + 0 \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}
> $$

$$
q \space 1_\mathbb{H} = 1_\mathbb{H} \space q = q
$$

### Quaternion als vector

De **quaternion** *(Eng. quaternion)* heeft een scalair deel en een vectordeel. Het vectordeel noemt men de quaternionvector of **imaginaire vector**.

> $$
> \begin{gathered}
> q = q_s + \vec{q}_v
> \\\\
> \lbrace \enspace
>   q \in \mathbb{H}
>   \enspace \vert \enspace
>   q_s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{q}_v \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

Een quaternion kan ook als **vector** voorgesteld worden.

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{q} &= \langle{q_s, \vec{q}_v}\rangle
> \\\\
> &\begin{cases}
> q_s = q_w
> \\
> \vec{q}_v = \langle{q_x, q_y, q_z}\rangle
> \end{cases}
> \\\\
> \vec{q} &= \langle{q_w, q_x, q_y, q_z}\rangle \\
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{q} \in \mathbb{R}^4
>   \enspace \vert \enspace
>   q_s, q_w, q_x, q_y, q_z \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{q}_v \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

### Quaternion als matrix

> $$
> \begin{gathered}
> q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}
> \Leftrightarrow
> \begin{bmatrix}
>    q_w + q_x \space \mathbf{i} & q_y + q_z \space \mathbf{i} \\
>   -q_y + q_z \space \mathbf{i} & q_w - q_x \space \mathbf{i} \\
> \end{bmatrix}
> \Leftrightarrow
> \begin{bmatrix}
>    q_w & -q_x & -q_y & -q_z \\
>    q_x &  q_w & -q_z &  q_y \\
>    q_y &  q_z &  q_w & -q_x \\
>    q_z & -q_y &  q_x &  q_w \\
> \end{bmatrix}
> \\\\
> \lbrace \enspace
>   q_w, q_x, q_y, q_z \in \mathbb{R}
>   \enspace \vert \enspace
>   \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
> \enspace \rbrace
> \end{gathered}
> $$

### Geconjugeerde quaternion

$\bar{q}$ (of $q^\ast$) is de **geconjugeerde quaternion** *(Eng. conjugate)* van quaternion $q$.

> $$
> \begin{gathered}
> \begin{aligned}
> q       &= q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}
> \\\\
> \bar{q} &= q_w - q_x \space \mathbf{i} - q_y \space \mathbf{j} - q_z \space \mathbf{k}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   q, \bar{q}, \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
>   \enspace \vert \enspace
>   q_w, q_x, q_y, q_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{q}       &= \langle q_s,  \vec{q}_v \rangle
> \\\\
> \vec{q}^\ast  &= \langle q_s, -\vec{q}_v \rangle
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{q}, \vec{q}^\ast \in \mathbb{R}^4
>   \enspace \vert \enspace
>   q_s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{q}_v \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{q} &= \langle q_w, q_x, q_y, q_z \rangle
> \\\\
> \vec{q}^\ast &= \langle q_w, -q_x, -q_y, -q_z \rangle
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{q}, \vec{q}^\ast \in \mathbb{R}^4
>   \enspace \vert \enspace
>   q_w, q_x, q_y, q_z\in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

### Norm

$\lVert q \rVert$ is de **norm** *(Eng. magnitude, length)* van een quaternion $q$

> $$
> \begin{aligned}
> \lVert q \rVert &=\sqrt{q_w^2 + q_x^2 + q_y^2 + q_z^2}
> \end{aligned}
> $$

> $$
> \begin{aligned}
> \lVert \vec{q} \rVert &= \sqrt{q_s^2 + \lVert \vec{q}_v \rVert ^ 2}
> \end{aligned}
> $$

$\lvert \boldsymbol{q} \rvert$ is de **lengte** van een quaternion $q$

> $$
> \lvert \boldsymbol{q} \rvert = \sqrt{q_w^2 + q_x^2 + q_y^2 + q_z^2}
> $$


### Normquaternion

Een quaternion $n$ is een **normquaternion** *(Eng. unit quaternion)* als:

> $$
> \lVert n \rVert = 1
> $$

#### Normalisatie

> $$
> \begin{aligned}
> q &=  q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_y \space \mathbf{k}
> \\\\
> n &= \frac{q_w}{\lVert q \lVert} + \frac{q_x}{\lVert q \lVert} \space \mathbf{i}  + \frac{q_y}{\lVert q \lVert} \space \mathbf{j}  + \frac{q_y} {\lVert q \lVert} \space \mathbf{k}
> \end{aligned}
> $$


### Inverse quaternion

> $$
> \begin{gathered}
> q^{-1} = \frac{\bar{q}}{\lVert q \rVert^2}
> \\\\
> \lbrace \enspace
>   q \in \mathbb{H}
>   \enspace \vert \enspace
>   q \neq 0_\mathbb{H}
> \enspace \rbrace
> \end{gathered}
> $$

#### Eigenschappen

> $$
> n_w^2 + n_x^2 + n_y^2 + n_z^2 = 1
> $$

> $$
> n \space \bar{n} = \bar{n} \space n = 1
> $$

Eigenschappen

> $$
> \begin{aligned}
> q \space \bar{q} &= \bar{q} \space q \\
>                  &= \lVert q \rVert^2
> \\\\
> \lVert \bar{q} \rVert = \lVert q \rVert
> \end{aligned}
> $$

$$
\begin{aligned}
n \space \bar{n} &= (n_w + n_x \space \mathbf{i} + n_y \space \mathbf{j} + n_z \space \mathbf{k}) \space (n_w - n_x \space \mathbf{i} - n_y \space \mathbf{j} - n_z \space \mathbf{k})
\\\\
&=          n_w                   \space n_w - n_w                   \space n_x \space \mathbf{i}   - n_w                   \space n_y \space \mathbf{j}   - n_w                   \space n_z \space \mathbf{k}   \\
&\medspace+ n_x \space \mathbf{i} \space n_w - n_x \space \mathbf{i} \space n_x \space \mathbf{i}   - n_x \space \mathbf{i} \space n_y \space \mathbf{j}   - n_x \space \mathbf{i} \space n_z \space \mathbf{k}   \\
&\medspace+ n_y \space \mathbf{j} \space n_w - n_y \space \mathbf{j} \space n_x \space \mathbf{i}   - n_y \space \mathbf{j} \space n_y \space \mathbf{j}   - n_y \space \mathbf{j} \space n_z \space \mathbf{k}   \\
&\medspace+ n_z \space \mathbf{k} \space n_w - n_z \space \mathbf{k} \space n_x \space \mathbf{i}   - n_z \space \mathbf{k} \space n_y \space \mathbf{j}   - n_z \space \mathbf{k} \space n_z \space \mathbf{k}   \\
\\
&=          n_w^2                            - n_x \space n_w \space                   \mathbf{i}   - n_w \space n_y \space                   \mathbf{j}   - n_w \space n_z \space                   \mathbf{k}   \\
&\medspace+ n_w \space n_x \space \mathbf{i} - n_x^2          \space                   \mathbf{i}^2 - n_x \space n_y \space        \mathbf{i} \mathbf{j}   - n_x \space n_z \space        \mathbf{i} \mathbf{k}   \\
&\medspace+ n_w \space n_y \space \mathbf{j} - n_x \space n_y \space        \mathbf{j} \mathbf{i}   - n_y^2          \space                   \mathbf{j}^2 - n_y \space n_z \space        \mathbf{j} \mathbf{k}   \\
&\medspace+ n_w \space n_z \space \mathbf{k} - n_x \space n_z \space        \mathbf{k} \mathbf{i}   - n_y \space n_z \space        \mathbf{k} \mathbf{j}   - n_z^2          \space                   \mathbf{k}^2 \\
\\
&=          n_w^2                            - n_w \space n_x \space                   \mathbf{i}   - n_w \space n_y \space                   \mathbf{j}   - n_w \space n_z \space                   \mathbf{k}   \\
&\medspace+ n_w \space n_x \space \mathbf{i} + n_x^2                                                - n_x \space n_y \space                   \mathbf{k}   + n_x \space n_z \space                   \mathbf{j}   \\
&\medspace+ n_w \space n_y \space \mathbf{j} + n_x \space n_y \space                   \mathbf{k}   + n_y^2                                                - n_y \space n_z \space                   \mathbf{i}   \\
&\medspace+ n_w \space n_z \space \mathbf{k} - n_x \space n_z \space                   \mathbf{j}   + n_y \space n_z \space                   \mathbf{i}   + n_z^2                                                \\
\\
&=          n_w^2                            + n_x^2                                                + n_y^2                                                + n_z^2                                                \\
&\medspace+ n_w \space n_x \space \mathbf{i} - n_w \space n_x \space                   \mathbf{i}   + n_y \space n_z \space                   \mathbf{i}   - n_y \space n_z \space                   \mathbf{i}   \\
&\medspace+ n_w \space n_y \space \mathbf{j} - n_w \space n_y \space                   \mathbf{j}   + n_x \space n_z \space                   \mathbf{j}   - n_x \space n_z \space                   \mathbf{j}   \\
&\medspace+ n_w \space n_z \space \mathbf{k} - n_w \space n_z \space                   \mathbf{k}   + n_x \space n_y \space                   \mathbf{k}   - n_x \space n_y \space                   \mathbf{k}   \\
\\
&= n_w^2 + n_x^2 + n_y^2 + n_z^2                                                                  \\
&\medspace+ (n_w \space n_x - n_w \space n_x + n_y \space n_z - n_y \space n_z) \space \mathbf{i} \\
&\medspace+ (n_w \space n_y - n_w \space n_y + n_x \space n_z - n_x \space n_z) \space \mathbf{j} \\
&\medspace+ (n_w \space n_z - n_w \space n_z + n_x \space n_y - n_x \space n_y) \space \mathbf{k} \\
\\
&= 1 + 0 \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}
 = 1_\mathbb{H}
 = 1
\\\\
n \space \bar{n} &= \langle n_s \space n_s - (\vec{n}_v \cdot -\vec{n}_v), n_s \space \vec{n}_v - n_s \space \vec{n}_v + \vec{n}_v \times -\vec{n}_v \rangle
\\\\
&= \langle n_s^2 - 0, 0 + \vec{n}_v \times -\vec{n}_v \rangle
\\\\
&= \langle n_s^2, \vec{n}_v \times -\vec{n}_v \rangle
\\\\
&= \langle n_s^2, -n_y \space n_z + n_z \space n_y , -n_z \space n_x + n_x \space n_z , -n_x \space n_y + n_y \space n_x \rangle
\\\\
&= \langle n_s^2, -n_y \space n_z + n_z \space n_y , -n_z \space n_x + n_x \space n_z , -n_x \space n_y + n_y \space n_x \rangle
\end{aligned}
$$

> $$
> n^{-1} = \bar{n}
> $$

## Bewerkingen

> $$
> \begin{gathered}
> \begin{aligned}
> \begin{cases}
> p &= p_w + p_x \space \mathbf{i} + p_y \space \mathbf{j} + p_z \space \mathbf{k}
> \\
> q &= q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}
> \\
> r &= r_w + r_x \space \mathbf{i} + r_y \space \mathbf{j} + r_z \space \mathbf{k}
> \end{cases}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   p, q, r, \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
>   \enspace \vert \enspace
>   p_x, q_x, r_x, p_y, q_y, r_y, p_z, q_z, r_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{gathered}
> \begin{aligned}
> \begin{cases}
> \vec{p} &= \langle p_s, \vec{p}_v \rangle
> \\
> \vec{q} &= \langle q_s, \vec{q}_v \rangle
> \\
> \vec{r} &= \langle r_s, \vec{q}_r \rangle
> \end{cases}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{p}, \vec{q}, \vec{r} \in \mathbb{R}^4
>   \enspace \vert \enspace
>   p_s, q_s, r_s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{p}_v, \vec{q}_v, \vec{r}_v \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{gathered}
> \begin{aligned}
> \begin{cases}
> \vec{p} &= \langle p_w, p_x, p_y, p_z \rangle
> \\
> \vec{q} &= \langle q_w, q_x, q_y, q_z \rangle
> \\
> \vec{r} &= \langle r_w, r_x, r_y, r_z \rangle
> \end{cases}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{p}, \vec{q}, \vec{r} \in \mathbb{R}^4
>   \enspace \vert \enspace
>   p_w, q_w, r_w, p_x, q_x, r_x, p_y, q_y, r_y, p_z, q_z, r_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

### Som

#### Eigenschappen

|  Eigenschap |          Voorbeeld          | Met                      |
|------------:|:---------------------------:|:-------------------------|
| Commutatief |       $p + q = q + p$       | $p, q \in \mathbb{H}$    |
| Associatief | $(p + q) + r = p + (q + r)$ | $p, q, r \in \mathbb{H}$ |

#### Som van quaternionen

> $$
> \begin{gathered}
> \begin{aligned}
> p + q &= (p_w + q_w) + (p_x + q_x) \space \mathbf{i} + (p_y + q_y) \space \mathbf{j} + (p_z + q_z) \space \mathbf{k}
> \\\\
> &\begin{cases}
> (p + q)_w = p_w + q_w \\
> (p + q)_x = p_x + q_x \\
> (p + q)_y = p_y + q_y \\
> (p + q)_z = p_z + q_z \\
> \end{cases}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   p, q, \mathbf{i}, \mathbf{y}, \mathbf{k} \in \mathbb{H}
>   \enspace \vert \enspace
>   p_w, q_w, p_x, q_x, p_y, q_y, p_z, q_z,  \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

#### Som van quaternionvectoren

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{p} + \vec{q} &= \langle p_s + q_s, \vec{p}_v + \vec{q}_v \rangle
> \\\\
> &\begin{cases}
> (p + q)_s = p_s + q_s
> \\
> (p + q)_v = \vec{p}_v + \vec{q}_v
> \end{cases}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{p}, \vec{q} \in \mathbb{R}^4
>   \enspace \vert \enspace
>   p_s, q_s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{p}_v, \vec{q}_v \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

### Quaternionvermenigvuldiging

#### Regels

Hamilton formuleerde de vermenigvuldigingsregels voor quaternionen als volgt:

> $$
> \begin{gathered}
> \mathbf{i}^2 = \mathbf{j}^2 = \mathbf{k}^2 = \mathbf{i} \space \mathbf{j} \space \mathbf{k} = -1
> \\\\
> \lbrace \enspace
>   \mathbf{i}, \mathbf{j}, \mathbf{k} \in \mathbb{H}
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{aligned}
> \mathbf{i}^2 = \mathbf{i} \space \mathbf{j} \space \mathbf{k} \qquad\Leftrightarrow\qquad \mathbf{i} = \mathbf{j} \space \mathbf{k} \qquad\Leftrightarrow\qquad -\mathbf{i} = \mathbf{k} \space \mathbf{j} \qquad\Leftrightarrow\qquad \mathbf{i} = -\mathbf{k} \space \mathbf{j}
> \\\\
> \mathbf{j}^2 = \mathbf{i} \space \mathbf{j} \space \mathbf{k} \qquad\Leftrightarrow\qquad \mathbf{j} = \mathbf{k} \space \mathbf{i} \qquad\Leftrightarrow\qquad -\mathbf{j} = \mathbf{i} \space \mathbf{k} \qquad\Leftrightarrow\qquad \mathbf{j} = -\mathbf{i} \space \mathbf{k}
> \\\\
> \mathbf{k}^2 = \mathbf{i} \space \mathbf{j} \space \mathbf{k} \qquad\Leftrightarrow\qquad \mathbf{k} = \mathbf{i} \space \mathbf{j} \qquad\Leftrightarrow\qquad -\mathbf{k} = \mathbf{j} \space \mathbf{i} \qquad\Leftrightarrow\qquad \mathbf{k} = -\mathbf{j} \space \mathbf{i}
> \end{aligned}
> $$

| rij ${\cdot}$ kolom |          $1$ |  $\mathbf{i}$ |  $\mathbf{j}$ |  $\mathbf{k}$ |
|:-------------------:|-------------:|--------------:|--------------:|--------------:|
|         $1$         |          $1$ |  $\mathbf{i}$ |  $\mathbf{j}$ |  $\mathbf{k}$ |
|    $\mathbf{i}$     | $\mathbf{i}$ |          $-1$ |  $\mathbf{k}$ | $-\mathbf{j}$ |
|    $\mathbf{j}$     | $\mathbf{j}$ | $-\mathbf{k}$ |          $-1$ |  $\mathbf{i}$ |
|    $\mathbf{k}$     | $\mathbf{k}$ |  $\mathbf{j}$ | $-\mathbf{i}$ |          $-1$ |

::: details Bewijs
$$
\begin{aligned}
-1 &= \mathbf{i} \space \mathbf{j} \space \mathbf{k}
\\\\
-1 \space (-1) &= -1 \space \mathbf{i} \space \mathbf{j} \space \mathbf{k}
\\\\
1 &= -\mathbf{i} \space (\mathbf{j} \space \mathbf{k})
\\\\
1 &= -\mathbf{i} \space (-\mathbf{k} \space \mathbf{j})
\\\\
1 &= \mathbf{i} \space \mathbf{k} \space \mathbf{j}
\\\\
1 \space \mathbf{j} &= \mathbf{i} \space \mathbf{k} \space \mathbf{j} \space \mathbf{j}
\\\\
\mathbf{j} &= \mathbf{i} \space \mathbf{k} \space \mathbf{j}^2
\\\\
\mathbf{j} &= \mathbf{i} \space \mathbf{k} \space (-1)
\\\\
\mathbf{j} &= -\mathbf{i} \space \mathbf{k}
\end{aligned}
$$
:::

#### Eigenschappen

Het product van een 
==hamiltoniaanse getal en een reëel getal is **commutatief**,== maar **niet** met andere hamiltoniaanse getallen behalve zichzelf.
Het product van quaternionen is **niet-commutatief**, want het uitwendig product van de imaginaire vectoren is niet-commutatief. Het product is wel **anti-commutatief**: als de termen omgewisseld worden, dan wordt het negatief.

|       Eigenschap |                    Voorbeeld                    | Met                                                         |
|-----------------:|:-----------------------------------------------:|:------------------------------------------------------------|
|      Commutatief |            $s \space q = q \space s$            | $s \in \mathbb{R} \enspace \vert \enspace q \in \mathbb{H}$ |
| Niet-commutatief |          $p \space q \neq q \space p$           | $p, q \in \mathbb{H}$                                       |
| Anti-commutatief |           $p \space q = - q \space p$           | $p, q \in \mathbb{H}$                                       |
|     Distributief |  $p \space (q + r) = p \space q + p \space r$   | $p, q, r \in \mathbb{H}$                                    |
|      Associatief | $(p \space q) \space r = p \space (q \space r)$ | $p, q, r \in \mathbb{H}$                                    |

::: details Bewijs anti-commutativiteit
$$
\begin{aligned}
p \space q &= -q \space p
\\\\
(p \space q) \space q &= (-q \space p) \space q
\\\\
p \space q^2 &= -q \space p \space q
\\\\
p \space (-1) &= -q \space p \space q
\\\\
-p &= -q \space p \space q
\\\\
(-p) \space q &= (-q \space p \space q) \space q
\\\\
-p \space q &= -q \space p \space q^2
\\\\
-p \space q &= -q \space p \space (-1)
\\\\
-p \space q &= q \space p
\\\\
(-1) \space (-p \space q) &= (-1) \space (q \space p)
\\\\
p \space q &= -q \space p
\end{aligned}
$$
:::

#### Hamilton-product

Het hamilton-product is het resultaat van de vermenigvuldiging van twee quaternionen.

> $$
> \begin{aligned}
> p \space q &= ( p_w + p_x \space \mathbf{i} + p_y \space \mathbf{j} + p_z \space \mathbf{k} ) \space ( q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k} )
> \\\\
> &= (p_w \space q_w - p_x \space q_x - p_y \space q_y - p_z \space q_z)                   \\
> &\medspace+ (p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y) \space \mathbf{i} \\
> &\medspace+ (p_w \space q_y - p_x \space q_z + p_y \space q_w + p_z \space q_x) \space \mathbf{j} \\
> &\medspace+ (p_w \space q_z + p_x \space q_y - p_y \space q_x + p_z \space q_w) \space \mathbf{k} \\
> \\\\
> &\begin{cases}
> (p \space q)_w = p_w \space q_w - p_x \space q_x - p_y \space q_y - p_z \space q_z \\
> (p \space q)_x = p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y \\
> (p \space q)_y = p_w \space q_y - p_x \space q_z + p_y \space q_w + p_z \space q_x \\
> (p \space q)_z = p_w \space q_z + p_x \space q_y - p_y \space q_x + p_z \space q_w \\
> \end{cases}
> \end{aligned}
> $$

::: details Bewijs
$$
\begin{aligned}
p \space q &= ( p_w + p_x \space \mathbf{i} + p_y \space \mathbf{j} + p_z \space \mathbf{k} ) \space ( q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k} ) \\
\\
&=          p_w \space q_w                   + p_w \space q_x \space \mathbf{i}                   + p_w \space q_y \space \mathbf{j}                   + p_w \space q_z \space \mathbf{k}                   \\
&\medspace+ p_x \space \mathbf{i} \space q_w + p_x \space \mathbf{i} \space q_x \space \mathbf{i} + p_x \space \mathbf{i} \space q_y \space \mathbf{j} + p_x \space \mathbf{i} \space q_z \space \mathbf{k} \\
&\medspace+ p_y \space \mathbf{j} \space q_w + p_y \space \mathbf{j} \space q_x \space \mathbf{i} + p_y \space \mathbf{j} \space q_y \space \mathbf{j} + p_y \space \mathbf{j} \space q_z \space \mathbf{k} \\
&\medspace+ p_z \space \mathbf{k} \space q_w + p_z \space \mathbf{k} \space q_x \space \mathbf{i} + p_z \space \mathbf{k} \space q_y \space \mathbf{j} + p_z \space \mathbf{k} \space q_z \space \mathbf{k} \\
\\
&=          p_w \space q_w                   + p_w \space q_x \space \mathbf{i}                   + p_w \space q_y \space \mathbf{j}                   + p_w \space q_z \space \mathbf{k}                   \\
&\medspace+ p_x \space q_w \space \mathbf{i} + p_x \space q_x \space \mathbf{i}^2                 + p_x \space q_y \space \mathbf{i} \mathbf{j}        + p_x \space q_z \space \mathbf{i} \mathbf{k}        \\
&\medspace+ p_y \space q_w \space \mathbf{j} + p_y \space q_x \space \mathbf{j} \mathbf{i}        + p_y \space q_y \space \mathbf{j}^2                 + p_y \space q_z \space \mathbf{j} \mathbf{k}        \\
&\medspace+ p_z \space q_w \space \mathbf{k} + p_z \space q_x \space \mathbf{k} \mathbf{i}        + p_z \space q_y \space \mathbf{k} \mathbf{j}        + p_z \space q_z \space \mathbf{k}^2                 \\
\\
&=          p_w \space q_w                   + p_w \space q_x \space \mathbf{i}                   + p_w \space q_y \space \mathbf{j}                   + p_w \space q_z \space \mathbf{k}                   \\
&\medspace+ p_x \space q_w \space \mathbf{i} - p_x \space q_x                                     + p_x \space q_y \space \mathbf{k}                   - p_x \space q_z \space \mathbf{j}                   \\
&\medspace+ p_y \space q_w \space \mathbf{j} - p_y \space q_x \space \mathbf{k}                   - p_y \space q_y                                     + p_y \space q_z \space \mathbf{i}                   \\
&\medspace+ p_z \space q_w \space \mathbf{k} + p_z \space q_x \space \mathbf{j}                   - p_z \space q_y \space \mathbf{i}                   - p_z \space q_z                                     \\
\\
&=          p_w \space q_w                   - p_x \space q_x                                     - p_y \space q_y                                     - p_z \space q_z                                     \\
&\medspace+ p_w \space q_x \space \mathbf{i} + p_x \space q_w \space \mathbf{i}                   + p_y \space q_z \space \mathbf{i}                   - p_z \space q_y \space \mathbf{i}                   \\
&\medspace+ p_w \space q_y \space \mathbf{j} - p_x \space q_z \space \mathbf{j}                   + p_y \space q_w \space \mathbf{j}                   + p_z \space q_x \space \mathbf{j}                   \\
&\medspace+ p_w \space q_z \space \mathbf{k} + p_x \space q_y \space \mathbf{k}                   - p_y \space q_x \space \mathbf{k}                   + p_z \space q_w \space \mathbf{k}                   \\
\\
&=          (p_w \space q_w                  - p_x \space q_x                                     - p_y \space q_y                                     - p_z \space q_z                 )                   \\
&\medspace+ (p_w \space q_x                  + p_x \space q_w                                     + p_y \space q_z                                     - p_z \space q_y                 ) \space \mathbf{i} \\
&\medspace+ (p_w \space q_y                  - p_x \space q_z                                     + p_y \space q_w                                     + p_z \space q_x                 ) \space \mathbf{j} \\
&\medspace+ (p_w \space q_z                  + p_x \space q_y                                     - p_y \space q_x                                     + p_z \space q_w                 ) \space \mathbf{k} \\
\end{aligned}
$$
:::

#### Grassman-product

Het grassman-product is het resultaat van de vermenigvuldiging van twee quaternionvectoren.

> $$
> \begin{aligned}
> \vec{p} \space \vec{q} &= \langle p_s, \vec{p}_v \rangle \space \langle q_s, \vec{q}_v \rangle
> \\\\
> &= \langle p_s \space q_s - \vec{p}_v \cdot \vec{q}_v, p_s \space \vec{q}_v + q_s \space \vec{p}_v + \vec{p}_v \times \vec{q}_v \rangle
> \\\\
> &\begin{cases}
> (p \space q)_s = p_s \space q_s - \vec{p}_v \cdot \vec{q}_v \\
> (p \space q)_v = p_s \space \vec{q}_v + q_s \space \vec{p}_v + \vec{p}_v \times \vec{q}_v
> \end{cases}
> \\\\
> &\begin{cases}
> (p \space q)_{s_w} = p_w \space q_w - p_x \space q_x - p_y \space q_y - p_z \space q_z \\
> (p \space q)_{v_x} = p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y \\
> (p \space q)_{v_y} = p_w \space q_y - p_x \space q_z + p_y \space q_w + p_z \space q_x \\
> (p \space q)_{v_z} = p_w \space q_z + p_x \space q_y - p_y \space q_x + p_z \space q_w \\
> \end{cases}
> \end{aligned}
> $$

::: details Bewijs
$$
\begin{aligned}
&\begin{cases}
p_s &= p_w \\
\vec{p}_v &= \langle p_x, p_y, p_z \rangle \\
q_s &= q_w \\
\vec{q}_v &= \langle q_x, q_y, q_z \rangle \\
\end{cases}
\\\\
&\begin{cases}
p_s \space q_s &= p_w \space q_w
\\
\vec{p}_v \cdot \vec{q}_v   &= p_x \space q_x + p_y \space q_y + p_z \space q_z
\\
p_s \space \vec{q}_v        &= \langle
                                p_w \space q_x ,
                                p_w \space q_y ,
                                p_w \space q_z
                            \rangle
\\
q_s \space \vec{p}_v        &= \langle
                                q_w \space p_x ,
                                q_w \space p_y ,
                                q_w \space p_z
                            \rangle \\
                            &= \langle
                                p_x \space q_w ,
                                p_y \space q_w ,
                                p_z \space q_w
                            \rangle
\\
\vec{p}_v \times \vec{q}_v  &= \langle
                                p_y \space q_z - p_z \space q_y ,
                                p_z \space q_x - p_x \space q_z ,
                                p_x \space q_y - p_y \space q_x
                            \rangle \\
                            &= \langle
                                p_y \space q_z - p_z \space q_y ,
                              - p_x \space q_z + p_z \space q_x ,
                                p_x \space q_y - p_y \space q_x
                            \rangle
\end{cases}
\\\\
&\begin{cases}
(p \space q)_s  &= p_s \space q_s - \vec{p}_v \cdot \vec{q}_v \\
                &= p_w \space q_w - (p_x \space q_x + p_y \space q_y + p_z \space q_z) \\
                &= p_w \space q_w - p_x \space q_x - p_y \space q_y - p_z \space q_z \\
(p \space q)_v  &= p_s \space \vec{q}_v + q_s \space \vec{p}_v + \vec{p}_v \times \vec{q}_v \\
                &= \langle
                    p_w \space q_x ,
                    p_w \space q_y ,
                    p_w \space q_z
                \rangle \\
                & \medspace + \langle
                    p_x \space q_w ,
                    p_y \space q_w ,
                    p_z \space q_w
                \rangle \\
                & \medspace + \langle
                    p_y \space q_z - p_z \space q_y ,
                  - p_x \space q_z + p_z \space q_x ,
                    p_x \space q_y - p_y \space q_x
                \rangle \\
                &= \langle
                    p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y ,
                    p_w \space q_y + p_y \space q_w - p_x \space q_z + p_z \space q_x ,
                    p_w \space q_z + p_z \space q_w + p_x \space q_y - p_y \space q_x
                \rangle \\
                &= \langle
                    p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y ,
                    p_w \space q_y - p_x \space q_z + p_y \space q_w + p_z \space q_x ,
                    p_w \space q_z + p_x \space q_y - p_y \space q_x + p_z \space q_w
                \rangle \\
\end{cases}
\\\\
&\begin{cases}
(p \space q)_{s_w} &= p_w \space q_w - p_x \space q_x - p_y \space q_y - p_z \space q_z \\
(p \space q)_{v_x} &= p_w \space q_x + p_x \space q_w + p_y \space q_z - p_z \space q_y \\
(p \space q)_{v_y} &= p_w \space q_y - p_x \space q_z + p_y \space q_w + p_z \space q_x \\
(p \space q)_{v_z} &= p_w \space q_z + p_x \space q_y - p_y \space q_x + p_z \space q_w \\
\end{cases}
\end{aligned}
$$
:::

## Rotatie

De rotatie van een hoek $\theta$ rond een hoekvector $\vec{n}$ kan uitgedrukt worden door een normquaternion.

> $$
> \begin{aligned}
> R(\theta, n) = \langle \cos\frac{\theta}{2} , \sin\frac{\theta}{2} \space \vec{n}_v \rangle
> \\\\
> \lbrace \enspace n \in \mathbb{H} \enspace \vert \enspace \lVert n \rVert = 1 \enspace \rbrace
> \end{aligned}
> $$

### Omzetting

#### Eulerhoeken naar Quaternion

> $$
> \begin{aligned}
> r_w = \cos \alpha
> \end{aligned}
> $$
x-as | \gamma
y-as | \beta



    c1 = cos(heading / 2) = \cos \beta / 2
    c2 = cos(attitude / 2) = \cos \gamma /2
    c3 = cos(bank / 2) = \cos alpha / 2
    s1 = sin(heading / 2) = \sin \beta /2
    s2 = sin(attitude / 2) = \sin \gamma /3
    s3 = sin(bank / 2) = \sin \alpha /3


#### Quaternion naar Eulerhoeken


### Rotatie rond de x-as

De rotatie rond de x-as is een rotatie rond de normquaternion $x$

> $$
> \begin{aligned}
> x &= 0 + 1 \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k} \\
>   &= \mathbf{i} \\
> \\
> x_v &= 1 \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k} \\
>     &= \mathbf{i} \\
> \\
> \vec{x}_v &= \langle 1,0,0 \rangle \\
> \\
> R_x(\gamma, x) &= \langle \cos\frac{\gamma}{2} , \sin\frac{\gamma}{2} \space \vec{x}_v \rangle \\
> &= \langle \cos\frac{\gamma}{2} , \sin\frac{\gamma}{2} , 0 , 0 \rangle \\
> &= \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k} \\
> &= \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} \\
> \\
> &\lbrace \enspace
>   x \in \mathbb{H}
>   \enspace \vert \enspace
>   \lVert x \rVert = 1
> \enspace \rbrace
> \end{aligned}
> $$

### Rotatie rond de y-as

> $$
> \begin{aligned}
> y &= 0 + 0 \space \mathbf{i} + 1 \space \mathbf{j} + 0 \space \mathbf{k} \\
>   &= \mathbf{j} \\
> \\
> y_v &= 0 \space \mathbf{i} + 1 \space \mathbf{j} + 0 \space \mathbf{k} \\
>     &= \mathbf{j} \\
> \\
> \vec{y}_v &= \langle 0,1,0 \rangle \\
> \\
> R_y(\beta, y) &= \langle \cos\frac{\beta}{2} , \sin\frac{\beta}{2} \space \vec{y}_v \rangle \\
> &= \cos\frac{\beta}{2} + 0 \space \mathbf{i} + \sin\frac{\beta}{2} \space \mathbf{j}  + 0 \space \mathbf{k} \\
> &= \cos\frac{\beta}{2} + \sin\frac{\beta}{2} \space \mathbf{j} \\
> \\
> &\lbrace \enspace
>   y \in \mathbb{H}
>   \enspace \vert \enspace
>   \lVert y \rVert = 1
> \enspace \rbrace
> \end{aligned}
> $$

### Rotatie rond de z-as

> $$
> \begin{aligned}
> z &= 0 + 0 \space \mathbf{i} + 0 \space \mathbf{j} + 1 \space \mathbf{k} \\
>   &= \mathbf{k} \\
> \\
> z_v &= 0 \space \mathbf{i} + 0 \space \mathbf{j} + 1 \space \mathbf{k} \\
>     &= \mathbf{k} \\
> \\
> \vec{z}_v &= \langle 0,0,1 \rangle \\
> \\
> R_z(\alpha, z) &= \langle \cos\frac{\alpha}{2} , \sin\frac{\alpha}{2} \space \vec{z}_v \rangle \\
> &= \cos\frac{\alpha}{2} + 0 \space \mathbf{i} + 0 \space \mathbf{j} + \sin\frac{\alpha}{2} \space \mathbf{k} \\
> &= \cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k} \\
> \\
> &\lbrace \enspace
>   z \in \mathbb{H}
>   \enspace \vert \enspace
>   \lVert z \rVert = 1
> \enspace \rbrace
> \end{aligned}
> $$


> $$
> \begin{aligned}
> R_x &= \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} \\
> R_y &= \cos\frac{\beta}{2} + \sin\frac{\beta}{2} \space \mathbf{j} \\
> R_z &= \cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}
> \\\\
> R &= R_z(\alpha) \space R_y(\beta) \space R_x(\gamma)
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space (\cos\frac{\beta}{2} + \sin\frac{\beta}{2} \space \mathbf{j}) \space (\cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i})
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    \cos\frac{\beta}{2} \space (\cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i})
>  + \sin\frac{\beta}{2} \space \mathbf{j} \space (\cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i})
> )
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    (\cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i})
>  + (\sin\frac{\beta}{2} \space \mathbf{j} \space \cos\frac{\gamma}{2} + \sin\frac{\beta}{2} \space \mathbf{j} \space \sin\frac{\gamma}{2} \space \mathbf{i})
> )
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    (\cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i})
>  + (\sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} + \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{j} \space \mathbf{i})
> )
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    (\cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i})
>  + (\sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} + \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space (-\mathbf{k}))
> )
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    (\cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i})
>  + (\sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k})
> )
> \\\\
> &= (\cos\frac{\alpha}{2} + \sin\frac{\alpha}{2} \space \mathbf{k}) \space 
> (
>    \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> )
> \\\\
> &= \cos\frac{\alpha}{2} \space (
>    \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> ) \\ &+ 
>    \sin\frac{\alpha}{2} \space \mathbf{k} \space (
>    \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> )
> \\\\
> &= (
>    \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> ) \\
> &+ (
>    \sin\frac{\alpha}{2} \space \mathbf{k} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \sin\frac{\alpha}{2} \space \mathbf{k} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \sin\frac{\alpha}{2} \space \mathbf{k} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \sin\frac{\alpha}{2} \space \mathbf{k} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> )
> \\\\
> &= (
>    \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> ) \\
> &+ (
>    \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{k} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k} \space \mathbf{i}
>  + \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{k} \space \mathbf{j} - \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k} \space \mathbf{k}
> )
> \\\\
> &= (
>    \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> ) \\
> &+ (
>    \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{k} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space (\mathbf{j})
>  + \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space (-\mathbf{i}) - \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space (-1)
> )
> \\\\
> &= (
>    \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i}
>  + \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} - \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k}
> ) \\
> &+ (
>    \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{k} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{j}
>  - \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{i} + \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2}
> )
> \\\\
> &= \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \\
> &+ \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{i} - \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{i} \\
> &+ \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{j} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{j} \\
> &- \cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \space \mathbf{k} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \space \mathbf{k}
> \\\\
> &= \cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} \\
> &+ (\cos\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} - \sin\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2}) \space \mathbf{i} \\
> &+ (\cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \cos\frac{\gamma}{2} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \sin\frac{\gamma}{2} ) \space \mathbf{j} \\
> &+ (-\cos\frac{\alpha}{2} \space \sin\frac{\beta}{2} \space \sin\frac{\gamma}{2} + \sin\frac{\alpha}{2} \space \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} ) \space \mathbf{k}
> \end{aligned}
>$$

### Conjugatieve rotatie

> $$
> \begin{gathered}
> q^\prime = R \space q
> \\\\
> p \space q \space \bar{p}
> \end{gathered}
> $$



> $$
> \begin{aligned}
> R &= R_z(\alpha) \space R_y(\beta) \space R_x(\gamma)
> \\\\
> &= \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\beta}{2} \\
>                    0  \\
>   \sin\frac{\beta}{2} \\
>                    0  \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\gamma}{2} \\
>   \sin\frac{\gamma}{2} \\
>                     0  \\
>                     0  \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \\
>                    0  \space \sin\frac{\gamma}{2} \\
>   \sin\frac{\beta}{2} \space                   0  \\
>                    0  \space                   0  \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\beta}{2} \space \cos\frac{\gamma}{2} \\
>                                                0  \\
>                                                0  \\
>                                                0  \\
> \end{bmatrix}
> \end{aligned}
> $$

> $$
> \begin{aligned}
> \boldsymbol{q} &= \begin{bmatrix}
>  q_w \\
>  q_x \\
>  q_y \\
>  q_z \\
> \end{bmatrix}
> \\\\
> \boldsymbol{q}^{\prime} &= R_z(\alpha) \space R_y(\beta) \space R_x(\gamma) \space \boldsymbol{q}
> \\\\
> \boldsymbol{q}^{\prime} &= \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\beta}{2} \\
>                    0  \\
>   \sin\frac{\beta}{2} \\
>                    0  \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\gamma}{2} \\
>   \sin\frac{\gamma}{2} \\
>                     0  \\
>                     0  \\
> \end{bmatrix} \space \begin{bmatrix}
>   q_w \\
>   q_x \\
>   q_y \\
>   q_z \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\beta}{2} \\
>                    0  \\
>   \sin\frac{\beta}{2} \\
>                    0  \\
> \end{bmatrix} = \begin{bmatrix}
>   \cos\frac{\alpha}{2} \\
>                     0  \\
>                     0  \\
>   \sin\frac{\alpha}{2} \\
> \end{bmatrix} \space \begin{bmatrix}
>   \cos\frac{\gamma}{2} \\
>   \sin\frac{\gamma}{2} \\
>                     0  \\
>                     0  \\
>   q_w \\
>   q_x \\
>   q_y \\
>   q_z \\
> \end{bmatrix}
> \end{aligned}
> $$


https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
https://www.youtube.com/watch?v=mHVwd8gYLnI

<!--
******* Needs checking. *******
### Waarom quaternions

Werken met eulerrotaties is moeilijk en de volgorde is van belang. Het is zelfs mogelijk dat er **gimbal lock** *(Ned. cardanische ophangingsvergrendeling)* ontstaat.

Q_p1 beschrijft een positie.
Q_r beschrijft een rotatie.
Q_p2

Om de nieuwe positie te \mathbf{k}ennen na rotatie \mathbf{k}unnen we beide vermenigvuldigen.

Q_p2 = Q_p1 x Q_r

http://www.chrobotics.com/library/understanding-euler-angles
http://www.chrobotics.com/library/understanding-quaternions

http://www.tob \space v_ynorris.com/work/prog/csharp/quatview/help/orientations_and_quaternions.htm

http://danceswithcode.net/engineeringnotes/quaternions/quaternions.html
http://danceswithcode.net/engineeringnotes/rotations_in_3d/rotations_in_3d_part1.html
http://danceswithcode.net/engineeringnotes/quaternions/conversion_tool.html

https://www.3dgep.com/understanding-quaternions/ 
https://cgcookie.com/articles/what-are-quaternion-rotations-in-blender
https://www.euclideanspace.com/maths/algebra/realNormedAlgebra/index.htm
https://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/geometric/orthogonal/index.htm
https://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

http://www.pbr-book.org/3ed-2018/Geometry_and_Transformations/Animating_Transformations.html

-->

Een quaternion is een 4-tuple.

<!-- http://danceswithcode.net/engineeringnotes/quaternions/quaternions.html -->


Een genormaliseerde quaternion heeft deze eigenschappen:

> $$
> \begin{aligned}
> \begin{cases}
> q_w = \cos\frac{\theta}{2}
> \\
> q_x = \sin\frac{\theta}{2} \space a_x
> \\
> q_y = \sin\frac{\theta}{2} \space a_y
> \\
> q_z = \sin\frac{\theta}{2} \space a_z
> \end{cases}
> \end{aligned}
> $$

## Rotatie in 3D

Rotatie $\theta$ rond een bepaalde vector $\vec{u}$ (normvector $\hat{u}$ bepaalt de rotatieas) van quaternion $q$.
> $$
> \begin{aligned}
> q &= q_s + \vec{q}_v
> \\\\
> R(\theta, \vec{u}) &= \cos\frac{\theta}{2} \space + \sin \frac{\theta}{2} \space \hat{u}
> \end{aligned}
> $$


> $$
> \begin{aligned}
> \hat{a} &= \langle{\frac{a_x}{\lVert\vec{a}\rVert}, \frac{a_y}{\lVert\vec{a}\rVert}, \frac{a_z}{\lVert\vec{a}\rVert}}\rangle
> \\\\\\
> q_s &= \cos(\frac{\theta}{2})
> \\\\
> q_v &= \sin(\frac{\theta}{2}) \space \hat{a}
> \\\\
> q_v &= \sin(\frac{\theta}{2}) \space \langle{\frac{a_x}{\lVert\vec{a}\rVert}, \frac{a_y}{\lVert\vec{a}\rVert}, \frac{a_z}{\lVert\vec{a}\rVert}}\rangle
> \\\\
> q_v &= \langle{\sin(\frac{\theta}{2}) \space \frac{a_x}{\lVert\vec{a}\rVert}, \sin(\frac{\theta}{2}) \space \frac{a_y}{\lVert\vec{a}\rVert}, \sin(\frac{\theta}{2}) \space \frac{a_z}{\lVert\vec{a}\rVert}}\rangle
> \\\\\\
> q &= q_s + q_v
> \\\\
> q &= \cos(\frac{\theta}{2}) + \langle{\sin(\frac{\theta}{2}) \space \frac{a_x}{\lVert\vec{a}\rVert}, \sin(\frac{\theta}{2}) \space \frac{a_y}{\lVert\vec{a}\rVert}, \sin(\frac{\theta}{2}) \space \frac{a_z}{\lVert\vec{a}\rVert}}\rangle
> \end{aligned}
> $$

## Quaternion in Blender

|   $\gamma_x$ |     $\beta_y$ |   $\alpha_z$ |     $q_w$ |     $q_x$ |     $q_y$ |     $q_z$ | $q = q_w + q_x \space \mathbf{i} + q_y \space \mathbf{j} + q_z \space \mathbf{k}$                               |
|-------------:|--------------:|-------------:|----------:|----------:|----------:|----------:|:----------------------------------------------------------------------------------------------------------------|
|   $0\degree$ |    $0\degree$ |   $0\degree$ | $1{,}000$ | $0{,}000$ | $0{,}000$ | $0{,}000$ | $q = \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}$ |
|  $90\degree$ |    $0\degree$ |   $0\degree$ | $0{,}707$ | $0{,}707$ | $0{,}000$ | $0{,}000$ | $q = \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}$ |
| $180\degree$ |    $0\degree$ |   $0\degree$ | $0{,}000$ | $1{,}000$ | $0{,}000$ | $0{,}000$ | $q = \cos\frac{\gamma}{2} + \sin\frac{\gamma}{2} \space \mathbf{i} + 0 \space \mathbf{j} + 0 \space \mathbf{k}$ |
|   $0\degree$ | $-180\degree$ |   $0\degree$ | $0{,}000$ | $0{,}000$ | $1{,}000$ | $0{,}000$ | $q = \cos\frac{\beta}{2} + 0 \space \mathbf{i} - \sin\frac{\beta}{2} \space \mathbf{j} + 0 \space \mathbf{k}$   |
|   $0\degree$ |    $0\degree$ | $180\degree$ | $0{,}000$ | $0{,}000$ | $0{,}000$ | $1{,}000$ | $q = \cos\frac{\alpha}{2} + 0 \space \mathbf{i} + 0 \space \mathbf{j} + \sin\frac{\alpha}{2} \space \mathbf{k}$ |
