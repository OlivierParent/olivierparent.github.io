---
title: Matrices
---

*[2D]: tweedimensionale ruimte
*[3D]: driedimensionale ruimte
*[Eng.]: Engels/English
*[Ned.]: Nederlands
*[mv.]: meervoud
*[pl.]: plural

Een **matrix** *(mv. matrices, Eng. matrix, pl. matrices)* bestaat uit matrixelementen, of kortweg **elementen** *(Eng. elements)* die in **rijen** *(Eng. rows)* en **kolommen** *(Eng. columns)* staan.

Een matrix wordt onder andere gebruikt om bewerkingen op vectoren uit te voeren. De matrix is dan een **transformatiematrix** in de vorm van een **vierkante matrix** ($n \times n$) en de **vector** wordt voorgesteld als een **kolommatrix** ($n \times 1$).

Een berekende transformatiematrix kan je op verschillende vectoren toepassen, en de onderlinge verhouding tussen de vectoren blijft bestaan. Zo kan je een figuur of object transformeren.

> $$
> \begin{aligned}
> M \space \boldsymbol{v} &= \begin{bmatrix}
>    m_{1,1} & m_{1,2} & m_{1,3} \\
>    m_{2,1} & m_{2,2} & m_{2,3} \\
>    m_{3,1} & m_{3,2} & m_{3,3} \\
> \end{bmatrix} \begin{bmatrix}
>    v_x \\
>    v_y \\
>    v_z
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    m_{1,1} \space v_x + m_{1,2} \space v_y + m_{1,3} \space v_z \\
>    m_{2,1} \space v_x + m_{2,2} \space v_y + m_{2,3} \space v_z \\
>    m_{3,1} \space v_x + m_{3,2} \space v_y + m_{3,3} \space v_z \\
> \end{bmatrix}
> \end{aligned}
> $$

## Definities

::: icon-definition  
De **orde** *(Eng. order)* van een matrix ($m \times n$) geeft aan ==hoeveel== rijen ($m$) en kolommen ($n$) de matrix heeft.

$$X_{m \times n}$$
:::

> $$
> \begin{gathered}
> X_{m\times{n}}
> \\\\
> m, n \in \lbrace1,2,3,4\rbrace
> \end{gathered}
> $$

::: icon-definition  
De **rang** *(Eng. rank)* van een matrix ($n$) geeft aan ==hoeveel onafhankelijke== rijen of kolommen de matrix heeft.

$$X_n$$
:::

> $$
> \begin{gathered}
> X_{n}
> \\\\
> n \in \lbrace1,2,3,4\rbrace
> \end{gathered}
> $$

In computergrafiek is dit het aantal dimensies van de ruimte al dan niet aangevuld met een extra dimensie (die geen ruimtelijke dimensie is). Bijvoorbeeld een matrix met orde ${3 \times 1}$ of ${3 \times 3}$ heeft rang 3.

Voor computergrafiek worden meestal vierkante matrices (${n\times n}$) en kolommatrices (${n} \times 1$) gebruikt en  geldt dat .

|     Orde     | Rang |     Voorbeeld      | Betekenis              |
|:------------:|:----:|:------------------:|:-----------------------|
| $1 \times 3$ | $3$  | $\boldsymbol{v_3}$ | vector als rijmatrix   |
| $1 \times 4$ | $4$  | $\boldsymbol{v_4}$ | vector als rijmatrix   |
| $2 \times 2$ | $2$  |       $M_2$        | transformatiematrix    |
| $3 \times 1$ | $3$  | $\boldsymbol{v_3}$ | vector als kolommatrix |
| $3 \times 3$ | $3$  |       $M_3$        | transformatiematrix    |
| $4 \times 1$ | $4$  | $\boldsymbol{v_4}$ | vector als kolommatrix |
| $4 \times 4$ | $4$  |       $M_4$        | transformatiematrix    |

> $$
> \begin{aligned}
> X_2 &= \begin{bmatrix}
>    x_{1,1} & x_{1,2} \\
>    x_{2,1} & x_{2,2}
> \end{bmatrix}
> \\\\
> X_3 &= \begin{bmatrix}
>    x_{1,1} & x_{1,2} & x_{1,3} \\
>    x_{2,1} & x_{2,2} & x_{2,3} \\
>    x_{3,1} & x_{3,2} & x_{3,3}
> \end{bmatrix}
> \\\\
> X_4 &= \begin{bmatrix}
>    x_{1,1} & x_{1,2} & x_{1,3} & x_{1,4} \\
>    x_{2,1} & x_{2,2} & x_{2,3} & x_{2,4} \\
>    x_{3,1} & x_{3,2} & x_{3,3} & x_{3,4} \\
>    x_{4,1} & x_{4,2} & x_{4,3} & x_{4,4}
> \end{bmatrix}
> \end{aligned}
> $$

## Bewerkingen

### Optelling

De **som** *(Eng. sum)*  van twee matrices bekom je door de **optelling** *(Eng. addition)* van de overeenkomstige elementen.

