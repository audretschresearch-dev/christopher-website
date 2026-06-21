/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm "personal archive" palette
        accent: '#315c48',          // muted green
        'accent-soft': '#e4eee7',
        background: '#f7f3ea',       // warm paper
        surface: '#fffaf0',          // lighter card surface
        'header-bg': '#f7f3ea',      // header matches the page now
        text: '#1f2320',             // ink
        muted: '#6f6a60',            // quiet metadata
        rule: '#ded6c8',             // hairline rules
      },
      fontFamily: {
        // Bookish serif for body & headings; clean sans for nav/metadata
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        reading: '720px',   // main column for essays
        article: '680px',   // article text column
        home: '860px',      // slightly wider homepage / nav / footer
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-quotes': '#343832',
            '--tw-prose-code': theme('colors.text'),
            '--tw-prose-hr': theme('colors.rule'),
            fontFamily: theme('fontFamily.serif').join(', '),
            lineHeight: '1.72',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(', '),
              letterSpacing: '-0.02em',
            },
            h2: {
              marginTop: '3rem',
              paddingTop: '1.25rem',
              borderTop: `1px solid ${theme('colors.rule')}`,
              fontSize: '1.35rem',
            },
            a: {
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.accent'),
                backgroundColor: theme('colors.accent-soft'),
              },
            },
            blockquote: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '1rem',
              borderLeftWidth: '3px',
              borderLeftColor: theme('colors.accent'),
              fontStyle: 'normal',
              color: '#343832',
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
