import type { CollectionEntry } from 'astro:content';

export type SupportedCollection = 'apps' | 'persons' | 'companies';
type SupportedCollectionData = CollectionEntry<SupportedCollection>['data'];

const MATCHING_FIELDS_CONFIG: Record<SupportedCollection, string[]> = {
    apps: ['tags'],
    persons: ['tags'],
    companies: ['tags'],
};

function calculateRelevanceScore<K extends readonly (keyof SupportedCollectionData)[]>(
    currentItem: SupportedCollectionData,
    candidateItem: SupportedCollectionData,
    matchingFields: K
): number {
    let score = 0;

    for (const field of matchingFields) {
        const currentValue = currentItem[field];
        const candidateValue = candidateItem[field];

        if (Array.isArray(currentValue) && Array.isArray(candidateValue)) {
            const matches = currentValue.filter((v) => candidateValue.includes(v));
            score += matches.length;
        } else if (
            typeof currentValue === 'string' &&
            typeof candidateValue === 'string' &&
            currentValue === candidateValue
        ) {
            score += 2;
        }
    }

    return score;
}

function getRelatedContent(
    currentItem: CollectionEntry<SupportedCollection>,
    allItems: Array<CollectionEntry<SupportedCollection>>,
    collectionName: SupportedCollection,
    maxResults: number = 8
): Array<{ item: CollectionEntry<SupportedCollection>; score: number }> {
    const matchingFields = MATCHING_FIELDS_CONFIG[collectionName] || [];

    // Calculate score for all items
    const scored = allItems
        .filter((item) => item.slug !== currentItem.slug) // Exclude current item
        .map((item) => ({
            item,
            score: calculateRelevanceScore(currentItem.data, item.data, matchingFields),
        }))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);

    return scored;
}

export function getRelatedContentSimple(
    currentItem: CollectionEntry<SupportedCollection>,
    allItems: Array<CollectionEntry<SupportedCollection>>,
    collectionName: SupportedCollection,
    maxResults: number = 8
): Array<CollectionEntry<SupportedCollection>> {
    return getRelatedContent(currentItem, allItems, collectionName, maxResults).map(
        (result) => result.item
    );
}
