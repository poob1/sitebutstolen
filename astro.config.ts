import uno from "astro-uno";
import config from "./uno.config";
import { presetUno, presetWind } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://beefers.dev",
    integrations: [
        uno({
            presets: [presetUno(), presetWind(), presetScrollbar()],
            ...config,
        }),
    ],
});