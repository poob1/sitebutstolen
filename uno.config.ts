import * as catpuccin from "./catppuccin.json";

import { defineConfig, transformerVariantGroup } from "unocss";

export default defineConfig({
    preflights: [
        {
            getCSS: ({ theme }) => `
                .astro-code {
                    border-radius: 0.375rem;
                    padding: 0.5rem;
                }

                a {
                    transition: color 0.2s ease-in-out;
                    color: ${theme.colors.yellow} !important;
                    text-decoration: unset !important;
                }

                a:hover {
                    color: ${theme.colors.peach} !important;
                }

                h1 {
                    font-size: 1.75rem !important;
                    font-weight: 700 !important;
                }

                h2 {
                    font-size: 1.5rem !important;
                    font-weight: 600 !important;
                    margin-top: 0.75rem !important;
                }

                h3 {
                    font-size: 1.25rem !important;
                    font-weight: 500 !important;
                    margin-top: 0.5rem !important;
                }

                h4 {
                    font-size: 1.15rem !important;
                    font-weight: 400 !important;
                    margin-top: 0.25rem !important;
                }

                code {
                    background-color: ${theme.colors.mantle};
                    border-radius: 0.2rem;
                    padding: 0.1rem;
                    font-family: ${theme.fontFamily.mono} !important;
                }
            `
        }
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    theme: {
        fontFamily: {
            inter: "Inter",
            mono: "JetBrains Mono"
        },
        colors: {
            ...catpuccin,
        },
    },
})