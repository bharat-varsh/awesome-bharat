import type { ImageMetadata } from 'astro';
import { imageRegistry } from './imageRegistry.ts';

/**
 * Resolution order:
 * 1. explicit coverImage
 * 2. slug-based image
 * 3. default image
 */
export function resolveCoverImage(slug: string, coverImage?: string): ImageMetadata {
    if (coverImage && imageRegistry[coverImage]) {
        return imageRegistry[coverImage];
    }

    if (imageRegistry[slug]) {
        return imageRegistry[slug];
    }

    return imageRegistry.default;
}

/**
 * Resolve named images used inside a page
 * Example frontmatter:
 * images:
 *   hero: linkora-hero
 *   architecture: linkora-architecture
 */
export function resolvePageImages(images?: Record<string, string>): Record<string, ImageMetadata> {
    if (!images) return {};

    const resolved: Record<string, ImageMetadata> = {};

    for (const [slot, key] of Object.entries(images)) {
        resolved[slot] = imageRegistry[key] ?? imageRegistry.default;
    }

    return resolved;
}
