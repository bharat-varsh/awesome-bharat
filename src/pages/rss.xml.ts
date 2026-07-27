/**
 * Root RSS feed — includes all 10 content collections.
 */

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import {
    SCANNED_COLLECTIONS,
    getEntryTitle,
    getEntryDescription,
    type ScannedEntry,
} from '@/utils/collectionsToScan.ts';
import { getEntryHref } from '@/utils/routeUtils.ts';

interface RSSItem {
    title: string;
    description: string;
    pubDate: Date;
    link: string;
    categories?: string[];
}

/** Resolve a published date from any collection entry's available date fields. */
function resolveEntryDate(entry: ScannedEntry): Date {
    if ('date' in entry.data && entry.data.date instanceof Date) return entry.data.date;
    if ('founded' in entry.data && typeof entry.data.founded === 'number')
        return new Date(entry.data.founded, 0, 1);
    return new Date();
}

export async function GET(context: APIContext) {
    const allEntries = await Promise.all(
        SCANNED_COLLECTIONS.map((name) => getCollection(name))
    );

    const items: RSSItem[] = [];
    for (const [idx, entries] of allEntries.entries()) {
        const collection = SCANNED_COLLECTIONS[idx];
        for (const entry of entries as ScannedEntry[]) {
            if (entry.data.draft) continue;
            items.push({
                title: getEntryTitle(entry),
                description: getEntryDescription(entry) ?? '',
                pubDate: resolveEntryDate(entry),
                link: getEntryHref(collection, entry.slug),
                categories: ('tags' in entry.data ? entry.data.tags : []) as string[],
            });
        }
    }

    // Reverse chronological sort
    items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

    return rss({
        title: 'Awesome Bharat',
        description: 'A curated collection of remarkable things made by Indians — apps, people, companies, channels, products, blogs, projects, communities, podcasts, and initiatives.',
        site: context.site?.toString() || 'https://awesomebharat.com',
        items,
        customData: '<language>en-in</language>',
    });
}
