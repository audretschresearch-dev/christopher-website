/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#3872e9',
        background: '#f6f1e7',
        'header-bg': '#efe8da',
        text: '#232221',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-code': theme('colors.text'),
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              fontStyle: 'normal',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
