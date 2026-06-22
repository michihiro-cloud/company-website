import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDir = path.resolve('.', 'docs');
const outFile = path.resolve('.', 'src', 'data', 'generatedContent.json');

const files = fs.readdirSync(docsDir).filter((f) => f.endsWith('.md'));
const content = {};

for (const file of files) {
  const filePath = path.join(docsDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const slug = path.basename(file, '.md');
  content[slug] = {
    frontmatter: parsed.data || {},
    content: parsed.content || ''
  };
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(content, null, 2), 'utf8');
console.log('Generated', outFile);
