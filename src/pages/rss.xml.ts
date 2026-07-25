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
    const [apps, companies] = await Promise.all([
        getCollection('apps') as Promise<Array<CollectionEntry<'apps'>>>,
        getCollection('companies') as Promise<Array<CollectionEntry<'companies'>>>,
    ]);

    const appItems = apps
        .filter((app) => !app.data.draft)
        .map((app) => ({
            title: app.data.title,
            description: app.data.description,
            publishedDate: app.data.date,
            link: `/apps/${app.slug}/`,
            categories: app.data.tags || [],
        }));

    const companyItems = companies
        .filter((company) => !company.data.draft)
        .map((company) => ({
            title: company.data.name,
            description: company.data.description || '',
            publishedDate: new Date(company.data.founded || Date.now()),
            link: `/companies/${company.slug}/`,
            categories: company.data.tags || [],
        }));

    // Combine all items and sort by date (reverse chronological)
    const allItems: RSSItem[] = [...appItems, ...companyItems].sort(
        (a, b) => b.publishedDate.valueOf() - a.publishedDate.valueOf()
    );

    return rss({
        title: 'Awesome Bharat',
        description: 'Latest apps and companies from Awesome Bharat',
        site: context.site?.toString() || 'https://awesomebharat.com',
        items: allItems,
        customData: '<language>en-in</language>',
    });
}
