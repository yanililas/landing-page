// Node.js script to update articles.json from markdown files
// Run this script after adding new articles through Decap CMS
// Usage: node update-articles-index.js

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'articles');
const outputFile = path.join(__dirname, 'articles.json');

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentArray = [];
  
  lines.forEach(line => {
    // Check if this is an array item
    if (line.trim().startsWith('-')) {
      if (currentKey) {
        let value = line.trim().substring(1).trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        currentArray.push(value);
      }
      return;
    }
    
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    // Save previous array if exists
    if (currentKey && currentArray.length > 0) {
      frontmatter[currentKey] = currentArray;
      currentArray = [];
    }
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Check if this starts an array (empty value or bracket)
    if (value === '' || value === '[') {
      currentKey = key;
      currentArray = [];
      if (value === '[') {
        // Inline array format: [item1, item2]
        const restOfLine = lines[lines.indexOf(line)];
        const arrayMatch = restOfLine.match(/\[(.*?)\]/);
        if (arrayMatch) {
          currentArray = arrayMatch[1].split(',').map(item => {
            item = item.trim();
            if ((item.startsWith('"') && item.endsWith('"')) || 
                (item.startsWith("'") && item.endsWith("'"))) {
              item = item.slice(1, -1);
            }
            return item;
          });
          frontmatter[key] = currentArray;
          currentKey = null;
          currentArray = [];
        }
      }
    } else {
      currentKey = null;
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  });
  
  // Save last array if exists
  if (currentKey && currentArray.length > 0) {
    frontmatter[currentKey] = currentArray;
  }
  
  return frontmatter;
}

function updateArticlesIndex() {
  const articles = [];
  
  // Read all markdown files from articles directory
  const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.md'));
  
  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    
    if (frontmatter) {
      const slug = file.replace('.md', '');
      articles.push({
        slug: slug,
        filename: file,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString(),
        category: frontmatter.category || 'impact',
        excerpt: frontmatter.excerpt || '',
        readTime: parseInt(frontmatter.readTime) || 5,
        author: frontmatter.author || '',
        image: frontmatter.image || '',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : 
              (frontmatter.tags ? frontmatter.tags.split(',').map(t => t.trim()) : [])
      });
    }
  });
  
  // Write to articles.json
  fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
  console.log(`✓ Updated articles.json with ${articles.length} article(s)`);
}

try {
  updateArticlesIndex();
} catch (error) {
  console.error('Error updating articles index:', error);
  process.exit(1);
}

