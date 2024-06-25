import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://devkanisk.com",
  scopedStyleStrategy: "where",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula-soft",
    },
  },
});
