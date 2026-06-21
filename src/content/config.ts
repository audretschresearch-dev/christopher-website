import { defineCollection, z } from 'astro:content';

// Tags are stored without brackets (e.g. 'HQ'); brackets are display-only.
const tag = z.enum(['HQ', 'LQ', 'personal', 'private']);

// Shared schema for all public, date-sorted collections.
const publicSchema = z.object({
  title: z.string(),
  posted: z.coerce.date(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
  source: z.string().optional(),
  tags: z.array(tag).optional(),
  // When set, the piece links out to this URL instead of rendering a body page.
  externalUrl: z.string().url().optional(),
});

const blog = defineCollection({ type: 'content', schema: publicSchema });
const older = defineCollection({ type: 'content', schema: publicSchema });
const philosophy = defineCollection({ type: 'content', schema: publicSchema });
const cyborgEvals = defineCollection({ type: 'content', schema: publicSchema });
const ai = defineCollection({ type: 'content', schema: publicSchema });
const tripReports = defineCollection({ type: 'content', schema: publicSchema });

// Reading & Writing List: two sections driven by `listSection`.
const readingList = defineCollection({
  type: 'content',
  schema: publicSchema.extend({
    listSection: z.enum(['read', 'write']),
  }),
});

// Memetics: numbered sequence + standalone essays. `part` is optional now.
const memetics = defineCollection({
  type: 'content',
  schema: publicSchema.extend({
    part: z.number().optional(),
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

export const collections = {
  blog,
  memetics,
  older,
  notes,
  philosophy,
  'cyborg-evals': cyborgEvals,
  ai,
  'trip-reports': tripReports,
  'reading-writing-list': readingList,
};
