import { defineConfig } from "windicss/helpers";
import * as catpuccin from "./catppuccin.json";

export default defineConfig({
    preflight: true,
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                ...catpuccin,
            },
        },
    },
    extract: {
        include: ["./src/**/*.{vue,html,jsx,tsx,astro}"],
        exclude: ["node_modules", ".git"],
    },
});
