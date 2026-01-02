/**
 * RSS feed generator
 */

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import type { CollectionEntry } from 'astro:content';

interface RSSItem {
    title: string;
    description: string;
    publishedDate: Date;
    link: string;
    categories?: string[];
}

export async function GET(context: APIContext) {
    const apps = (await getCollection('apps')) as Array<CollectionEntry<'apps'>>;

    const appItems = apps
        .filter((app) => !app.data.draft)
        .map((app) => ({
            title: app.data.title,
            description: app.data.description,
            publishedDate: app.data.date,
            link: `/apps/${app.slug}/`,
            categories: app.data.tags || [],
        }));

    // Combine all items and sort by date (reverse chronological)
    const allItems: RSSItem[] = [...appItems].sort(
        (a, b) => b.publishedDate.valueOf() - a.publishedDate.valueOf()
    );

    return rss({
        title: 'Awesome Bharat',
        description: 'Latest content from all areas',
        site: context.site?.toString() || 'https://awesomebharat.com',
        items: allItems,
        customData: '<language>en-in</language>',
    });
}
