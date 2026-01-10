import type { ImageMetadata } from 'astro';

// import defaultCardImage from '@/assets/images/default-card-image.png';
import defaultCardImage from '@/assets/images/brand-logo.svg';

import linkora from '@/assets/images/linkora.png';
import mindful from '@/assets/images/mindful.png';
import neend from '@/assets/images/neend.webp';
// import linkoraHero from '@/assets/images/linkora-hero.png';
// import linkoraArchitecture from '@/assets/images/linkora-architecture.png';
// import linkoraFlow from '@/assets/images/linkora-flow.png';

export const imageRegistry: Record<string, ImageMetadata> = {
    default: defaultCardImage,

    // logos
    linkora,
    mindful,
    neend,

    // page images
    //   'linkora-hero': linkoraHero,
    //   'linkora-architecture': linkoraArchitecture,
    //   'linkora-flow': linkoraFlow,
};