> $$
> \begin{aligned}
> C &= A + B
> \\\\
> \begin{bmatrix}
>    c_{1,1} & c_{1,2} \\
>    c_{2,1} & c_{2,2} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} \\
>    a_{2,1} & a_{2,2} \\
> \end{bmatrix} + \begin{bmatrix}
>    b_{1,1} & b_{1,2} \\
>    b_{2,1} & b_{2,2} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} + b_{1,1} & a_{1,2} + b_{1,2} \\
>    a_{2,1} + b_{2,1} & a_{2,2} + b_{2,2} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1,1} = a_{1,1} + b_{1,1} \\
> c_{1,2} = a_{1,2} + b_{1,2} \\
> c_{2,1} = a_{2,1} + b_{2,1} \\
> c_{2,2} = a_{2,2} + b_{2,2} \\
> \end{cases}
> \end{aligned}
> $$

#### Eigenschappen

| Eigenschap  |         Voorbeeld          |
|:------------|:--------------------------:|
| Commutatief |      $A + B = B + A$       |
| Associatief | $A + (B + C) = (A + B) +C$ |

### Aftrekking

Het **verschil** *(Eng. difference)* van twee matrices bekom je door de **aftrekking** *(Eng. subtraction)* elk element van de tweede matrix en het overeenkomstig element van de eerste matrix.

> $$
> \begin{aligned}
> C &= A - B
> \\\\
> \begin{bmatrix}
>    c_{1,1} & c_{1,2} \\
>    c_{2,1} & c_{2,2} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} \\
>    a_{2,1} & a_{2,2} \\
> \end{bmatrix} - \begin{bmatrix}
>    b_{1,1} & b_{1,2} \\
>    b_{2,1} & b_{2,2} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} - b_{1,1} & a_{1,2} - b_{1,2} \\
>    a_{2,1} - b_{2,1} & a_{2,2} - b_{2,2} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1,1} = a_{1,1} - b_{1,1} \\
> c_{1,2} = a_{1,2} - b_{1,2} \\
> c_{2,1} = a_{2,1} - b_{2,1} \\
> c_{2,2} = a_{2,2} - b_{2,2} \\
> \end{cases}
> \end{aligned}
> $$

| Eigenschap           |     Voorbeeld      |
|:---------------------|:------------------:|
| **Niet-commutatief** | $A - B \neq B - A$ |

### Vermenigvuldiging

Het **product** *(Eng. product)* van twee matrices bekom je door de **vermenigvuldiging** *(Eng. multiplication)* van de rijen van de eerste matrix met de kolommen van de tweede matrix. Het getal op de plaats waar de rij en kolom kruisen is de som van de getallen waarvan de rijindex en kolomindex gelijk zijn.

#### Algemene formule

De algemene formule voor een **matrixelement** dat het resultaat is van een vermenigvuldiging van twee $n \times n$-matrices:

> $$c_{i,j} = \displaystyle\sum_{k=1}^n a_{i,k} \space b_{k,j}$$

#### Eigenschappen

| Eigenschap           |                    Voorbeeld                    |
|:---------------------|:-----------------------------------------------:|
| **Niet-commutatief** |          $A \space B \neq B \space A$           |
| **Associatief**      | $A \space (B \space C) = (A \space B) \space C$ |

#### Tweedimensionale matrices

##### Matrices van orde $2 \times 2$

> $$
> \begin{aligned}
> C_2 &= A_2 \space B_2
> \\\\
> \begin{bmatrix}
>    c_{1,1} & c_{1,2} \\
>    c_{2,1} & c_{2,2} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} \\
>    a_{2,1} & a_{2,2} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1,1} & b_{1,2} \\
>    b_{2,1} & b_{2,2} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} \space b_{1,1} + a_{1,2} \space b_{2,1} & a_{1,1} \space b_{1,2} + a_{1,2} \space b_{2,2} \\
>    a_{2,1} \space b_{1,1} + a_{2,2} \space b_{2,1} & a_{2,1} \space b_{1,2} + a_{2,2} \space b_{2,2} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1,1} = a_{1,1} \space b_{1,1} + a_{1,2} \space b_{2,1} \\
> c_{1,2} = a_{1,1} \space b_{1,2} + a_{1,2} \space b_{2,2} \\
> c_{2,1} = a_{2,1} \space b_{1,1} + a_{2,2} \space b_{2,1} \\
> c_{2,2} = a_{2,1} \space b_{1,2} + a_{2,2} \space b_{2,2} \\
> \end{cases}
> \end{aligned}
> $$

::: details Toepassing 1
$$
\begin{aligned}
\begin{bmatrix}
   17 & 22 \\
   43 & 46 \\
\end{bmatrix} &= \begin{bmatrix}
   1 & 2 \\
   3 & 4 \\
\end{bmatrix} \space \begin{bmatrix}
   5 & 6 \\
   7 & 8 \\
