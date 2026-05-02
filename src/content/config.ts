import { defineCollection, z } from 'astro:content';

/**
 * Define schema for different content types
 */

const authorSchema = z.object({
    slug: z.string(), // links to /persons/[slug]
    type: z.enum(['company', 'person']),
});

const linkSchema = z.object({
    label: z.string(),
    url: z.string().url(),
});

const domainEnum = z.enum([
    'technology',
    'space',
    'defense',
    'artificialIntelligence',
    'health',
    'mentalHealth',
    'environment',
    'agriculture',
    'cleanEnergy',
    'education',
    'research',
    'startups',
    'finance',
    'manufacturing',
    'socialImpact',
    'governance',
    'ruralDevelopment',
    'arts',
    'music',
    'cinema',
    'literature',
    'heritage',
    'sports',
    'fitness',
    'infrastructure',
    'transportation',
    'digitalIndia',
    'cybersecurity',
    'gaming',
]);

export type Author = z.infer<typeof authorSchema>;
export type Link = z.infer<typeof linkSchema>;
export type Domain = z.infer<typeof domainEnum>;

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
        source: z.enum(['closed-source', 'open-source']),
        paid: z.boolean(),
        ads: z.boolean(),
        offline: z.boolean(),
        categories: z.array(
            z.enum([
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
            ])
        ),
        tags: z.array(z.string()),
        website: z.string().url().optional(),
        youtubeVideoIds: z.array(z.string()).optional(),
        youtubeShortsIds: z.array(z.string()).optional(),
        repositoryLinks: z.array(linkSchema).optional(),
        storeLinks: z.array(linkSchema).optional(),
        screenshots: z
            .array(
                z.object({
                    url: z.string().url(),
                })
            )
            .optional(),
        externalLinks: z.array(linkSchema).optional(),
        socials: z.array(linkSchema).optional(),
        logo: z.string().optional(),
        domains: z.array(domainEnum).default([]),
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
        featured: z.boolean().default(false),
        name: z.string(),
        bio: z.string().optional(),
        title: z.string().optional(),
        domains: z.array(domainEnum).default([]),
        email: z.string().email().optional(),
        website: z.string().url().optional(),
        socials: z.array(linkSchema).optional(),
        achievements: z.array(z.string()).optional(),
        avatar: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
    }),
});

const companies = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string().optional(),
        founded: z.number().optional(),
        location: z.string().optional(),
        domains: z.array(domainEnum).default([]),
        website: z.string().url().optional(),
        socials: z.array(linkSchema).optional(),
        tags: z.array(z.string()).default([]),
        members: z
            .array(
                z.object({
                    slug: z.string(),
                    role: z.string(),
                })
            )
            .optional(),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const channels = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        channelUrl: z.string().url(),
        channelId: z.string().optional(),
        topics: z.array(z.string()),
        language: z.array(z.string()),
        domains: z.array(domainEnum).default([]),
        authors: z.array(authorSchema).optional(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        featuredVideoIds: z.array(z.string()).optional(),
        subscriberRange: z.enum(['<1K', '1K-10K', '10K-100K', '100K-1M', '1M+']).optional(),
        draft: z.boolean().default(false),
    }),
});

const products = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        category: z.string(),
        domains: z.array(domainEnum).default([]),
        buyUrl: z.string().url().optional(),
        website: z.string().url().optional(),
        authors: z.array(authorSchema).optional(),
        tags: z.array(z.string()),
        paid: z.boolean().default(true),
        priceRange: z.string().optional(),
        madeIn: z.string().default('India'),
        logo: z.string().optional(),
        screenshots: z
            .array(
                z.object({
                    url: z.string().url(),
                })
            )
            .optional(),
        draft: z.boolean().default(false),
    }),
});

const blogs = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        url: z.string().url(),
        rssUrl: z.string().url().optional(),
        topics: z.array(z.string()),
        language: z.array(z.string()).default(['English']),
        domains: z.array(domainEnum).default([]),
        authors: z.array(authorSchema).optional(),
        frequency: z.enum(['daily', 'weekly', 'biweekly', 'monthly', 'irregular']).optional(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        repositoryUrl: z.string().url(),
        domains: z.array(domainEnum).default([]),
        language: z.array(z.string()),
        authors: z.array(authorSchema).optional(),
        license: z.string().optional(),
        tags: z.array(z.string()),
        starsRange: z.enum(['<100', '100-1K', '1K-10K', '10K+']).optional(),
        website: z.string().url().optional(),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const communities = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        platform: z.enum(['discord', 'telegram', 'slack', 'reddit', 'forum', 'other']),
        joinUrl: z.string().url(),
        domains: z.array(domainEnum).default([]),
        topics: z.array(z.string()),
        memberRange: z.enum(['<100', '100-1K', '1K-10K', '10K-100K', '100K+']).optional(),
        authors: z.array(authorSchema).optional(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const podcasts = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        website: z.string().url().optional(),
        domains: z.array(domainEnum).default([]),
        platforms: z.array(linkSchema),
        topics: z.array(z.string()),
        language: z.array(z.string()).default(['English']),
        authors: z.array(authorSchema).optional(),
        frequency: z.enum(['daily', 'weekly', 'biweekly', 'monthly', 'irregular']).optional(),
        episodeCount: z.number().optional(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const initiatives = defineCollection({
    type: 'content',
    schema: z.object({
        featured: z.boolean().default(false),
        name: z.string(),
        description: z.string(),
        mission: z.string().optional(),
        domains: z.array(domainEnum).default([]),
        website: z.string().url().optional(),
        impact: z.array(z.string()).optional(),
        howToHelp: z
            .array(
                z.object({
                    action: z.string(),
                    description: z.string().optional(),
                    url: z.string().url().optional(),
                })
            )
            .optional(),
        founded: z.number().optional(),
        location: z.string().optional(),
        authors: z.array(authorSchema).optional(),
        socials: z.array(linkSchema).optional(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    apps,
    persons,
    companies,
    channels,
    products,
    blogs,
    projects,
    communities,
    podcasts,
    initiatives,
};
