---
title: Vectoren
---

*[Eng.]: Engels/English
*[Ned.]: Nederlands

Computergrafiek maakt uitgebreid gebruik van vectoren voor het voorstellen van onder andere:

- **Positie** *(Eng. position)* in de ruimte ten opzichte van een **oorsprong** *(Eng. origin).*
- **Richting** *(Eng. direction)* met een **lengte** *(Eng. length).*

We kunnen een vector ook voorstellen met een ==matrix== of een ==complex getal== en de respectievelijke regels gebruiken voor berekeningen. Elk heeft zijn voor- en nadelen (zie volgende hoofdstukken).

## Eigenschappen

Een vector heeft een lengte of **norm** *(Eng. magnitude)* en een **richting** *(Eng. direction).* Een scalair getal heeft enkel een norm.

> [!WARNING] Waarschuwing
> Een vector heeft ==**geen positie**== in de ruimte; elke vector met dezelfde lengte en richting is **identiek** aan elkaar.  


> [!CAUTION] Opgelet
> Hoewel een vector zelf geen positie heeft, wordt een vector in 3D-computergrafiek wel gebruikt om ==een positie in de ruimte== voor te stellen. Daarbij gaat men uit dat de vector vertrekt in de oorsprong, en dan wordt de ==positie bepaald door de norm en de richting.==  

## Voorstelling

Een vector wordt grafisch voorgesteld door een **staart** *(Eng. tail)* aan het begin een en een **kop** *(Eng. head)* aan het einde met een **pijlpunt** *(Eng. arrowhead).*

De **vector** heeft als wiskundig voorstelling:

> $$
> \vec{v}
> $$

> [!WARNING] Waarschuwing  
> In het vakgebied van ==computergrafiek== gebruikt men vaak een **vette letter** in plaats van een pijltje, omdat het een matrixvoorstelling van de vector is.
>
> $$\boldsymbol{v}$$

### Componenten

Voor computergrafiek worden twee-, drie- of vierdimensionale vectoren gebruikt. Een vector wordt voorgesteld door een ***n*-tupel**[^tuple] van **reële getallen** *(floating point numbers).* Een vector bestaat uit vectorcomponenten, of kortweg **componenten** die een getal of een andere vector kunnen zijn. Bijvoorbeeld een vector kan bestaan uit een component voor de lengte en de componenten van een andere vector die de richting voorstelt.

[^tuple]: Een **tupel** *(Eng. tuple)* is een geordende reeks van componenten.

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{v}_2 &= \langle v_x , v_y \rangle
> \\\\
> \vec{v}_3 &= \langle v_x , v_y , v_z \rangle
> \\\\
> \vec{v}_4 &= \langle v_x , v_y , v_z , v_w \rangle
> \\\\
> \vec{v}_4 &= \langle v_w , v_x , v_y , v_z \rangle
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{v}_2 \in \mathbb{R}^2
>   \enspace \vert \enspace
>   \vec{v}_3 \in \mathbb{R}^3
>   \enspace \vert \enspace
>   \vec{v}_4 \in \mathbb{R}^4
>   \enspace \vert \enspace
>   v_w, v_x, v_y, v_z \in \mathbb{R}
> \enspace \rbrace
> \end{gathered}
> $$

> [!WARNING] Waarschuwing
> De **vierdimensionale vector** bevindt zich ook ==in de driedimensionale ruimte==, want de vierde dimensie wordt enkel gebruikt om de berekeningen te faciliteren.

### Norm

$\lVert \vec{v} \rVert$ is de **norm** *(Eng. magnitude, length)* en stelt de ==lengte van de vector== voor. Je berekent de norm van een twee- of driedimensionale vector met de **Stelling van Pythagoras** *(Eng. Pythagorean Theorem)* door de vierkantswortel te berekenen van de som van de kwadraten van de componenten.

