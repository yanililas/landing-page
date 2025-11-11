const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// Paths
const contentDir = path.join(__dirname, '../content/articles');
const outputDir = path.join(__dirname, '../insights');
const dataOutputPath = path.join(__dirname, '../data/articles.json');

// Ensure output directories exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// HTML template for article pages
function createArticleHTML(data, content, slug) {
  const categoryLabel = data.category.charAt(0).toUpperCase() + data.category.slice(1);
  const publishDate = new Date(data.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${data.excerpt || data.title}">
  <title>${data.title} — Averris Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;700&family=Source+Serif+4:wght@400;700&family=Recursive:wght@400;700&family=Lora:ital,wght@1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" type="image/png" href="../assets/logo dark.png">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.excerpt || data.title}">
  <meta property="og:image" content="https://averris.com/assets/logo%20dark.png">
  <meta property="og:url" content="https://averris.com/insights/${slug}.html">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://averris.com/insights/${slug}.html">
</head>
<body>
  <nav class="nav">
    <div class="container nav-container">
      <a href="/" class="logo">
        <img src="../assets/logo dark.png" alt="Averris" class="logo-img" />
        <span class="logo-text">Averris</span>
      </a>
      <button class="nav-toggle" aria-label="Open navigation menu">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="32" height="3" rx="1.5" fill="currentColor"/><rect y="15" width="32" height="3" rx="1.5" fill="currentColor"/><rect y="23" width="32" height="3" rx="1.5" fill="currentColor"/></svg>
      </button>
      <ul class="nav-links">
        <li><a href="../thinkers.html">Thinkers</a></li>
        <li><a href="../publishers.html">Publishers</a></li>
        <li><a href="../impact.html">Impact</a></li>
        <li><a href="../insights.html" aria-current="page">Insights</a></li>
        <li><a href="../about.html">About</a></li>
      </ul>
    </div>
  </nav>

  <div class="page-shell">
    <main>
      <article class="article-content">
        <div class="container" style="max-width: 800px;">
          <div class="article-header">
            <a href="../insights.html" class="back-link">← Back to Insights</a>
            <span class="tag-badge">${categoryLabel}</span>
            <h1>${data.title}</h1>
            <div class="article-meta">
              ${data.author ? `<span class="author">By ${data.author}</span>` : ''}
              <span class="date">${publishDate}</span>
              <span class="read-time">${data.readTime}</span>
            </div>
          </div>
          <div class="article-body">
            ${content}
          </div>
        </div>
      </article>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-brand">Averris — Ethical AI for the Future of Journalism</div>
        <nav class="footer-nav">
          <a href="../thinkers.html">Thinkers</a>
          <a href="../publishers.html">Publishers</a>
          <a href="../impact.html">Impact</a>
          <a href="../insights.html" aria-current="page">Insights</a>
          <a href="../about.html">About</a>
          <a href="../privacy.html">Privacy</a>
          <a href="../contact.html">Contact</a>
        </nav>
        <div class="footer-meta">Based in Paris · Operating across Europe</div>
        <div class="footer-meta">© 2025 Averris S.A.S. · All Rights Reserved</div>
      </div>
    </footer>
  </div>

  <script src="../script.js"></script>
</body>
</html>`;
}

// Process all markdown files
function buildArticles() {
  console.log('Building articles...');

  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx') || file.endsWith('.md'));
  const articles = [];

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Only process published articles
    if (!data.published) {
      console.log(`Skipping unpublished article: ${file}`);
      return;
    }

    // Generate slug from filename
    const slug = path.basename(file, path.extname(file));

    // Convert markdown to HTML
    const htmlContent = md.render(content);

    // Create full HTML page
    const fullHTML = createArticleHTML(data, htmlContent, slug);

    // Write HTML file
    const outputPath = path.join(outputDir, `${slug}.html`);
    fs.writeFileSync(outputPath, fullHTML);

    console.log(`✓ Generated: ${slug}.html`);

    // Add to articles array for JSON
    articles.push({
      slug,
      title: data.title,
      category: data.category,
      publishDate: data.publishDate,
      readTime: data.readTime,
      excerpt: data.excerpt || '',
      author: data.author || '',
      url: `/insights/${slug}.html`
    });
  });

  // Sort articles by publish date (newest first)
  articles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  // Write articles.json
  fs.writeFileSync(dataOutputPath, JSON.stringify(articles, null, 2));
  console.log(`✓ Generated: articles.json with ${articles.length} articles`);

  console.log('Build complete!');
}

// Run the build
try {
  buildArticles();
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

