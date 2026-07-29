import type { Link } from '../content/config.js';

export interface CTA {
    label: string;
    url: string;
}

export interface CTAGroup {
    label: string;
    links: CTA[];
}

/** All possible data fields used across the 10 collection types for CTA resolution. */
export interface CTAData {
    type?: string;
    source?: string;
    storeLinks?: Link[];
    repositoryLinks?: Link[];
    website?: string;
    channelUrl?: string;
    buyUrl?: string;
    url?: string;
    repositoryUrl?: string;
    joinUrl?: string;
    platforms?: Link[];
    howToHelp?: Array<{ action: string; description?: string; url?: string }>;
    [key: string]: unknown;
}

/**
 * Determines the CTA links to display in the dropdown based on collection and content type.
 *
 * Priority logic:
 * - 'apps'            → storeLinks (Download), repositoryLinks (Source Code)
 * - 'persons'         → website (Visit)
 * - 'companies'       → website (Visit)
 * - 'channels'        → channelUrl (Subscribe)
 * - 'products'        → buyUrl (Buy), website (Visit)
 * - 'blogs'           → url (Read)
 * - 'projects'        → repositoryUrl (Contribute)
 * - 'communities'     → joinUrl (Join)
 * - 'podcasts'        → platforms (Listen)
 * - 'initiatives'     → howToHelp[0].url (Get Involved), website (Visit)
 */
export function getCTALinks(collection: string, data: CTAData): CTAGroup[] {
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
        if (data.website) {
            groups.push({
                label: 'Visit',
                links: [{ label: 'Website', url: data.website }],
            });
        }
    } else if (collection === 'channels') {
        if (data.channelUrl) {
            groups.push({
                label: 'Subscribe',
                links: [{ label: 'Channel', url: data.channelUrl }],
            });
        }
    } else if (collection === 'products') {
        if (data.buyUrl) {
            groups.push({
                label: 'Buy',
                links: [{ label: 'Buy', url: data.buyUrl }],
            });
        }
        if (data.website) {
            groups.push({
                label: 'Visit',
                links: [{ label: 'Website', url: data.website }],
            });
        }
    } else if (collection === 'blogs') {
        if (data.url) {
            groups.push({
                label: 'Read',
                links: [{ label: 'Website', url: data.url }],
            });
        }
    } else if (collection === 'projects') {
        if (data.repositoryUrl) {
            groups.push({
                label: 'Contribute',
                links: [{ label: 'Repository', url: data.repositoryUrl }],
            });
        }
    } else if (collection === 'communities') {
        if (data.joinUrl) {
            groups.push({
                label: 'Join',
                links: [{ label: 'Community', url: data.joinUrl }],
            });
        }
    } else if (collection === 'podcasts') {
        if (data.platforms && data.platforms.length > 0) {
            groups.push({
                label: 'Listen',
                links: data.platforms.map((link) => ({ label: link.label, url: link.url })),
            });
        }
    } else if (collection === 'initiatives') {
        if (data.howToHelp && data.howToHelp.length > 0 && data.howToHelp[0].url) {
            groups.push({
                label: 'Get Involved',
                links: [{ label: data.howToHelp[0].action, url: data.howToHelp[0].url }],
            });
        }
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
export function getPrimaryCTALabel(collection: string, data: CTAData): string | null {
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
    } else if (collection === 'channels') {
        if (data.channelUrl) {
            return 'Subscribe';
        }
    } else if (collection === 'products') {
        if (data.buyUrl || data.website) {
            return 'Buy';
        }
    } else if (collection === 'blogs') {
        if (data.url) {
            return 'Read';
        }
    } else if (collection === 'projects') {
        if (data.repositoryUrl) {
            return 'Contribute';
        }
    } else if (collection === 'communities') {
        if (data.joinUrl) {
            return 'Join';
        }
    } else if (collection === 'podcasts') {
        if ((data.platforms && data.platforms.length > 0) || data.website) {
            return 'Listen';
        }
    } else if (collection === 'initiatives') {
        if (
            (data.howToHelp && data.howToHelp.length > 0 && data.howToHelp[0].url) ||
            data.website
        ) {
            return 'Get Involved';
        }
    }

    return null;
}

/**
 * Gets the primary URL for the CTA button (first link in the primary group)
 */
export function getPrimaryCTAUrl(collection: string, data: CTAData): string | null {
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
    } else if (collection === 'channels') {
        if (data.channelUrl) {
            return data.channelUrl;
        }
    } else if (collection === 'products') {
        if (data.buyUrl) {
            return data.buyUrl;
        }
        if (data.website) {
            return data.website;
        }
    } else if (collection === 'blogs') {
        if (data.url) {
            return data.url;
        }
    } else if (collection === 'projects') {
        if (data.repositoryUrl) {
            return data.repositoryUrl;
        }
    } else if (collection === 'communities') {
        if (data.joinUrl) {
            return data.joinUrl;
        }
    } else if (collection === 'podcasts') {
        if (data.platforms && data.platforms.length > 0) {
            return data.platforms[0].url;
        }
        if (data.website) {
            return data.website;
        }
    } else if (collection === 'initiatives') {
        if (data.howToHelp && data.howToHelp.length > 0 && data.howToHelp[0].url) {
            return data.howToHelp[0].url;
        }
        if (data.website) {
            return data.website;
        }
    }

    return null;
}