> $$
> \begin{gathered}
> \begin{aligned}
> \lVert \vec{v}_2 \rVert &\colonequals \sqrt{v_x^2 + v_y^2}
> \\\\
> \lVert \vec{v}_3 \rVert &\colonequals \sqrt{v_x^2 + v_y^2 + v_z^2}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{v}_2 \in \mathbb{R}^2
>   \enspace \vert \enspace
>   \vec{v}_3 \in \mathbb{R}^3
>   \enspace \vert \enspace
>   \vec{v}_2 = \langle v_x , v_y \rangle 
>   \enspace \vert \enspace
>   \vec{v}_3 = \langle v_x , v_y, v_z \rangle 
> \enspace \rbrace
> \end{gathered}
> $$


> [!NOTE] Opmerking
> In het vakgebied van **computergrafiek** gebruikt men vaak enkele rechtopstaande streepjes.
> 
> $$\lvert \boldsymbol{v} \rvert$$

## Normvector

$\hat{v}$ is de **normvector** of **eenheidsvector** *(Eng. unit vector)* van de vector $\vec{v}$

> $$\hat{v}$$

De **normvector** wordt gebruikt als ==enkel de richting van de vector== nodig is.

### Normalisatie

De **normalisatie** *(Eng. normalization)* van een vector is het omzetten van de vector naar de **normvector** of **eenheidsvector** *(Eng. unit vector).*

$\hat{v}$ is de **normvector**  *(Eng. unit vector)* van de vector $\vec{v}$

> $$\hat{v}$$

Wanneer enkel de richting van een vector nodig is -- dus zonder de norm -- dan kan een normvector gebruikt worden.

Het omzetten doe je door ==elke component te **delen door de norm**.==

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{v} &= \langle v_x , v_y , v_z \rangle
> \\\\
> \hat{v} &\colonequals \frac{\vec{v}}{\lVert \vec{v} \rVert}
> \\\\
> &= \langle \frac{v_x}{\lVert \vec{v} \rVert} , \frac{v_y}{\lVert \vec{v} \rVert} , \frac{v_z}{\lVert \vec{v} \rVert} \rangle
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{v} \in \mathbb{R}^3
>   \enspace \vert \enspace
>   \vec{v} = \langle v_x , v_y , v_z \rangle
> \enspace \rbrace
> \end{gathered}
> $$

Een **normvector** heet zo, omdat de **norm** een waarde $1$ heeft.

> $$\lVert\hat{v}\rVert = 1$$


> [!TIP]
> Met **normaliseren** bedoelt men vaak de absolute waarden herleiden naar waarden tussen $0$ en $1$.  

## Operaties

### Optelling

De **optelling** *(Eng. addition)* van twee vectoren resulteert in de **som** *(Eng. sum).* van die vectoren.
De eerste vector vertrekt vanuit de **oorsprong** *(Eng. origin)* en de tweede vector vanuit de positie van de eerste vector. De som is de vector vanuit de oorsprong naar de eindpositie.

> $$
> \begin{aligned}
> &\vec{c} = \vec{a} + \vec{b}
> \\\\
> &\lbrace \enspace
>   \vec{a}, \vec{b}, \vec{c} \in \mathbb{R}^3
> \enspace \rbrace
> \end{aligned}
> $$

De resulterende vector verkrijg je door de overeenkomstige componenten samen te tellen.

> $$
> \begin{aligned}
> \vec{c} &= \vec{a} + \vec{b} \\
>         &= \langle c_x , c_y , c_z \rangle \\
>         &= \langle a_x + b_x , a_y + b_y , a_z + b_z \rangle
> \\\\
> &\begin{cases}
> c_x = a_x + b_x \\
> c_y = a_y + b_y \\
> c_z = a_z + b_z \\
> \end{cases}
> \end{aligned}
> $$

#### Eigenschappen

| Eigenschap      |                            Voorbeeld                            |
|:----------------|:---------------------------------------------------------------:|
| **Commutatief** |             $\vec{a} + \vec{b} = \vec{b} + \vec{a}$             |
| **Associatief** | $\vec{a} + (\vec{b} + \vec{c}) = (\vec{a} + \vec{b}) + \vec{c}$ |

### Aftrekking

De **aftrekking** *(Eng. subtraction)* van twee vectoren resulteert in het **verschil** (*Eng. difference)* van die vectoren.
De twee vectoren stellen de positie voor ten opzichte van de **oorsprong** *(Eng. origin)* van het assenstelsel en het verschil is de vector om van positie **a** naar positie **b** te gaan.

