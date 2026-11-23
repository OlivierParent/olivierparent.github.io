# Documentation

## Installation

```
> pnpm create astro --template starlight/tailwind olivierparent.github.io
> cd olivierparent.github.io
> pnpm add katex satteri-katex
> pnpm add @mirrordown/sat-abbr @mirrordown/sat-del @mirrordown/sat-github-alerts @mirrordown/sat-ins @mirrordown/sat-mark @mirrordown/sat-mermaid-pele
> gh repo create olivierparent.github.io --public
> git remote add origin https://github.com/OlivierParent/olivierparent.github.io
> git branch -M main
> git add .
> git push -u origin main
```

## Dependencies

- [Node.js](https://nodejs.org/en)
  - [Astro](https://astro.build/)
    - [Starlight](https://starlight.astro.build/)
    - [Sätteri](https://satteri.bruits.org/)
      - [Mirrordown](https://github.com/mirrordown/mirrordown/)
        - [`@mirrordown/sat-abbr`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-abbr)
        - [`@mirrordown/sat-del`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-del) 
        - [`@mirrordown/sat-github-alerts`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-github-alerts) 
        - [`@mirrordown/sat-ins`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-ins) 
        - [`@mirrordown/sat-mark`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-mark) 
        - [`@mirrordown/sat-mermaid-pele`](https://github.com/mirrordown/mirrordown/tree/main/packages/sat-mermaid-pele)
      - [satteri-plugins](https://ashish-codejourney.github.io/satteri-plugins/)
        - [`satteri-katex`](https://satteri-plugins.js.org/plugins/satteri-katex/)
          - [KaTeX](https://katex.org/)
    - [Tailwind](https://tailwindcss.com/)
  - [pnpm](https://pnpm.io/)
  - [Vite](https://vite.dev/)