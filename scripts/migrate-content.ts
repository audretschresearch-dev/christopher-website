import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../../output');
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const NOTES_DIR = path.join(__dirname, '../src/content/notes');

// Published LessWrong posts (non-draft) go to blog
const PUBLISHED_LESSWRONG = [
  'In_Defense_of_Alcohol.md',
  'If_Moral_Realism_is_true_then_the_Orthogonality_Thesis_is_false.md',
  'Lumina_Probiotic_worked_for_me.md',
  'Why_did_I_believe_Oliver_Sacks.md',
];

function slugify(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/_/g, '-')
    .replace(/^DRAFT-/, '')
    .toLowerCase();
}

function parseMarkdown(content: string): { frontmatter: Record<string, any>; body: string } {
  // Normalize line endings to \n
  const normalizedContent = content.replace(/\r\n/g, '\n');

  const match = normalizedContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: normalizedContent };
  }

  const frontmatterLines = match[1].split('\n');
  const frontmatter: Record<string, any> = {};

  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      frontmatter[key] = value;
    }
  }

  return { frontmatter, body: match[2] };
}

function transformBlogPost(content: string, filename: string): string {
  const { frontmatter, body } = parseMarkdown(content);

  const newFrontmatter = {
    title: frontmatter.title || filename.replace(/\.md$/, '').replace(/_/g, ' '),
    posted: frontmatter.posted || new Date().toISOString(),
    description: '',
    draft: false,
    source: 'LessWrong',
  };

  return `---
title: "${newFrontmatter.title}"
posted: ${newFrontmatter.posted}
draft: false
source: LessWrong
---

${body.trim()}
`;
}

function transformNote(content: string, filename: string, source: string): string {
  const { frontmatter, body } = parseMarkdown(content);

  let title = frontmatter.title || frontmatter.subject || filename.replace(/\.md$/, '').replace(/_/g, ' ');
  // Clean up DRAFT_ prefix from title
  if (title.startsWith('DRAFT ')) {
    title = title.slice(6);
  }

  let created = frontmatter.created || frontmatter.date || frontmatter.posted;
  let modified = frontmatter.modified || frontmatter.last_edited;
  let folder = frontmatter.folder;

  const isDraft = filename.startsWith('DRAFT_') || frontmatter.draft === 'True';

  let frontmatterStr = `---
title: "${title.replace(/"/g, '\\"')}"
created: ${created || new Date().toISOString()}`;

  if (modified) {
    frontmatterStr += `\nmodified: ${modified}`;
  }

  frontmatterStr += `\nsource: ${source}`;

  if (folder) {
    frontmatterStr += `\nfolder: "${folder}"`;
  }

  frontmatterStr += `\ndraft: ${isDraft}
---

${body.trim()}
`;

  return frontmatterStr;
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function migrateContent() {
  // Ensure directories exist
  ensureDir(BLOG_DIR);
  ensureDir(path.join(NOTES_DIR, 'lesswrong'));
  ensureDir(path.join(NOTES_DIR, 'gmail'));
  ensureDir(path.join(NOTES_DIR, 'notion'));
  ensureDir(path.join(NOTES_DIR, 'google-docs'));

  let blogCount = 0;
  let notesCount = 0;

  // Process LessWrong files
  const lesswrongDir = path.join(OUTPUT_DIR, 'lesswrong');
  if (fs.existsSync(lesswrongDir)) {
    for (const file of fs.readdirSync(lesswrongDir)) {
      if (!file.endsWith('.md')) continue;

      const content = fs.readFileSync(path.join(lesswrongDir, file), 'utf-8');
      const slug = slugify(file);

      if (PUBLISHED_LESSWRONG.includes(file)) {
        // Published post -> blog
        const transformed = transformBlogPost(content, file);
        fs.writeFileSync(path.join(BLOG_DIR, `${slug}.md`), transformed);
        blogCount++;
        console.log(`[blog] ${file} -> ${slug}.md`);
      } else {
        // Draft -> notes
        const transformed = transformNote(content, file, 'LessWrong');
        fs.writeFileSync(path.join(NOTES_DIR, 'lesswrong', `${slug}.md`), transformed);
        notesCount++;
        console.log(`[notes/lesswrong] ${file} -> ${slug}.md`);
      }
    }
  }

  // Process Gmail files
  const gmailDir = path.join(OUTPUT_DIR, 'gmail');
  if (fs.existsSync(gmailDir)) {
    for (const file of fs.readdirSync(gmailDir)) {
      if (!file.endsWith('.md')) continue;

      const content = fs.readFileSync(path.join(gmailDir, file), 'utf-8');
      const slug = slugify(file);
      const transformed = transformNote(content, file, 'Gmail');
      fs.writeFileSync(path.join(NOTES_DIR, 'gmail', `${slug}.md`), transformed);
      notesCount++;
      console.log(`[notes/gmail] ${file} -> ${slug}.md`);
    }
  }

  // Process Notion files
  const notionDir = path.join(OUTPUT_DIR, 'notion');
  if (fs.existsSync(notionDir)) {
    for (const file of fs.readdirSync(notionDir)) {
      if (!file.endsWith('.md')) continue;

      const content = fs.readFileSync(path.join(notionDir, file), 'utf-8');
      const slug = slugify(file);
      const transformed = transformNote(content, file, 'Notion');
      fs.writeFileSync(path.join(NOTES_DIR, 'notion', `${slug}.md`), transformed);
      notesCount++;
      console.log(`[notes/notion] ${file} -> ${slug}.md`);
    }
  }

  // Process Google Docs files
  const gdocsDir = path.join(OUTPUT_DIR, 'google-docs');
  if (fs.existsSync(gdocsDir)) {
    for (const file of fs.readdirSync(gdocsDir)) {
      if (!file.endsWith('.md')) continue;

      const content = fs.readFileSync(path.join(gdocsDir, file), 'utf-8');
      const slug = slugify(file);
      const transformed = transformNote(content, file, 'Google Docs');
      fs.writeFileSync(path.join(NOTES_DIR, 'google-docs', `${slug}.md`), transformed);
      notesCount++;
      console.log(`[notes/google-docs] ${file} -> ${slug}.md`);
    }
  }

  console.log(`\nMigration complete!`);
  console.log(`  Blog posts: ${blogCount}`);
  console.log(`  Notes: ${notesCount}`);
  console.log(`  Total: ${blogCount + notesCount}`);
}

migrateContent();
