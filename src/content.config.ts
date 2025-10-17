import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const apps = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/apps" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

// Export a single `collections` object to register collection(s)
export const collections = { apps };