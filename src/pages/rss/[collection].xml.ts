/**
 * Per-collection RSS feeds.
 *
 * Generates a dedicated RSS feed for each content collection at:
 *   /rss/apps.xml
 *   /rss/people.xml
 *   /rss/companies.xml
 *   /rss/channels.xml
 *   /rss/products.xml
 *   /rss/blogs.xml
 *   /rss/projects.xml
 *   /rss/communities.xml
 *   /rss/podcasts.xml
 *   /rss/initiatives.xml
 */

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import {
    SCANNED_COLLECTIONS,
    getEntryTitle,
    getEntryDescription,
    COLLECTION_GROUP_META,
    type ScannedEntry,
} from '@/utils/collectionsToScan.ts';
import { getEntryHref } from '@/utils/routeUtils.ts';

export function getStaticPaths() {
    return SCANNED_COLLECTIONS.map((name) => ({
        params: { collection: name },
    }));
}

/** Resolve a published date from any collection entry's available date fields. */
function resolveEntryDate(entry: ScannedEntry): Date {
    if ('date' in entry.data && entry.data.date instanceof Date) return entry.data.date;
    if ('founded' in entry.data && typeof entry.data.founded === 'number')
        return new Date(entry.data.founded, 0, 1);
    return new Date();
}

export async function GET(context: APIContext) {
    const collection = context.params.collection as string;
    const meta = COLLECTION_GROUP_META[collection as keyof typeof COLLECTION_GROUP_META] ?? {
        title: collection.charAt(0).toUpperCase() + collection.slice(1),
        id: collection,
    };

    const entries = (await getCollection(collection)) as ScannedEntry[];

    const items = entries
        .filter((e) => !e.data.draft)
        .map((e) => ({
            title: getEntryTitle(e),
            description: getEntryDescription(e) ?? '',
            link: getEntryHref(collection, e.slug),
            pubDate: resolveEntryDate(e),
        }))
        .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

    return rss({
        title: `${meta.title} — Awesome Bharat`,
        description: `Curated ${meta.title.toLowerCase()} made by Indians — featured on Awesome Bharat.`,
        site: context.site?.toString() || 'https://awesomebharat.com',
        items,
        customData: '<language>en-in</language>',
    });
}
