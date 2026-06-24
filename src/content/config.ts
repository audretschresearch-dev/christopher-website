import { defineCollection, z } from 'astro:content';

// Tag vocabulary (typo-safe). Topic tags + meta/quality tags.
// Keep this in sync with src/lib/tags.ts.
const tag = z.enum([
  // topic
  'philosophy',
  'ai',
  'memetics',
  'cyborg-evals',
  'rationality',
  'trip-reports',
  'drugs',
  'personal-life',
  'writing',
  // meta
  'HQ',
  'LQ',
  'personal',
  'private',
]);

// One pool of public posts, organized by tags.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    posted: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    source: z.string().optional(),
    tags: z.array(tag).optional(),
    // When set, the post links OUT to this URL instead of rendering a body page.
    externalUrl: z.string().url().optional(),
    // Optional: ordering within the memetics sequence (parts 1, 2, 3...).
    part: z.number().optional(),
    // Optional: 'write' marks the "things I want to write about" list item.
    listSection: z.enum(['read', 'write']).optional(),
  }),
});

// Private, password-gated notes — unchanged, separate from the public pool.
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    created: z.coerce.date().optional(),
    modified: z.coerce.date().optional(),
    source: z.string(),
    folder: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts, notes };
