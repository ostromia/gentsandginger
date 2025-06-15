import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const policies = defineCollection({
    loader: glob({ base: "./src/content/policies", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date(),
            heroImage: image().optional()
        })
});

export const collections = { policies };