> $$
> \begin{gathered}
> \begin{aligned}
> &\vec{c} = \vec{b} - \vec{a}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{a}, \vec{b}, \vec{c} \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

De resulterende vector verkrijg je door het verschil te maken van de overeenkomstige componenten.

> $$
> \begin{aligned}
> \vec{c} &= \vec{b} - \vec{a} \\
>         &= \langle c_x , c_y , c_z \rangle \\
>         &= \langle b_x - a_x , b_y - a_y , b_z - a_z \rangle
> \\\\
> &\begin{cases}
> c_x = b_x - a_x \\
> c_y = b_y - a_y \\
> c_z = b_z - a_z \\
> \end{cases}
> \end{aligned}
> $$

De **afstand tussen de twee posities** is de ==**norm** van de resulterende vector.==

> $$
> \lVert \vec{c} \rVert = \sqrt{(b_x - a_x)^2 + (b_y - a_y)^2 + (b_z - a_z)^2}
> $$

### Vermenigvuldiging

Er zijn verschillende soorten van **vermenigvuldiging** *(Eng. multiplication).*

|                          | Ned.                       | Ned. alternatief | Eng.                  | Eng. alternatief |
|:------------------------:|:---------------------------|:-----------------|:----------------------|:-----------------|
|    $s \space \vec{v}$    | Scalaire vermenigvuldiging |                  | Scalar multiplication |                  |
| $\vec{a} \cdot \vec{b}$  | Inwendig product           | Scalair product  | Dot product           | Scalar product   |
| $\vec{a} \times \vec{b}$ | Uitwendig product          | Kruisproduct     | Cross product         |                  |

#### Scalaire vermenigvuldiging

De **scalaire vermenigvuldiging** *(Eng. scalar multiplication)* verandert de **norm** *(Eng. magnitude, length)* van de vector.

Een negatieve scalair zal bovendien de **richting veranderen**. Deze vermenigvuldiging wordt gebruikt ==om objecten te schalen.==

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{v}^\prime = s \space \vec{v}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{v}, \vec{v}^\prime \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{aligned}
> \vec{v}^\prime &= s \space \vec{v} \\
>                &= \langle v^\prime_x , v^\prime_y , v^\prime_z \rangle \\
>                &= \langle s \space v_x , s \space v_y , s \space v_z \rangle
> \\\\
> &\begin{cases}
>   v^\prime_x = s \space v_x \\
>   v^\prime_y = s \space v_y \\
>   v^\prime_z = s \space v_z \\
> \end{cases}
> \end{aligned}
> $$

#### Inwendig product

Het **inwendig product** *(Eng. dot product)* is een **scalair getal**. Daarom noemt men dit ook wel het **scalair product** *(Eng. scalar product)*

> [!WARNING] Waarschuwing
> Het **scalair product** mag je ==niet verwarren== met de **scalaire vermenigvuldiging** *(Eng. scalar multiplication).*

> $$
> \begin{gathered}
> \begin{aligned}
> s = \vec{a} \cdot \vec{b}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   s \in \mathbb{R}
>   \enspace \vert \enspace
>   \vec{a}, \vec{b} \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{aligned}
> s &= \vec{a} \cdot \vec{b} \\
>   &= a_x \space b_x + a_y \space b_y + a_z \space b_z
> \end{aligned}
> $$

##### Eigenschappen

| Eigenschap      |                                    Voorbeeld                                    |
|:----------------|:-------------------------------------------------------------------------------:|
| **Commutatief** |                 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$                 |
| **Associatief** | $\vec{a} \cdot (\vec{b} \cdot \vec{c}) = (\vec{a} \cdot \vec{b}) \cdot \vec{c}$ |
|                 |        $s \space \vec{a} \cdot \vec{c} = \vec{a} \cdot s \space \vec{b}$        |

###### Planaire hoek

Twee vectoren vormen samen een **vlak** *(Eng. plane).* De hoek tussen de twee vectoren noemen we de **planaire hoek** *(Eng. planar angle).* 

