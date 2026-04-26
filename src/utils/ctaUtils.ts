import type { Link } from '../content/config.js';

export interface CTA {
    label: string;
    url: string;
}

export interface CTAGroup {
    label: string;
    links: CTA[];
}

/**
 * Determines the CTA links to display in the dropdown based on collection and content type.
 *
 * Priority logic:
 * - For 'apps' collection with type 'app': show storeLinks (Play Store, App Store, etc.)
 * - For 'apps' collection with open-source: show repositoryLinks (GitHub, etc.)
 * - For 'persons' collection: show website
 * - For 'companies' collection: show website
 */
export function getCTALinks(
    collection: string,
    data: {
        type?: string;
        source?: string;
        storeLinks?: Link[];
        repositoryLinks?: Link[];
        website?: string;
    }
): CTAGroup[] {
    const groups: CTAGroup[] = [];

    if (collection === 'apps') {
        // For apps, prioritize store links
        if (data.storeLinks && data.storeLinks.length > 0) {
            groups.push({
                label: 'Download',
                links: data.storeLinks.map((link) => ({ label: link.label, url: link.url })),
            });
        }

        // For open-source apps, also show repository links
        if (data.repositoryLinks && data.repositoryLinks.length > 0) {
            groups.push({
                label: 'Source Code',
                links: data.repositoryLinks.map((link) => ({ label: link.label, url: link.url })),
            });
        }
    } else if (collection === 'persons' || collection === 'companies') {
        // For persons and companies, show website
        if (data.website) {
            groups.push({
                label: 'Visit',
                links: [{ label: 'Website', url: data.website }],
            });
        }
    }

    return groups;
}

/**
 * Gets the primary CTA button label (single label for the button)
 */
export function getPrimaryCTALabel(
    collection: string,
    data: {
        type?: string;
        source?: string;
        storeLinks?: Link[];
        repositoryLinks?: Link[];
        website?: string;
    }
): string | null {
    if (collection === 'apps') {
        if (data.storeLinks && data.storeLinks.length > 0) {
            return 'Download';
        }
        if (data.repositoryLinks && data.repositoryLinks.length > 0) {
            return 'View on GitHub';
        }
    } else if (collection === 'persons' || collection === 'companies') {
        if (data.website) {
            return 'Visit Website';
        }
    }
    return null;
}

/**
 * Gets the primary URL for the CTA button (first link in the primary group)
 */
export function getPrimaryCTAUrl(
    collection: string,
    data: {
        type?: string;
        source?: string;
        storeLinks?: Link[];
        repositoryLinks?: Link[];
        website?: string;
    }
): string | null {
    if (collection === 'apps') {
        if (data.storeLinks && data.storeLinks.length > 0) {
            return data.storeLinks[0].url;
        }
        if (data.repositoryLinks && data.repositoryLinks.length > 0) {
            return data.repositoryLinks[0].url;
        }
    } else if (collection === 'persons' || collection === 'companies') {
        if (data.website) {
            return data.website;
        }
    }
    return null;
}