\end{bmatrix}
\\\\
&\begin{cases}
c_{1,1} &= 1 \cdot 5 + 2 \cdot 7 = 17 \\
c_{1,2} &= 1 \cdot 6 + 2 \cdot 8 = 22 \\
c_{2,1} &= 3 \cdot 5 + 4 \cdot 7 = 43 \\
c_{2,2} &= 3 \cdot 6 + 4 \cdot 8 = 46 \\
\end{cases}
\end{aligned}
$$
:::

::: details Toepassing 2
$$
\begin{aligned}
\begin{bmatrix}
   17 & 0 \\
   43 & 0 \\
\end{bmatrix} &= \begin{bmatrix}
   1 & 2 \\
   3 & 4 \\
\end{bmatrix} \space \begin{bmatrix}
   5 & 0 \\
   7 & 0 \\
\end{bmatrix}
\\\\
&\begin{cases}
c_{1,1} = 1 \cdot 5 + 2 \cdot 7 = 17 \\
c_{1,2} = 1 \cdot 0 + 2 \cdot 0 =  0 \\
c_{2,1} = 3 \cdot 5 + 4 \cdot 7 = 43 \\
c_{2,2} = 3 \cdot 0 + 4 \cdot 0 =  0 \\
\end{cases}
\end{aligned}
$$
:::

##### Matrices van rang $2$

> $$
> \begin{aligned}
> C_2 &= A_2 \space B_2
> \\\\
> \begin{bmatrix}
>    c_{1} \\
>    c_{2} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} \\
>    a_{2,1} & a_{2,2} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1} \\
>    b_{2} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} \space b_{1} + a_{1,2} \space b_{2} \\
>    a_{2,1} \space b_{1} + a_{2,2} \space b_{2} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1} = a_{1,1} \space b_{1} + a_{1,2} \space b_{2} \\
> c_{2} = a_{2,1} \space b_{1} + a_{2,2} \space b_{2} \\
> \end{cases}
> \end{aligned}
> $$

#### Driedimensionale matrices

##### Matrices van orde $3 \times 3$

> $$
> \begin{aligned}
> C_3 &= A_3 \space B_3
> \\\\
> \begin{bmatrix}
>    c_{1,1} & c_{1,2} & c_{1,3} \\
>    c_{2,1} & c_{2,2} & c_{2,3} \\
>    c_{3,1} & c_{3,2} & c_{3,3} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} \\
>    a_{2,1} & a_{2,2} & a_{2,3} \\
>    a_{3,1} & a_{3,2} & a_{3,3} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1,1} & b_{1,2} & b_{1,3} \\
>    b_{2,1} & b_{2,2} & b_{2,3} \\
>    b_{3,1} & b_{3,2} & b_{3,3} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1,1} = a_{1,1} \space b_{1,1} + a_{1,2} \space b_{2,1} + a_{1,3} \space b_{3,1} \\
> c_{1,2} = a_{1,1} \space b_{1,2} + a_{1,2} \space b_{2,2} + a_{1,3} \space b_{3,2} \\
> c_{1,3} = a_{1,1} \space b_{1,3} + a_{1,2} \space b_{2,3} + a_{1,3} \space b_{3,3} \\
> c_{2,1} = a_{2,1} \space b_{1,1} + a_{2,2} \space b_{2,1} + a_{2,3} \space b_{3,1} \\
> c_{2,2} = a_{2,1} \space b_{1,2} + a_{2,2} \space b_{2,2} + a_{2,3} \space b_{3,2} \\
> c_{2,3} = a_{2,1} \space b_{1,3} + a_{2,2} \space b_{2,3} + a_{2,3} \space b_{3,3} \\
> c_{3,1} = a_{3,1} \space b_{1,1} + a_{3,2} \space b_{2,1} + a_{3,3} \space b_{3,1} \\
> c_{3,2} = a_{3,1} \space b_{1,2} + a_{3,2} \space b_{2,2} + a_{3,3} \space b_{3,2} \\
> c_{3,3} = a_{3,1} \space b_{1,3} + a_{3,2} \space b_{2,3} + a_{3,3} \space b_{3,3} \\
> \end{cases}
> \end{aligned}
> $$

##### Matrices van rang $3$

> $$
> \begin{aligned}
> C_3 &= A_3 \space B_3
> \\\\
> \begin{bmatrix}
>    c_{1} \\
>    c_{2} \\
>    c_{3} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} \\
>    a_{2,1} & a_{2,2} & a_{2,3} \\
>    a_{3,1} & a_{3,2} & a_{3,3} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1} \\
>    b_{2} \\
>    b_{3} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} \space b_{1} + a_{1,2} \space b_{2} + a_{1,3} \space b_{3} \\
>    a_{2,1} \space b_{1} + a_{2,2} \space b_{2} + a_{2,3} \space b_{3} \\
>    a_{3,1} \space b_{1} + a_{3,2} \space b_{2} + a_{3,3} \space b_{3} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1} = a_{1,1} \space b_{1} + a_{1,2} \space b_{2} + a_{1,3} \space b_{3} \\
> c_{2} = a_{2,1} \space b_{1} + a_{2,2} \space b_{2} + a_{2,3} \space b_{3} \\
> c_{3} = a_{3,1} \space b_{1} + a_{3,2} \space b_{2} + a_{3,3} \space b_{3} \\
> \end{cases}
> \end{aligned}
> $$

