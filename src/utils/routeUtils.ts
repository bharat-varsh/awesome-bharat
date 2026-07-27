/**
 * Route-safe href resolver for cross-collection entries.
 *
 * Collection keys may not always match their public URL path prefix.
 * For example, the `persons` collection routes to `/people/{slug}`.
 *
 * Every cross-collection href in the project must go through this utility
 * to guarantee consistent routing.
 */

const ROUTE_PREFIX: Record<string, string> = { persons: 'people' };

/**
 * Build a canonical href for an entry given its collection key and slug.
 *
 * @example getEntryHref('apps', 'mindful')    → '/apps/mindful'
 * @example getEntryHref('persons', 'pawan-nagar') → '/people/pawan-nagar'
 */
export function getEntryHref(collection: string, slug: string): string {
    return `/${ROUTE_PREFIX[collection] ?? collection}/${slug}`;
}
