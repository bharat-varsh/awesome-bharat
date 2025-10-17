import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const apps = await getCollection("apps");
    return rss({
        title: 'Awesome Bharat',
        description: 'Collection of awesomeness you\'ll find in Bharat',
        site: context.site,
        items: apps.map((app) => ({
            title: app.data.title,
            pubDate: app.data.pubDate,
            description: app.data.description,
            link: `/apps/${app.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}