#### Vierdimensionale matrices

##### Matrices van orde $4 \times 4$

> $$
> \begin{aligned}
> C_4 &= A_4 \space B_4
> \\\\
> \begin{bmatrix}
>    c_{1,1} & c_{1,2} & c_{1,3} & c_{1,4} \\
>    c_{2,1} & c_{2,2} & c_{2,3} & c_{2,4} \\
>    c_{3,1} & c_{3,2} & c_{3,3} & c_{3,4} \\
>    c_{4,1} & c_{4,2} & c_{4,3} & c_{4,4} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} & a_{1,4} \\
>    a_{2,1} & a_{2,2} & a_{2,3} & a_{2,4} \\
>    a_{3,1} & a_{3,2} & a_{3,3} & a_{3,4} \\
>    a_{4,1} & a_{4,2} & a_{4,3} & a_{4,4} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1,1} & b_{1,2} & b_{1,3} & b_{1,4} \\
>    b_{2,1} & b_{2,2} & b_{2,3} & b_{2,4} \\
>    b_{3,1} & b_{3,2} & b_{3,3} & b_{3,4} \\
>    b_{4,1} & b_{4,2} & b_{4,3} & b_{4,4} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1,1} = a_{1,1} \space b_{1,1} + a_{1,2} \space b_{2,1} + a_{1,3} \space b_{3,1} + a_{1,4} \space b_{4,1} \\
> c_{1,2} = a_{1,1} \space b_{1,2} + a_{1,2} \space b_{2,2} + a_{1,3} \space b_{3,2} + a_{1,4} \space b_{4,2} \\
> c_{1,3} = a_{1,1} \space b_{1,3} + a_{1,2} \space b_{2,3} + a_{1,3} \space b_{3,3} + a_{1,4} \space b_{4,3} \\
> c_{1,4} = a_{1,1} \space b_{1,4} + a_{1,2} \space b_{2,4} + a_{1,3} \space b_{3,4} + a_{1,4} \space b_{4,4} \\
> c_{2,1} = a_{2,1} \space b_{1,1} + a_{2,2} \space b_{2,1} + a_{2,3} \space b_{3,1} + a_{2,4} \space b_{4,1} \\
> c_{2,2} = a_{2,1} \space b_{1,2} + a_{2,2} \space b_{2,2} + a_{2,3} \space b_{3,2} + a_{2,4} \space b_{4,2} \\
> c_{2,3} = a_{2,1} \space b_{1,3} + a_{2,2} \space b_{2,3} + a_{2,3} \space b_{3,3} + a_{2,4} \space b_{4,3} \\
> c_{2,4} = a_{2,1} \space b_{1,4} + a_{2,2} \space b_{2,4} + a_{2,3} \space b_{3,4} + a_{2,4} \space b_{4,4} \\
> c_{3,1} = a_{3,1} \space b_{1,1} + a_{3,2} \space b_{2,1} + a_{3,3} \space b_{3,1} + a_{3,4} \space b_{4,1} \\
> c_{3,2} = a_{3,1} \space b_{1,2} + a_{3,2} \space b_{2,2} + a_{3,3} \space b_{3,2} + a_{3,4} \space b_{4,2} \\
> c_{3,3} = a_{3,1} \space b_{1,3} + a_{3,2} \space b_{2,3} + a_{3,3} \space b_{3,3} + a_{3,4} \space b_{4,3} \\
> c_{3,4} = a_{3,1} \space b_{1,4} + a_{3,2} \space b_{2,4} + a_{3,3} \space b_{3,4} + a_{3,4} \space b_{4,4} \\
> c_{4,1} = a_{4,1} \space b_{1,1} + a_{4,2} \space b_{2,1} + a_{4,3} \space b_{3,1} + a_{4,4} \space b_{4,1} \\
> c_{4,2} = a_{4,1} \space b_{1,2} + a_{4,2} \space b_{2,2} + a_{4,3} \space b_{3,2} + a_{4,4} \space b_{4,2} \\
> c_{4,3} = a_{4,1} \space b_{1,3} + a_{4,2} \space b_{2,3} + a_{4,3} \space b_{3,3} + a_{4,4} \space b_{4,3} \\
> c_{4,4} = a_{4,1} \space b_{1,4} + a_{4,2} \space b_{2,4} + a_{4,3} \space b_{3,4} + a_{4,4} \space b_{4,4} \\
> \end{cases}
> \end{aligned}
> $$

##### Matrices van rang $4$

