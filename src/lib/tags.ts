// Single source of truth for the site's tag vocabulary.
// Tags are stored as slugs in post frontmatter; display labels live here.

// Topic tags — the main organizers. Extend this list to add a new topic.
export const TOPIC_TAGS = [
  'philosophy',
  'ai',
  'memetics',
  'cyborg-evals',
  'rationality',
  'trip-reports',
  'drugs',
  'personal-life',
  'writing',
] as const;

// Meta / quality tags — styled specially, mostly hidden on public cards.
export const META_TAGS = ['HQ', 'LQ', 'personal', 'private'] as const;

export type TopicTag = (typeof TOPIC_TAGS)[number];
export type MetaTag = (typeof META_TAGS)[number];
export type Tag = TopicTag | MetaTag;

// Display names for slugs (only those that differ from a simple capitalization).
export const TAG_LABELS: Record<string, string> = {
  philosophy: 'Philosophy',
  ai: 'AI',
  memetics: 'Memetics',
  'cyborg-evals': 'Cyborg Evals',
  rationality: 'Rationality',
  'trip-reports': 'Trip Reports',
  drugs: 'Drugs',
  'personal-life': 'Personal Life',
  writing: 'Writing',
  HQ: 'HQ',
  LQ: 'LQ',
  personal: 'personal',
  private: 'private',
};

export function tagLabel(tag: string): string {
  return TAG_LABELS[tag] ?? tag;
}

export function isMeta(tag: string): boolean {
  return (META_TAGS as readonly string[]).includes(tag);
}

export function isTopic(tag: string): boolean {
  return (TOPIC_TAGS as readonly string[]).includes(tag);
}

// Topic tags only, in canonical order — for filter chips, tag index, etc.
export function topicTagsOf(tags?: string[]): string[] {
  if (!tags) return [];
  return TOPIC_TAGS.filter((t) => tags.includes(t));
}