> $$
> \vec{a} \cdot \vec{b} = \lVert \vec{a} \rVert \space \lVert \vec{b} \rVert \space \cos\theta
> $$

Deze hoek in het vlak kunnen we berekenen met behulp van het inwendig product en de **boogcosinus** *(Eng. arccosine).* Dit wordt bijvoorbeeld gebruikt om reflectiehoeken te berekenen.

> $$
> \begin{aligned}
> \lVert \vec{a} \rVert \space \lVert \vec{b} \rVert \space \cos\theta &= \vec{a} \cdot \vec{b}
> \\\\
> \cos\theta &= \frac{\vec{a} \cdot \vec{b}}{\lVert \vec{a} \rVert \space \lVert \vec{b} \rVert}
> \\\\
> \theta &= \operatorname{bgcos} \bigg(\frac{\vec{a} \cdot \vec{b}}{\lVert \vec{a} \rVert \space \lVert \vec{b} \rVert} \bigg)
> \end{aligned}
> $$

###### Loodrechte vectoren

> [!WARNING] Waarschuwing
> Als twee vectoren ==loodrecht op elkaar staan,== dan is de cosinus van die hoek ($90\degree$ of ${\frac{\pi}{2}}$) gelijk aan 0 en bijgevolg ook het inwendig product.

> $$
> \begin{aligned}
> \vec{a} \cdot \vec{b} &= \lVert \vec{a} \rVert \space \lVert \vec{b} \rVert \cos\frac{\pi}{2} \\
>                       &= \lVert \vec{a} \rVert \space \lVert \vec{b} \rVert \space 0 \\
>                       &= 0
> \end{aligned}
> $$

###### Vector projecteren

Een andere toepassing is het projecteren van een vector op een andere. In onderstaand inwendig product van een **vector** $\vec{a}$ met een **normvector** $\hat{b}$, zal het resultaat de lengte van projectie van de vector $\vec{a}$ op $\vec{b}$ zijn.

> $$
> \vec{a} \cdot \hat{b} = \vec{a} \cdot \frac{\vec{b}}{\lVert \vec{b} \rVert}
> $$

#### Uitwendig product

Het **uitwendig product** of **kruisproduct** *(Eng. cross product)* is een derde vector **loodrecht** op het vlak dat gevormd wordt door de twee vectoren. Deze nieuwe vector noemt men de **normaal** *(Eng. normal)* van het vlak.

De richting van de normaal volgt de **rechterhand**regel.

|                               # | Vector    | Rechterhand                                                |         |
|--------------------------------:|:----------|:-----------------------------------------------------------|:--------|
|  <Color value="ROOD">1.</Color> | $\vec{a}$ | <Color value="ROOD"><strong>duim</strong></Color>          |         |
| <Color value="GROEN">2.</Color> | $\vec{b}$ | <Color value="GROEN"><strong>wijsvinger</strong></Color>   |         |
| <Color value="BLAUW">3.</Color> | $\vec{n}$ | <Color value="BLAUW"><strong>middelvinger</strong></Color> | Normaal |

> $$
> \begin{gathered}
> \begin{aligned}
> \vec{n} = \vec{a} \times \vec{b}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{a}, \vec{b}, \vec{n} \in \mathbb{R}^3
> \enspace \rbrace
> \end{gathered}
> $$

> $$
> \begin{aligned}
> \vec{n} &= \vec{a} \times \vec{b} \\
>         &= \langle n_x , n_y , n_z \rangle \\
>         &= \langle a_y \space b_z - a_z \space b_y , a_z \space b_x - a_x \space b_z , a_x \space b_y - a_y \space b_x \rangle
> \\\\
> &\begin{cases}
>   n_x = a_y \space b_z - a_z \space b_y \\
>   n_y = a_z \space b_x - a_x \space b_z \\
>   n_z = a_x \space b_y - a_y \space b_x \\
> \end{cases}
> \end{aligned}
> $$

> [!WARNING] Waarschuwing
> Een uitwendig product kan enkel een **vector** als resultaat geven in een ==ruimte die minstens driedimensionaal is==. In een tweedimensionale ruimte krijg je een scalair getal: de norm (zonder richting).

##### Eigenschappen