> $$
> \begin{aligned}
> C_4 &= A_4 \space B_4
> \\\\
> \begin{bmatrix}
>    c_{1} \\
>    c_{2} \\
>    c_{3} \\
>    c_{4} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} \\
>    a_{2,1} & a_{2,2} & a_{2,3} \\
>    a_{3,1} & a_{3,2} & a_{3,3} \\
>    a_{4,1} & a_{4,2} & a_{4,3} \\
> \end{bmatrix} \space \begin{bmatrix}
>    b_{1} \\
>    b_{2} \\
>    b_{3} \\
>    b_{4} \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    a_{1,1} \space b_{1} + a_{1,2} \space b_{2} + a_{1,3} \space b_{3} + a_{1,4} \space b_{4} \\
>    a_{2,1} \space b_{1} + a_{2,2} \space b_{2} + a_{2,3} \space b_{3} + a_{2,4} \space b_{4} \\
>    a_{3,1} \space b_{1} + a_{3,2} \space b_{2} + a_{3,3} \space b_{3} + a_{3,4} \space b_{4} \\
>    a_{4,1} \space b_{1} + a_{4,2} \space b_{2} + a_{4,3} \space b_{3} + a_{4,4} \space b_{4} \\
> \end{bmatrix}
> \\\\
> &\begin{cases}
> c_{1} = a_{1,1} \space b_{1} + a_{1,2} \space b_{2} + a_{1,3} \space b_{3} + a_{1,4} \space b_{4} \\
> c_{2} = a_{2,1} \space b_{1} + a_{2,2} \space b_{2} + a_{2,3} \space b_{3} + a_{2,4} \space b_{4} \\
> c_{3} = a_{3,1} \space b_{1} + a_{3,2} \space b_{2} + a_{3,3} \space b_{3} + a_{3,4} \space b_{4} \\
> c_{4} = a_{4,1} \space b_{1} + a_{4,2} \space b_{2} + a_{4,3} \space b_{3} + a_{4,4} \space b_{4} \\
> \end{cases}
> \end{aligned}
> $$

## Identiteitsmatrix

> $$I_n$$

> $$
> \begin{aligned}
> I_2 &=\begin{bmatrix}
>    1 & 0 \\
>    0 & 1 \\
> \end{bmatrix}
> \\\\
> I_3 &=\begin{bmatrix}
>    1 & 0 & 0 \\
>    0 & 1 & 0 \\
>    0 & 0 & 1 \\
> \end{bmatrix}
> \\\\
> I_4 &=\begin{bmatrix}
>    1 & 0 & 0 & 0 \\
>    0 & 1 & 0 & 0 \\
>    0 & 0 & 1 & 0 \\
>    0 & 0 & 0 & 1 \\
> \end{bmatrix}
> \end{aligned}
> $$

Vermenigvuldigen met de **identiteitsmatrix** *(Eng. identity matrix)* heeft geen invloed.

> $$
> A \space I = A = I \space A
> $$


## Inverse matrix

We kunnen matrices niet delen, maar wel vermenigvuldigen met een **inverse matrix** *(Eng. inverse matrix).* 

Een matrix vermenigvuldigen met zijn inverse matrix levert de **identiteitsmatrix** op.

> $$A \space A^{-1} = I$$

### Getransponeerde matrix

Een **getransponeerde matrix** *(Eng. transposed matrix)* is een matrix waarbij de rijen naar kolommen omgezet zijn. 

> $$A \rArr A^T$$

Dit is eigenlijk een ==spiegeling over de diagonale as== van linksboven naar rechtsonder.

> $$
> \begin{aligned}
> \begin{bmatrix}
>    a_1 & a_2
> \end{bmatrix} &= \begin{bmatrix}
>    a_1 \\
>    a_2 \\
> \end{bmatrix}^T
> \\\\
> \begin{bmatrix}
>    a_{1,1} & a_{1,2} \\
>    a_{2,1} & a_{2,2} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{2,1} \\
>    a_{1,2} & a_{2,2} \\
> \end{bmatrix}^T
> \\\\
> \begin{bmatrix}
>    a_1 & a_2 & a_3
> \end{bmatrix} &= \begin{bmatrix}
>    a_1 \\
>    a_2 \\
>    a_3 \\
> \end{bmatrix}^T
> \\\\
> \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} \\
>    a_{2,1} & a_{2,2} & a_{2,3} \\
>    a_{3,1} & a_{3,2} & a_{3,3} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{2,1} & a_{3,1} \\
>    a_{1,2} & a_{2,2} & a_{3,2} \\
>    a_{1,3} & a_{2,3} & a_{3,3} \\
> \end{bmatrix}^T
> \\\\
> \begin{bmatrix}
>    a_1 & a_2 & a_3 & a_4
> \end{bmatrix} &= \begin{bmatrix}
>    a_1 \\
>    a_2 \\
>    a_3 \\
>    a_4 \\
> \end{bmatrix}^T
> \\\\
> \begin{bmatrix}
>    a_{1,1} & a_{1,2} & a_{1,3} & a_{1,4} \\
>    a_{2,1} & a_{2,2} & a_{2,3} & a_{2,4} \\
>    a_{3,1} & a_{3,2} & a_{3,3} & a_{3,4} \\
>    a_{4,1} & a_{4,2} & a_{4,3} & a_{4,4} \\
> \end{bmatrix} &= \begin{bmatrix}
>    a_{1,1} & a_{2,1} & a_{3,1} & a_{4,1} \\
>    a_{1,2} & a_{2,2} & a_{3,2} & a_{4,2} \\
>    a_{1,3} & a_{2,3} & a_{3,3} & a_{4,3} \\
>    a_{1,4} & a_{2,4} & a_{3,4} & a_{4,4} \\
> \end{bmatrix}^T
> \end{aligned}
> $$

