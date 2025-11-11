// Load and display articles from Decap CMS
async function loadArticles() {
  try {
    // Fetch the articles directory structure
    const response = await fetch('/articles.json');
    const articles = await response.json();
    
    const insightsList = document.getElementById('insights-list');
    if (!insightsList) return;
    
    // Clear existing sample articles
    insightsList.innerHTML = '';
    
    // Sort articles by date (newest first)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Create article cards
    articles.forEach(article => {
      const card = document.createElement('a');
      card.className = 'article-card';
      card.href = `article.html?id=${article.slug}`;
      card.dataset.tag = article.category;
      
      const badge = document.createElement('span');
      badge.className = 'tag-badge';
      badge.textContent = article.category.charAt(0).toUpperCase() + article.category.slice(1);
      
      const title = document.createElement('h3');
      title.textContent = article.title;
      
      const readTime = document.createElement('p');
      readTime.className = 'read-time';
      readTime.textContent = `${article.readTime} min read`;
      
      card.appendChild(badge);
      card.appendChild(title);
      card.appendChild(readTime);
      
      insightsList.appendChild(card);
    });
    
    // Re-apply filter functionality if it exists
    if (window.initializeFilters) {
      window.initializeFilters();
    }
  } catch (error) {
    console.error('Error loading articles:', error);
    // Keep sample articles if loading fails
  }
}

// Load articles when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadArticles);
} else {
  loadArticles();
}

