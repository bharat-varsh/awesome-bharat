import { defineCollection, z } from 'astro:content';

/**
 * Define schema for different content types
 */

// Applications
const apps = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
        featured: z.boolean().default(false),
        paid: z.boolean().default(false),
        source: z.enum(['open-source', 'closed-source']).default('open-source'),
        youtubeLinks: z.array(z.string()).optional(),
        externalLinks: z.array(
            z.object({
                label: z.string(),
                url: z.string().url(),
            })
        ).optional(),
        draft: z.boolean().default(false),
    }),
});

// Artists
const artists = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
        featured: z.boolean().default(false),
        youtubeLinks: z.array(z.string()).optional(),
        externalLinks: z.array(
            z.object({
                label: z.string(),
                url: z.string().url(),
            })
        ).optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    apps,
    artists,
};
