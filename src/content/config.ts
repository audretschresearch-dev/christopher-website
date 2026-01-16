import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    posted: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    source: z.string().optional(),
  }),
});

const memetics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    posted: z.coerce.date(),
    part: z.number(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const older = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    posted: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

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

export const collections = { blog, memetics, older, notes };
