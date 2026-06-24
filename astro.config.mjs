import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  // Old category URLs → new tags-primary URLs. Preserves any external links.
  redirects: {
    // Old listing pages → the Writing hub
    '/blog': '/writing',
    '/philosophy': '/writing',
    '/ai': '/writing',
    '/memetics': '/writing',
    '/cyborg-evals': '/writing',
    '/trip-reports': '/writing',
    '/older': '/writing',
    '/reading-writing-list': '/writing',
    // Individual posts that had a body page → /writing/<slug>
    '/philosophy/ai-identity': '/writing/ai-identity',
    '/philosophy/claudes-constitution-is-an-excellent-guide-for-humans-too': '/writing/claudes-constitution-is-an-excellent-guide-for-humans-too',
    '/philosophy/consilience-why-i-think-we-live-in-a-simulation': '/writing/consilience-why-i-think-we-live-in-a-simulation',
    '/philosophy/epstein-and-my-world-model': '/writing/epstein-and-my-world-model',
    '/philosophy/notes-on-open-socrates': '/writing/notes-on-open-socrates',
    '/ai/disagreeing-with-janus-and-funding-philosophers': '/writing/disagreeing-with-janus-and-funding-philosophers',
    '/ai/llm-vs-human-energy-data-compute': '/writing/llm-vs-human-energy-data-compute',
    '/ai/mark-fisher-and-claude': '/writing/mark-fisher-and-claude',
    '/ai/toward-a-superphilosopher-ai': '/writing/toward-a-superphilosopher-ai',
    '/memetics/1-memetics': '/writing/1-memetics',
    '/memetics/2-we-are-hosts-for-memes': '/writing/2-we-are-hosts-for-memes',
    '/memetics/3-egregores': '/writing/3-egregores',
    '/memetics/egregores-and-identity-memes': '/writing/egregores-and-identity-memes',
    '/memetics/how-to-examine-a-memes-fitness': '/writing/how-to-examine-a-memes-fitness',
    '/memetics/memetics-examples-and-links': '/writing/memetics-examples-and-links',
    '/memetics/memetics-notes': '/writing/memetics-notes',
    '/memetics/properties-of-memes-that-spread': '/writing/properties-of-memes-that-spread',
    '/cyborg-evals/cyborg-evals': '/writing/cyborg-evals',
    '/cyborg-evals/we-need-to-get-serious-about-uplift-studies': '/writing/we-need-to-get-serious-about-uplift-studies',
    '/cyborg-evals/youre-gonna-need-a-bigger-boat-benchmark-metr': '/writing/youre-gonna-need-a-bigger-boat-benchmark-metr',
    '/trip-reports/monster-trucks-in-motor-city': '/writing/monster-trucks-in-motor-city',
    '/older/against-algernons-argument': '/writing/against-algernons-argument',
    '/older/ghb-much-more-than-you-wanted-to-know': '/writing/ghb-much-more-than-you-wanted-to-know',
    '/older/politics-and-the-english-language': '/writing/politics-and-the-english-language',
    '/blog/being-a-type': '/writing/being-a-type',
    '/blog/gollumization': '/writing/gollumization',
    '/blog/if-moral-realism-is-true-then-the-orthogonality-thesis-is-false': '/writing/if-moral-realism-is-true-then-the-orthogonality-thesis-is-false',
    '/blog/in-defense-of-alcohol': '/writing/in-defense-of-alcohol',
    '/blog/lumina-probiotic-worked-for-me': '/writing/lumina-probiotic-worked-for-me',
    '/blog/problems-with-the-possessed-machines': '/writing/problems-with-the-possessed-machines',
    '/blog/psa-predictions-markets-often-have-very-low-liquidity-be-careful-citing-them': '/writing/psa-predictions-markets-often-have-very-low-liquidity-be-careful-citing-them',
    '/blog/what-i-learned-in-2025': '/writing/what-i-learned-in-2025',
    '/blog/why-did-i-believe-oliver-sacks': '/writing/why-did-i-believe-oliver-sacks',
    '/reading-writing-list/things-i-want-to-write-about': '/writing/things-i-want-to-write-about',
  },
});
