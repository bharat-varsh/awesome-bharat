import type { CollectionEntry } from 'astro:content';

/**
 * Collections that participate in cross-cutting pages (domains, tags, categories).
 * When the pageless collections (channels, products, blogs, projects, communities,
 * podcasts, initiatives) get built out, add their names here and they will appear
 * on every domain page automatically.
 */
export const SCANNED_COLLECTIONS = ['apps', 'persons', 'companies'] as const;

export type ScannedCollection = (typeof SCANNED_COLLECTIONS)[number];

/** Any entry from a scanned collection. */
export type ScannedEntry = CollectionEntry<ScannedCollection>;

/** Title field differs by collection: apps use `title`, everyone else uses `name`. */
export function getEntryTitle(item: ScannedEntry): string {
    return 'title' in item.data ? item.data.title : item.data.name;
}

/** apps use `description`; persons use `bio`; companies use `description`. */
export function getEntryDescription(item: ScannedEntry): string | undefined {
    if ('description' in item.data) return item.data.description;
    if ('bio' in item.data) return item.data.bio;
    return undefined;
}

/** apps/companies use `logo`; persons use `avatar`. */
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
};
