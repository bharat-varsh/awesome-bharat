/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                secondary: {
                    50:  '#02414E',
                    100: '#023D49',
                    200: '#023743',
                    300: '#02313D',
                    400: '#012B36',
                    500: '#01252F',
                    600: '#011F27',
                    700: '#011820',
                    800: '#010F16',
                    900: '#000708',
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.primary.600'),
                            '&:hover': {
                                color: theme('colors.primary.700'),
                            },
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            color: theme('colors.gray.900'),
                        },
                        code: {
                            color: theme('colors.pink.600'),
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.primary.400'),
                            '&:hover': {
                                color: theme('colors.primary.300'),
                            },
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            color: theme('colors.gray.100'),
                        },
                        strong: {
                            color: theme('colors.gray.100'),
                        },
                        code: {
                            color: theme('colors.pink.400'),
                            backgroundColor: theme('colors.gray.800'),
                        },
                        blockquote: {
                            color: theme('colors.gray.300'),
                            borderLeftColor: theme('colors.gray.700'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [typography],
};
