import type { ImageMetadata } from 'astro';

import defaultCardImage from '@/assets/images/default-card-image.png';

// App / card images
import linkora from '@/assets/images/linkora.png';
// import linkoraHero from '@/assets/images/linkora-hero.png';
// import linkoraArchitecture from '@/assets/images/linkora-architecture.png';
// import linkoraFlow from '@/assets/images/linkora-flow.png';

export const imageRegistry: Record<string, ImageMetadata> = {
    // defaults
    default: defaultCardImage,

    // card / cover images
    linkora,

    // page images
    //   'linkora-hero': linkoraHero,
    //   'linkora-architecture': linkoraArchitecture,
    //   'linkora-flow': linkoraFlow,
};
