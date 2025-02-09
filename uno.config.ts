import * as catpuccin from "./catppuccin.json";

import { defineConfig, transformerVariantGroup } from "unocss";

export default defineConfig({
    preflights: [
        {
            getCSS: ({ theme }) => `
                :root {
                    --astro-code-color-text: ${theme.colors.text};
                    --astro-code-color-background: ${theme.colors.mantle};
                    --astro-code-token-constant: ${theme.colors.yellow};
                    --astro-code-token-string: ${theme.colors.green};
                    --astro-code-token-comment: ${theme.colors["subtext-primary"]};
                    --astro-code-token-keyword: ${theme.colors.peach};
                    --astro-code-token-parameter: ${theme.colors.lavender};
                    --astro-code-token-function: ${theme.colors.pink};
                    --astro-code-token-string-expression: ${theme.colors.mauve};
                    --astro-code-token-punctuation: ${theme.colors.blue};
                    --astro-code-token-link: ${theme.colors.yellow};
                }

                .astro-code {
                    border-radius: 0.375rem;
                    padding: 0.5rem;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }

                a {
                    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
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

                table,thead {
                    width: 100%;
                    border-collapse: unset !important;
                    background-color: ${theme.colors.crust};
                    border-radius: 0.375rem;
                    text-align: center;
                    align-self: center;
                }

                th,td,tr {
                    background-color: ${theme.colors.mantle};
                    padding: 0.25rem;
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