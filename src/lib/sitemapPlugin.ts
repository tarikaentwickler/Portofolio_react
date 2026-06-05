// Vite plugin to generate sitemap during build
import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemapPlugin = (entries: SitemapEntry[]): Plugin => {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    enforce: 'post',
    async generateBundle() {
      const sitemapContent = generateSitemapXML(entries);
      
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapContent,
      });

      console.log('✅ Sitemap generated successfully');
    },
  };
};

function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlset = entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}
