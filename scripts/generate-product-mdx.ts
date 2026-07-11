import { productsData } from '../src/data/products.ts';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const outDir = join(import.meta.dirname, '..', 'src', 'content', 'products');
mkdirSync(outDir, { recursive: true });

function toYamlValue(key: string, val: unknown): string {
  if (val === undefined || val === null) return '';
  if (typeof val === 'string') {
    // Quote strings that contain special YAML chars
    if (val === '' || val.includes(':') || val.includes('#') || val.includes('"') || val.includes("'") || val.includes('\n') || val.includes('–') || val.includes('°') || val.includes('µ') || val.includes('±') || val.includes('Ω') || val === 'true' || val === 'false' || val === 'yes' || val === 'no' || val === 'null' || /^\d/.test(val)) {
      return `"${val.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }
    return val;
  }
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return ' []';
    // Check if it's an array of simple strings
    if (val.every(v => typeof v === 'string')) {
      return '\n' + val.map(v => {
        const escaped = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        // Quote if contains special chars
        if (v.includes(':') || v.includes('#') || v.includes('"') || v.includes("'") || v.includes('/') || v.includes('–') || v.includes('°') || v.includes('µ') || v.includes('±') || v.includes('Ω') || v.includes(',') || /^\d/.test(v)) {
          return `  - "${escaped}"`;
        }
        return `  - ${v}`;
      }).join('\n');
    }
    // Array of objects (specs, features, faqs)
    return '\n' + val.map(item => {
      if (typeof item === 'object' && item !== null) {
        const entries = Object.entries(item);
        const first = entries[0];
        const rest = entries.slice(1);
        let result = `  - ${first[0]}: ${toYamlValue(first[0], first[1])}`;
        for (const [k, v] of rest) {
          result += `\n    ${k}: ${toYamlValue(k, v)}`;
        }
        return result;
      }
      return `  - ${item}`;
    }).join('\n');
  }
  return String(val);
}

let count = 0;
for (const product of productsData) {
  const lines: string[] = ['---'];

  // Order fields consistently
  const fieldOrder = ['slug', 'name', 'category', 'systemSlug', 'areaSlug', 'productTypeSlug', 'moq', 'priceRange', 'image', 'description', 'compatibility', 'specs', 'features', 'faqs'];

  // Add gallery only if present
  if (product.gallery && product.gallery.length > 0) {
    fieldOrder.splice(fieldOrder.indexOf('image') + 1, 0, 'gallery');
  }

  for (const key of fieldOrder) {
    const val = (product as Record<string, unknown>)[key];
    if (val === undefined) continue;
    // Skip longDescription — it becomes the body
    if (key === 'longDescription') continue;

    if (key === 'image' && val === '') {
      lines.push('image: ""');
    } else if (Array.isArray(val) || typeof val === 'object') {
      lines.push(`${key}:${toYamlValue(key, val)}`);
    } else {
      lines.push(`${key}: ${toYamlValue(key, val)}`);
    }
  }

  lines.push('---');
  lines.push('');
  lines.push(product.longDescription || '');
  lines.push('');

  const filename = `${product.slug}.mdx`;
  writeFileSync(join(outDir, filename), lines.join('\n'), 'utf-8');
  count++;
}

console.log(`Generated ${count} MDX files in ${outDir}`);
