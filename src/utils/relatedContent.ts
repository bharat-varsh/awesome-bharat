import type { CollectionEntry } from 'astro:content';

/** All 10 Awesome Bharat collections. */
export type AnyCollection =
    | 'apps'
    | 'persons'
    | 'companies'
    | 'channels'
    | 'products'
    | 'blogs'
    | 'projects'
    | 'communities'
    | 'podcasts'
    | 'initiatives';

export type AnyCollectionEntry = CollectionEntry<AnyCollection>;

export type ScoredItem = {
    item: AnyCollectionEntry;
    score: number;
};

/**
 * Simple tag-based related content scoring that works for any collection.
 * Collections without a `tags` field gracefully score 0.
 */
export function getRelatedContentSimple(
    currentItem: AnyCollectionEntry,
    allItems: Array<AnyCollectionEntry>,
    _collectionName: string,
    maxResults: number = 8
): Array<AnyCollectionEntry> {
    const currentTags: string[] = currentItem.data?.tags ?? [];
    const currentTagSet = new Set(currentTags);

    const scored: ScoredItem[] = allItems
        .filter((item) => item.slug !== currentItem.slug)
        .map((item) => {
            const candidateTags: string[] = item.data?.tags ?? [];
            const score = candidateTags.filter((tag) => currentTagSet.has(tag)).length;
            return { item, score };
        })
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);

    return scored.map((result) => result.item);
}
