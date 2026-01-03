import { defineCollection, z } from 'astro:content';

/**
 * Define schema for different content types
 */

const authorSchema = z.object({
    slug: z.string(), // links to /persons/[slug]
    type: z.enum(['company', 'person']),
});

export type Author = z.infer<typeof authorSchema>;

// Applications
const apps = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        authors: z.array(authorSchema),
        type: z.enum(['app', 'plugin']),
        devices: z.array(z.enum(['auto', 'desktop', 'mobile', 'tv', 'watch'])),
        source: z.enum(['closed-source', 'openSource']),
        paid: z.boolean(),
        offline: z.boolean(),
        category: z.enum([
            'art',
            'beauty',
            'booksAndReference',
            'business',
            'children',
            'comics',
            'communication',
            'dating',
            'education',
            'entertainment',
            'events',
            'finance',
            'foodAndDrinks',
            'games',
            'healthAndFitness',
            'house',
            'libraries',
            'lifestyle',
            'navigation',
            'medical',
            'musicAndAudio',
            'newsAndMagazines',
            'parenting',
            'personalization',
            'photography',
            'productivity',
            'shopping',
            'social',
            'sports',
            'tools',
            'travel',
            'vehicles',
            'video',
            'watchFaces',
            'weather',
        ]),
        tags: z.array(z.string()),
        website: z.string().url().optional(),
        youtubeVideoLinks: z.array(z.string().url()).optional(),
        youtubeShortsLinks: z.array(z.string().url()).optional(),
        repositoryLinks: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        storeLinks: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        externalLinks: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        socials: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        logo: z.string().optional(),
        date: z
            .date()
            .optional()
            .default(() => new Date()),
        draft: z.boolean().default(false),
    }),
});

const persons = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        bio: z.string().optional(),
        email: z.string().email().optional(),
        website: z.string().url().optional(),
        socials: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        avatar: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const companies = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        founded: z.number().optional(),
        location: z.string().optional(),
        website: z.string().url().optional(),
        socials: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                })
            )
            .optional(),
        members: z
            .array(
                z.object({
                    slug: z.string(), // links to /persons/[slug]
                    role: z.string(),
                })
            )
            .optional(),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    apps,
    persons,
    companies,
};
