// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
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
                name: "Sedgwick Ave",
                cssVariable: "--font-sedgwick-ave"
            }
        ]
    }
});
