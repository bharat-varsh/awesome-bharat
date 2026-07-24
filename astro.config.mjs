import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default defineConfig({
    site: 'https://awesomebharat.com',
    integrations: [mdx(), react(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
    vite: {
        plugins: [tailwindcss()],
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
