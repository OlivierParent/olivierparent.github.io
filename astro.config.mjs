// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig, fontProviders } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import starlightBlog from "starlight-blog";
import starlightGroupPages from "starlight-group-pages";
import starlightKbd from "starlight-kbd";
import tailwindcss from "@tailwindcss/vite";
import { satteriAbbr } from "@mirrordown/sat-abbr";
import { satteriDel } from "@mirrordown/sat-del";
import { satteriEmoji } from "satteri-emoji";
import { satteriIns } from "@mirrordown/sat-ins";
import { satteriKatex } from "satteri-katex";
import { satteriMark } from "@mirrordown/sat-mark";
import { satteriMermaidPele } from "@mirrordown/sat-mermaid-pele";

import { sidebar } from "./sidebar.config";
import { satteriGithubAlerts } from "@mirrordown/sat-github-alerts";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--op-font-mono",
      name: "Fira Code",
      provider: fontProviders.google(),
      styles: ["normal"],
      weights: ["400"],
    },
    {
      cssVariable: "--op-font-sans",
      name: "Zilla Slab",
      provider: fontProviders.google(),
      styles: ["normal"],
      weights: ["400"],
    },
  ],
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "nl"],
  // },
  integrations: [
    starlight({
      components: {
        Footer: "@/components/Footer.astro",
        Head: "@/components/Head.astro",
      },
      customCss: [
        "@mirrordown/sat-github-alerts/github-alerts.css",
        "@mirrordown/sat-mermaid-pele/mermaid-pele.css",
        "katex/dist/katex.min.css",
        "@/styles/global.css",
        "@/styles/custom.css",
      ],
      defaultLocale: "root", // optional
      locales: {
        root: {
          label: "EN",
          lang: "en", // lang is required for root locales
        },
        nl: {
          label: "NL",
          lang: "nl",
        },
      },
      markdown: {},
      plugins: [
        starlightBlog({
          title: {
            en: "My Blog",
            nl: "Mijn Blog",
          },
        }),
        starlightGroupPages({ exclude: ["blog"] }),
        starlightKbd({
          types: [
            { id: "mac", label: "macOS" },
            { id: "windows", label: "Windows", default: true },
          ],
        }),
      ],
      sidebar,
      social: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/olivierparent/",
        },
        {
          icon: "x.com",
          label: "X.com",
          href: "https://x.com/olivierparent77",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/olivierparent",
        },
      ],
      title: "OPu577",
    }),
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [satteriMermaidPele()],
      features: {
        attributes: true,
        definitionList: true,
        // emoji: true,
        frontmatter: true,
        gfm: {
          footnotes: {
            backContent: "↩",
            backLabel: "Back to reference {reference}",
            label: "Footnotes",
          },
        },
        math: true,
        smartPunctuation: true,
        subscript: true,
        superscript: true,
      },
      mdastPlugins: [
        satteriAbbr(),
        satteriDel(),
        satteriEmoji({ shortcodes: ["github"] }), // https://emojibase.dev/emojis?filter=belgium&shortcodePresets=github
        satteriGithubAlerts(),
        satteriIns(),
        satteriKatex(),
        satteriMark(),
      ],
    }),
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
  },
  outDir: "./docs",
  site: "https://www.olivierparent.be",
  vite: {
    plugins: [tailwindcss()],
    resolve: { tsconfigPaths: true },
  },
});