Algemeen kan je stellen:

> $$a_{i,j} = a_{j,i}^T$$

## Vector als matrix

Stel we hebben volgende vector:

> $$\vec{v} = \langle{v_x, v_y, v_z}\rangle$$

### Kolommatrix ($m \times 1$)

Een ==vector== wordt gewoonlijk door de **column-major representation** voorgesteld.

> $$
> \boldsymbol{v} = \begin{bmatrix}
>    v_x \\ v_y \\ v_z
> \end{bmatrix}
> $$

### Rijmatrix ($1 \times n$)

De **row-major representation** wordt in de meeste 3D-engines gebruikt.

> $$
> \boldsymbol{v}^T = \begin{bmatrix}
>    v_x & v_y & v_z
> \end{bmatrix}
> $$

### Homogene coördinaten

Driedimensionale computergrafiek gebruikt vaak **vierdimensionale vectoren**, waarbij de vector een driedimensionale vector is met een extra $w$-component. De componenten van de vector zijn dan **homogene coördinaten**.

**Homogene coördinaten** *(Eng. homogenous coordinates)* wil zeggen dat de coördinaten zowel een **richtingsvector** *(Eng. direction vector)* als een **plaatsvector** *(Eng. position vector)* kunnen weergegeven. Het verschil tussen beide zit hem in de waarde van $v_w$.

#### Een **vector** (3D) met ==homogene coördinaten==

> $$
> \boldsymbol{v} = \begin{bmatrix}
>    v_x \\
>    v_y \\
>    v_z \\
>    v_w \\
> \end{bmatrix}
> $$

De voorstelling met $v_w$ als laatste is het meest gebruikelijke, maar soms zet men $v_w$ eerst:

$$
\boldsymbol{v} = \begin{bmatrix}
   v_w \\
   v_x \\
   v_y \\
   v_z \\
\end{bmatrix}
$$

| $v_w$ | Vector          |
|:-----:|:----------------|
|  $0$  | Richtingsvector |
|  $1$  | Plaatsvector    |

## 3D-transformatiematrix

De driedimensionale transformatiematrices die hier beschreven zijn, zijn aangepast voor vierdimensionale vectoren zodat ook translatie ondersteund wordt.

> $$
> \begin{aligned}
> \boldsymbol{v}^\prime &= W_4 \space \boldsymbol{v}
> \\\\
> W_4 &= \begin{bmatrix}
>    w_{1,1} & w_{1,2} & w_{1,3} & w_{1,4} \\
>    w_{2,1} & w_{2,2} & w_{2,3} & w_{2,4} \\
>    w_{3,1} & w_{3,2} & w_{3,3} & w_{3,4} \\
>    w_{4,1} & w_{4,2} & w_{4,3} & w_{4,4} \\
> \end{bmatrix}
> \\\\
> \boldsymbol{v} &= \begin{bmatrix}
>    v_x \\
>    v_y \\
>    v_z \\
>    v_w \\
> \end{bmatrix}
> \\\\
> \boldsymbol{v}^\prime &= \begin{bmatrix}
>    w_{1,1} & w_{1,2} & w_{1,3} & w_{1,4} \\
>    w_{2,1} & w_{2,2} & w_{2,3} & w_{2,4} \\
>    w_{3,1} & w_{3,2} & w_{3,3} & w_{3,4} \\
>    w_{4,1} & w_{4,2} & w_{4,3} & w_{4,4} \\
> \end{bmatrix} \space \begin{bmatrix}
>    v_x \\
>    v_y \\
>    v_z \\
>    v_w \\
> \end{bmatrix}
> \end{aligned}
> $$

Waarbij $W_4$ een $4 \times 4$-matrix (transformatie in de 3D-**W**ereld) is die zelf door vermenigvuldiging van transformatiematrices bekomen is.

### Schaalmatrix

#### De **schaalmatrix** (3D) met ==homogene coördinaten==

> $$
> S({s_x, s_y, s_z}) = \begin{bmatrix}
>    s_x &   0 &   0 & 0 \\
>      0 & s_y &   0 & 0 \\
>      0 &   0 & s_z & 0 \\
>      0 &   0 &   0 & 1 \\
> \end{bmatrix}
> $$


#### De **uniforme schaalmatrix** (3D) met ==homogene coördinaten==

> $$
> S(s) = \begin{bmatrix}
>    s & 0 & 0 & 0 \\
>    0 & s & 0 & 0 \\
>    0 & 0 & s & 0 \\
>    0 & 0 & 0 & 1 \\
> \end{bmatrix}
> $$

