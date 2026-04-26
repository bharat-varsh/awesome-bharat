import type { CollectionEntry } from 'astro:content';
import type { Link } from '../content/config.js';

export interface CTA {
    label: string;
    url: string;
}

/**
 * Determines the primary call-to-action for a content item.
 * Priority: storeLinks > repositoryLinks > website
 */
export function getPrimaryCTA(
    data: {
        storeLinks?: Link[];
        repositoryLinks?: Link[];
        website?: string;
        source?: string;
    },
    _collection?: string
): CTA | null {
    // For apps: prioritize store links
    if (data.storeLinks && data.storeLinks.length > 0) {
        return {
            label: 'Download',
            url: data.storeLinks[0].url,
        };
    }

    // For open-source apps: show GitHub link
    if (data.repositoryLinks && data.repositoryLinks.length > 0) {
        return {
            label: 'View on GitHub',
            url: data.repositoryLinks[0].url,
        };
    }

    // For persons and companies: show website
    if (data.website) {
        return {
            label: 'Visit Website',
            url: data.website,
        };
    }

    return null;
}

/**
 * Get CTA for an app entry
 */
export function getAppCTA(app: CollectionEntry<'apps'>): CTA | null {
    return getPrimaryCTA(app.data, 'apps');
}

/**
 * Get CTA for a person entry
 */
export function getPersonCTA(person: CollectionEntry<'persons'>): CTA | null {
    return getPrimaryCTA({ website: person.data.website }, 'persons');
}

/**
 * Get CTA for a company entry
 */
export function getCompanyCTA(company: CollectionEntry<'companies'>): CTA | null {
    return getPrimaryCTA({ website: company.data.website }, 'companies');
}
