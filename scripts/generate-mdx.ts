/**
 * Generate MDX files from products.ts
 * Run: npx tsx scripts/generate-mdx.ts
 *
 * After running, products are loaded from MDX by getAllProducts().
 * You only need to edit products.ts — re-run this script to sync.
 */
import fs from 'fs';
import path from 'path';

// Read products.ts directly as text to extract the Product[] array
const productsPath = path.resolve('src/data/products.ts');
let raw = fs.readFileSync(productsPath, 'utf-8');

// Remove imports and type annotations to get raw JS
raw = raw.replace(/^import .+$/gm, '');
raw = raw.replace(/^export /gm, '');
raw = raw.replace(/const productsData: Product\[\] = /, 'const productsData = ');

// Extract just the array
const match = raw.match(/const productsData = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not extract productsData array from products.ts');
  process.exit(1);
}

// Wrap in a module that exports the array
const moduleCode = `module.exports = ${match[1]};`;

// Write to a temp .js file and require it
const tmpFile = path.resolve('scripts/.tmp-products.js');
fs.writeFileSync(tmpFile, moduleCode);

const products = require(tmpFile);
fs.unlinkSync(tmpFile);

const outDir = path.resolve('src/content/products');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let count = 0;
for (const p of products) {
  const slug = p.slug;
  if (!slug) continue;

  // Build YAML-like frontmatter (hand-written for safety)
  const lines: string[] = ['---'];

  lines.push(`slug: ${slug}`);
  lines.push(`name: "${escapeYaml(p.name || '')}"`);
  lines.push(`category: "${escapeYaml(p.category || '')}"`);
  lines.push(`systemSlug: ${p.systemSlug || ''}`);
  lines.push(`areaSlug: ${p.areaSlug || ''}`);
  lines.push(`productTypeSlug: ${p.productTypeSlug || ''}`);
  lines.push(`moq: "${escapeYaml(p.moq || '')}"`);
  lines.push(`priceRange: "${escapeYaml(p.priceRange || '')}"`);
  lines.push(`image: "${escapeYaml(p.image || '')}"`);
  lines.push(`description: "${escapeYaml(p.description || '')}"`);

  // gallery
  if (p.gallery && p.gallery.length > 0) {
    lines.push('gallery:');
    for (const g of p.gallery) {
      lines.push(`  - "${escapeYaml(g)}"`);
    }
  }

  // compatibility
  if (p.compatibility && p.compatibility.length > 0) {
    lines.push('compatibility:');
    for (const c of p.compatibility) {
      lines.push(`  - "${escapeYaml(c)}"`);
    }
  }

  // specs
  if (p.specs && p.specs.length > 0) {
    lines.push('specs:');
    for (const s of p.specs) {
      lines.push(`  - label: "${escapeYaml(s.label)}"`);
      lines.push(`    value: "${escapeYaml(s.value)}"`);
    }
  }

  // features
  if (p.features && p.features.length > 0) {
    lines.push('features:');
    for (const f of p.features) {
      lines.push(`  - title: "${escapeYaml(f.title)}"`);
      lines.push(`    description: "${escapeYaml(f.description)}"`);
    }
  }

  // faqs
  if (p.faqs && p.faqs.length > 0) {
    lines.push('faqs:');
    for (const q of p.faqs) {
      lines.push(`  - question: "${escapeYaml(q.question)}"`);
      lines.push(`    answer: "${escapeYaml(q.answer)}"`);
    }
  }

  lines.push('---');
  lines.push('');
  lines.push((p.longDescription || p.description || '').replace(/\\n/g, '\n'));

  const filePath = path.join(outDir, `${slug}.mdx`);
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  count++;
}

console.log(`Generated ${count} MDX files in src/content/products/`);

function escapeYaml(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}