### Eulerrotatiematrices

::: icon-person Euler  
:switzerland: [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler)  
:::

> [!CAUTION] Opgelet 
> De hoeken worden uitgedrukt in **radialen** *(Eng. randians)* en gaan in **tegenwijzerzin** *(Eng. counterclockwise)*

#### Tweedimensionale rotatiematrix

De tweedimensionale rotatiematrix voor rotaties in tegenwijzerzin.

##### De **eulerrotatiematrix** (2D)

> $$
> R_2(\theta) = \begin{bmatrix}
>    \cos\theta & -\sin\theta \\
>    \sin\theta &  \cos\theta \\
> \end{bmatrix}
> $$

::: details Toepassing
$$
\begin{aligned}
\boldsymbol{v_2} &= \begin{bmatrix}
   v_x \\
   v_y
\end{bmatrix}
\\\\
\boldsymbol{v_2^\prime} &= R_2(\theta) \space  \boldsymbol{v_2}
\\\\
\begin{bmatrix}
   v_x^\prime \\
   v_y^\prime \\
\end{bmatrix} &= \begin{bmatrix}
   \cos\theta & -\sin\theta \\
   \sin\theta &  \cos\theta \\
\end{bmatrix} \space \begin{bmatrix}
   v_x \\
   v_y \\
\end{bmatrix}
\\\\
&=\begin{bmatrix}
   \cos\theta \space v_x -\sin\theta \space v_y \\
   \sin\theta \space v_x + \cos\theta \space v_y \\
\end{bmatrix}
\end{aligned}
$$
:::

##### De **eulerrotatiematrix** (2D) met ==homogene coördinaten== 

> $$
> R_2(\theta) = \begin{bmatrix}
>    \cos\theta & -\sin\theta & 0\\
>    \sin\theta &  \cos\theta & 0\\
>             0 &           0 & 1\\
> \end{bmatrix}
> $$


#### Driedimensionale rotatiematrices

|                  Rotatie over as                   |   Hoek   | Ned.    | Eng.  |
|:--------------------------------------------------:|:--------:|:--------|:------|
| <Color value="ROOD"><strong>X-as</strong></Color>  | $\gamma$ | stampen | pitch |
| <Color value="GROEN"><strong>Y-as</strong></Color> | $\beta$  | gieren  | yaw   |
| <Color value="BLAUW"><strong>Z-as</strong></Color> | $\alpha$ | rollen  | roll  |

> [!WARNING] Waarschuwing
> De rotatie rond de z-as ($R_z$) is eigenlijk een uitbreiding op de tweedimensionale rotatie ($R_2$).  

##### De **eulerrotatiematrices** (3D)

> $$
> \begin{aligned}
> R_z(\alpha) &= \begin{bmatrix}
>   \cos\alpha & -\sin\alpha & 0 \\
>   \sin\alpha &  \cos\alpha & 0 \\
>            0 &           0 & 1 \\
> \end{bmatrix}
> \\\\
> R_y(\beta) &= \begin{bmatrix}
>     \cos\beta & 0 & \sin\beta \\
>             0 & 1 &         0 \\
>    -\sin\beta & 0 & \cos\beta \\
> \end{bmatrix}
> \\\\
> R_x(\gamma) &= \begin{bmatrix}
>    1 &          0 &           0 \\
>    0 & \cos\gamma & -\sin\gamma \\
>    0 & \sin\gamma &  \cos\gamma \\
> \end{bmatrix}
> \end{aligned}
> $$

###### De **eulerrotatiematrices** (3D) met ==homogene coördinaten==

> $$
> \begin{aligned}
> R_z(\alpha) &= \begin{bmatrix}
>    \cos\alpha & -\sin\alpha & 0 & 0 \\
>    \sin\alpha &  \cos\alpha & 0 & 0 \\
>             0 &           0 & 1 & 0 \\
>             0 &           0 & 0 & 1 \\
> \end{bmatrix}
> \\\\
> R_y(\beta) &= \begin{bmatrix}
>     \cos\beta & 0 & \sin\beta & 0 \\
>             0 & 1 & 0         & 0 \\
>    -\sin\beta & 0 & \cos\beta & 0 \\
>             0 & 0 & 0         & 1 \\
> \end{bmatrix}
> \\\\
> R_x(\gamma) &= \begin{bmatrix}
>    1 &          0 &           0 & 0 \\
>    0 & \cos\gamma & -\sin\gamma & 0 \\
>    0 & \sin\gamma &  \cos\gamma & 0 \\
>    0 &          0 &           0 & 1 \\
> \end{bmatrix}
> \end{aligned}
> $$

##### Volgorde van rotaties

Een rotatie eerst rond de x-as, dan de y-as en tenslotte de z-as schrijf je van ==rechts naar links==:

> $$
> R \space \boldsymbol{v} = R_z(\alpha) \space R_y(\beta) \space R_x(\gamma) \space \boldsymbol{v}
> $$

