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
    const artists = (await getCollection('artists')) as Array<CollectionEntry<'artists'>>;

    const appItems = apps
        .filter((app) => !app.data.draft)
        .map((app) => ({
            title: app.data.title,
            description: app.data.description,
            publishedDate: app.data.date,
            link: `/apps/${app.slug}/`,
            categories: app.data.tags || [],
        }));

    const artistItems = artists
        .filter((artist) => !artist.data.draft)
        .map((artist) => ({
            title: artist.data.title,
            description: artist.data.description,
            publishedDate: artist.data.date,
            link: `/apps/${artist.slug}/`,
            categories: artist.data.tags || [],
        }));

    // Combine all items and sort by date (reverse chronological)
    const allItems: RSSItem[] = [...appItems, ...artistItems].sort(
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
