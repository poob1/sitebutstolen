import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";
import WindiCSS from "vite-plugin-windicss";

// https://astro.build/config
export default defineConfig({
    integrations: [solid()],
    site: "https://beefers.dev",
    vite: {
        ssr: {
            external: ["svgo"],
        },
        plugins: [WindiCSS()],
    },
});