> [!CAUTION] Opgelet
> Bij **eulerrotaties** is de ==volgorde van roteren van belang!== Bij roteren over hoeken van $90\degree$ kan er een **gimbal lock** *(Ned. cardanische ophangingsvergrendeling)* ontstaan.  
> $$
> R_z(\alpha) \space R_y(\beta) \space R_x(\gamma) \neq R_x(\gamma) \space R_y(\beta) \space R_z(\alpha)
> $$

### Translatiematrix

#### De **translatiematrix** (3D) met ==homogene coördinaten==
>
> $$
> T({t_x, t_y, t_z}) = \begin{bmatrix}
>      1 & 0 & 0 & t_x \\
>      0 & 1 & 0 & t_y \\
>      0 & 0 & 1 & t_z \\
>      0 & 0 & 0 & 1   \\
> \end{bmatrix}
> $$

> [!TIP]
> Hier wordt meteen duidelijk waarom een richtingsvector $v_w = 0$ heeft. Dit zorgt ervoor dat de translatie genegeerd wordt.
> 
> **Richtingsvector** ($\boldsymbol{v_r}$)
> 
> $$
> \begin{aligned}
> \boldsymbol{v_r} &= \begin{bmatrix}
>      v_x \\
>      v_y \\
>      v_w \\
>      0 \\
> \end{bmatrix}
> \\\\
> \boldsymbol{v_r^\prime} &= \begin{bmatrix}
>      1 & 0 & 0 & t_x \\
>      0 & 1 & 0 & t_y \\
>      0 & 0 & 1 & t_z \\
>      0 & 0 & 0 & 1   \\
> \end{bmatrix} \space \begin{bmatrix}
>      v_x \\
>      v_y \\
>      v_w \\
>      0 \\
> \end{bmatrix} 
> \\\\
> &=\begin{bmatrix}
>  1 \space v_x + 0 \space v_y + 0 \space v_z + t_x \space 0 \\
>  0 \space v_x + 1 \space v_y + 0 \space v_z + t_y \space 0 \\
>  0 \space v_x + 0 \space v_y + 1 \space v_z + t_z \space 0 \\
>  0 \space v_x + 0 \space v_y + 0 \space v_z + 1 \cdot 0 \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>      v_x \\
>      v_y \\
>      v_w \\
>      0 \\
> \end{bmatrix}
> \end{aligned}
> $$
> 
> **Plaatsvector** ($\boldsymbol{v_p}$)
> 
> $$
> \begin{aligned}
> \boldsymbol{v_p} &= \begin{bmatrix}
>      v_x \\
>      v_y \\
>      v_w \\
>      1 \\
> \end{bmatrix}
> \\\\
> \boldsymbol{v_p^\prime} &= \begin{bmatrix}
>      1 & 0 & 0 & t_x \\
>      0 & 1 & 0 & t_y \\
>      0 & 0 & 1 & t_z \\
>      0 & 0 & 0 & 1   \\
> \end{bmatrix} \space \begin{bmatrix}
>      v_x \\
>      v_y \\
>      v_w \\
>      1 \\
> \end{bmatrix}
> \\\\
> &= \begin{bmatrix}
>    1 \space v_x + 0 \space v_y + 0 \space v_z + t_x \space 1 \\
>    0 \space v_x + 1 \space v_y + 0 \space v_z + t_y \space 1 \\
>    0 \space v_x + 0 \space v_y + 1 \space v_z + t_z \space 1 \\
>    0 \space v_x + 0 \space v_y + 0 \space v_z +   1 \cdot  1 \\
> \end{bmatrix} 
> \\\\
> &= \begin{bmatrix}
>    v_x + t_x \\
>    v_y + t_y \\
>    v_z + t_w \\
>    1 \\
> \end{bmatrix}
> \end{aligned}
> $$
:::

### Volgorde van transformaties

> [!CAUTION] Opgelet
> Matrixvermenigvuldigingen worden van ==rechts naar links== uitgevoerd en zijn ==niet-commutatief==.

Volgorde voor een transformatie in de 3D-**W**ereld is doorgaans:


> $$
> W = S \space R \space T
> $$
>
> > Van ==rechts naar links==:
> >
> > 1. **T**ransleren
> > 2. **R**oteren
> > 3. **S**chalen

Maar ook deze wordt vaak gebruikt:

> $$
> W = T \space R \space S
> $$
>
> > Van ==rechts naar links==:
> >
> > 1. **S**chalen
> > 2. **R**oteren
> > 3. **T**ransleren

#### Gimbal Lock

Een **gimbal lock** *(Ned. cardanische ophangingsvergrendeling)* ontstaat bij eulerrotaties in sommige situaties waarbij over $90\degree$ gedraaid wordt. Omdat de assen meedraaien, kunnen daarbij twee assen in hetzelfde vlak komen te liggen. Hierdoor kan vervolgens niet meer in elke richting gedraaid worden.  

::: icon-video-youtube  
<YouTube video="zc8b2Jo7mno" />  
:::
