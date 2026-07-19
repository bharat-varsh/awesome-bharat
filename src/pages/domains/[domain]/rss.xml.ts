import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import {
    SCANNED_COLLECTIONS,
    getEntryTitle,
    getEntryDescription,
    type ScannedEntry,
} from '@/utils/collectionsToScan.ts';
import { getDomainMeta } from '@/utils/domainMeta.ts';

export async function getStaticPaths() {
    const domains = new Set<string>();
    for (const name of SCANNED_COLLECTIONS) {
        const entries = (await getCollection(name)) as ScannedEntry[];
        for (const e of entries) {
            if (e.data.draft) continue;
            for (const d of e.data.domains ?? []) domains.add(d);
        }
    }
    return [...domains].map((domain) => ({ params: { domain } }));
}

export async function GET(context: APIContext) {
    const domain = context.params.domain as string;
    const meta = getDomainMeta(domain);

    const items: Array<{ title: string; description: string; link: string }> = [];
    for (const name of SCANNED_COLLECTIONS) {
        const entries = (await getCollection(name)) as ScannedEntry[];
        for (const e of entries) {
            if (e.data.draft || !(e.data.domains ?? []).includes(domain)) continue;
            items.push({
                title: getEntryTitle(e),
                description: getEntryDescription(e) ?? '',
                link: `/${e.collection}/${e.slug}`,
            });
        }
    }

    return rss({
        title: `${meta.label} — Awesome Bharat`,
        description: meta.blurb,
        site: context.site!,
        items,
    });
}