import type { ImageMetadata } from 'astro';

import defaultCardImage from '@/assets/images/default-card-image.png';

import linkora from '@/assets/images/linkora.png';
import mindful from '@/assets/images/mindful.webp';
// import linkoraHero from '@/assets/images/linkora-hero.png';
// import linkoraArchitecture from '@/assets/images/linkora-architecture.png';
// import linkoraFlow from '@/assets/images/linkora-flow.png';

export const imageRegistry: Record<string, ImageMetadata> = {
    default: defaultCardImage,

    // logos
    linkora,
    mindful,

    // page images
    //   'linkora-hero': linkoraHero,
    //   'linkora-architecture': linkoraArchitecture,
    //   'linkora-flow': linkoraFlow,
};
