import uno from "astro-uno";
import config from "./uno.config";
import { presetUno, presetWind } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://beefers.dev",
  integrations: [uno({
    presets: [presetUno(), presetWind(), presetScrollbar()],
    ...config
  }), mdx()],
  markdown: {
    shikiConfig: {
        theme: "css-variables",
    }
  }
});