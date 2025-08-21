// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://ostromia.github.io",
    base: "gentsandginger",

    integrations: [mdx(), sitemap()],

    vite: {
        resolve: {
            alias: {
                "~src": "/src",
                "~assets": "/src/assets",
                "~components": "/src/components",
                "~content": "/src/content",
                "~layouts": "/src/layouts",
                "~pages": "/src/pages",
                "~styles": "/src/styles",
                "~scripts": "/src/scripts"
            }
        }
    },

    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: "Atkinson Hyperlegible",
                cssVariable: "--font-atkinson-hyperlegible"
            },
            {
                provider: fontProviders.fontsource(),
                name: "Reenie Beanie",
                cssVariable: "--font-reenie-beanie"
            },
            {
                provider: fontProviders.fontsource(),
                name: "Swanky and Moo Moo",
                cssVariable: "--font-swanky-and-moo-moo"
            }
        ]
    }
});
