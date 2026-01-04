import type { ImageMetadata } from 'astro';

import defaultCardImage from '@/assets/images/default-card-image.png';

import linkora from '@/assets/images/linkora.png';
import mindful from '@/assets/images/mindful.png';
// import linkoraHero from '@/assets/images/linkora-hero.png';
// import linkoraArchitecture from '@/assets/images/linkora-architecture.png';
// import linkoraFlow from '@/assets/images/linkora-flow.png';

export const imageRegistry: Record<string, ImageMetadata> = {
    default: defaultCardImage,

    // logos
    linkora,
    mindful,
    'mindful-copy': mindful,
    'mindful-copy-2': mindful,
    'mindful-copy-3': mindful,
    'mindful-copy-4': mindful,
    'mindful-copy-5': mindful,
    'mindful-copy-6': mindful,
    'mindful-copy-7': mindful,
    'mindful-copy-8': mindful,
    'mindful-copy-9': mindful,
    'mindful-copy-10': mindful,
    'mindful-copy-11': mindful,
    'mindful-copy-12': mindful,
    'mindful-copy-13': mindful,
    'mindful-copy-14': mindful,
    'mindful-copy-15': mindful,
    'mindful-copy-16': mindful,
    'mindful-copy-17': mindful,
    'mindful-copy-18': mindful,
    'mindful-copy-19': mindful,

    // page images
    //   'linkora-hero': linkoraHero,
    //   'linkora-architecture': linkoraArchitecture,
    //   'linkora-flow': linkoraFlow,
};
