import type { CollectionEntry } from 'astro:content';

/**
 * Collections that participate in cross-cutting pages (domains, tags, categories).
 * All 10 configured collections are included; when content is added for a collection
 * it will automatically appear on domain, tag, and category pages.
 */
export const SCANNED_COLLECTIONS = [
    'apps',
    'persons',
    'companies',
    'channels',
    'products',
    'blogs',
    'projects',
    'communities',
    'podcasts',
    'initiatives',
] as const;

export type ScannedCollection = (typeof SCANNED_COLLECTIONS)[number];

/** Any entry from a scanned collection. */
export type ScannedEntry = CollectionEntry<ScannedCollection>;

/**
 * Collection-to-URL-path mapping.
 * Most collections use their own name; `persons` maps to `/people/`.
 */
export function getCollectionUrlPath(collection: string): string {
    return collection === 'persons' ? 'people' : collection;
}

/** Title field differs by collection: apps use `title`, everyone else uses `name`. */
export function getEntryTitle(item: ScannedEntry): string {
    return 'title' in item.data ? item.data.title : item.data.name;
}

/** apps use `description`; persons use `bio`; companies use `description` (same pattern for all new collections). */
export function getEntryDescription(item: ScannedEntry): string | undefined {
    if ('description' in item.data) return item.data.description;
    if ('bio' in item.data) return item.data.bio;
    return undefined;
}

/** apps/companies and most collections use `logo`; persons use `avatar`. */
export function getEntryImage(item: ScannedEntry): string | undefined {
    if ('logo' in item.data) return item.data.logo;
    if ('avatar' in item.data) return item.data.avatar;
    return undefined;
}

/** Human label + section id for grouping in the UI. */
export const COLLECTION_GROUP_META: Record<ScannedCollection, { title: string; id: string }> = {
    apps: { title: 'Apps', id: 'apps' },
    persons: { title: 'People', id: 'people' },
    companies: { title: 'Companies', id: 'companies' },
    channels: { title: 'Channels', id: 'channels' },
    products: { title: 'Products', id: 'products' },
    blogs: { title: 'Blogs', id: 'blogs' },
    projects: { title: 'Projects', id: 'projects' },
    communities: { title: 'Communities', id: 'communities' },
    podcasts: { title: 'Podcasts', id: 'podcasts' },
    initiatives: { title: 'Initiatives', id: 'initiatives' },
};
