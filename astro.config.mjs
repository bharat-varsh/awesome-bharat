import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default defineConfig({
    site: 'https://awesomebharat.com',
    integrations: [mdx(), sitemap()],
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
