/**
 * Sitemap Generator for Averris
 * Automatically generates sitemap.xml with all pages and articles
 * Run with: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Base URL for your site
const BASE_URL = 'https://averris.com';

// Get current date in ISO format
const getCurrentDate = () => new Date().toISOString().split('T')[0];

// Static pages configuration
const staticPages = [
  { 
    url: '/', 
    priority: '1.0', 
    changefreq: 'weekly' 
  },
  { 
    url: '/thinkers.html', 
    priority: '0.8', 
    changefreq: 'monthly' 
  },
  { 
    url: '/publishers.html', 
    priority: '0.8', 
    changefreq: 'monthly' 
  },
  { 
    url: '/impact.html', 
    priority: '0.8', 
    changefreq: 'monthly' 
  },
  { 
    url: '/insights.html', 
    priority: '0.9', 
    changefreq: 'weekly' 
  },
  { 
    url: '/about.html', 
    priority: '0.7', 
    changefreq: 'monthly' 
  },
  { 
    url: '/privacy.html', 
    priority: '0.3', 
    changefreq: 'yearly' 
  },
  { 
    url: '/contact.html', 
    priority: '0.6', 
    changefreq: 'monthly' 
  }
];

/**
 * Get all HTML files from insights directory
 */
function getArticleFiles() {
  const insightsDir = path.join(__dirname, '../insights');
  
  try {
    const files = fs.readdirSync(insightsDir);
    return files.filter(file => file.endsWith('.html'));
  } catch (error) {
    console.error('Error reading insights directory:', error);
    return [];
  }
}

/**
 * Generate XML for a single URL
 */
function generateUrlXml(url, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate complete sitemap XML
 */
function generateSitemap() {
  const currentDate = getCurrentDate();
  const urls = [];
  
  // Add static pages
  staticPages.forEach(page => {
    urls.push(generateUrlXml(
      page.url,
      page.priority,
      page.changefreq,
      currentDate
    ));
  });
  
  // Add article pages
  const articles = getArticleFiles();
  articles.forEach(article => {
    urls.push(generateUrlXml(
      `/insights/${article}`,
      '0.6',
      'monthly',
      currentDate
    ));
  });
  
  // Build complete XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
  
  return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    const sitemapPath = path.join(__dirname, '../sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`📊 Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
    return false;
  }
}

// Run the script
if (require.main === module) {
  console.log('🚀 Generating sitemap...\n');
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };

