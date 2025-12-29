import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default defineConfig({
    site: 'https://bharat-varsh.github.io',
    base: "/awesome-bharat",
    integration: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
    // optimization
    vite: {
        resolve: {
            alias: {
                '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
            },
        },
        build: {
            cssMinify: 'lightningcss',
        },
    },
});