| Eigenschap           |                                               Voorbeeld                                                |
|:---------------------|:------------------------------------------------------------------------------------------------------:|
| **Anti-commutatief** |                           $\vec{a} \times \vec{b} = -\vec{b} \times \vec{a}$                           |
| **Distributief**     |         $\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}$         |
| **Niet-associatief** |         $\vec{a} \times (\vec{b} \times \vec{c}) \neq (\vec{a} \times \vec{b}) \times \vec{c}$         |
|                      | $s \space (\vec{a} \times \vec{b}) = s \space \vec{a} \times \vec{b} =\vec{a} \times s \space \vec{b}$ |

###### Parallelle vectoren

De **norm van de normaal** komt overeen met de ==oppervlakte== die gevormd wordt door de twee vectoren.

> $$
> \lVert \vec{n} \rVert
> $$

> [!WARNING] Waarschuwing
> Als de twee vectoren ==parallel zijn== -- dezelfde of tegengestelde richting hebben, zal de **oppervlakte gelijk zijn aan 0** en zal bijgevolg ook de **norm van de normaal gelijk zijn aan 0**.

> $$
> \begin{gathered}
> \begin{aligned}
> \lVert \vec{n} \rVert &= \sqrt{n_x^2 + n_y^2 + n_z^2}
> \\\\
> \lVert \vec{a} \times \vec{b} \rVert &= \sqrt{(a_y \space b_z - a_z \space b_y)^2 + (a_z \space b_x - a_x \space b_z)^2 + (a_x \space b_y - a_y \space b_x)^2}
> \end{aligned}
> \\\\
> \lbrace \enspace
>   \vec{a}, \vec{b}, \vec{n} \in \mathbb{R}^3
>   \enspace \vert \enspace
>   \vec{a} = \langle a_x , a_y , a_z \rangle
>   \enspace \vert \enspace
>   \vec{b} = \langle b_x , b_y , b_z \rangle
>   \enspace \vert \enspace
>   \vec{n} = \langle n_x , n_y , n_z \rangle
> \enspace \rbrace
> \end{gathered}
> $$

## Computergrafiek

### Vector als matrix

Een vector kan voorgesteld worden als een **kolommatrix** ($n \times 1$-matrix), en is gelijk aan de getransponeerde (rij)matrix. De rijmatrix is handiger is voor gebruik in een tekst.

De **vector** van wiskundig voorstelling naar computergrafiek:

> $$
> \begin{aligned}
> \vec{v} &= \langle v_x , v_y , v_z \rangle
> \\\\
> \boldsymbol{v} &= \begin{bmatrix}
>   v_x \\
>   v_y \\
>   v_z \\
> \end{bmatrix} = \begin{bmatrix}
>   v_x & v_y & v_z \end{bmatrix}^T
> \end{aligned}
> $$

Je kan een vector ook als een **vierkante matrix** ($n \times n$) schrijven.

> $$
> \begin{aligned}
> \boldsymbol{v}_2 &= \begin{bmatrix}
>    v_x & 0 \\
>    v_y & 0
> \end{bmatrix}
> \\\\
> \boldsymbol{v}_3 &= \begin{bmatrix}
>    v_x & 0 & 0 \\
>    v_y & 0 & 0 \\
>    v_z & 0 & 0
> \end{bmatrix}
> \\\\
> \boldsymbol{v}_4 &= \begin{bmatrix}
>    v_x & 0 & 0 & 0 \\
>    v_y & 0 & 0 & 0 \\
>    v_z & 0 & 0 & 0 \\
>    v_w & 0 & 0 & 0
> \end{bmatrix}
> \end{aligned}
> $$

### Lengte van een vector

De norm is de **lengte** van de vector, daarom gebruikt men in computergrafiek de voorstelling voor lengte in plaats van norm.

De **norm** van wiskundig voorstelling naar computergrafiek:

> $$
> \begin{aligned}
> \lVert \vec{v} \rVert &= \sqrt{v_x^2 + v_y^2 + v_z^2}
> \\\\
> \lvert \boldsymbol{v} \lvert &= \sqrt{v_x^2 + v_y^2 + v_z^2}
> \end{aligned}
> $$
