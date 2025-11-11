// Load and display articles dynamically
(function() {
  'use strict';

  const insightsList = document.getElementById('insights-list');
  const filters = document.querySelectorAll('.filter-btn');
  let allArticles = [];
  let currentFilter = 'all';

  // Fetch articles from JSON
  async function loadArticles() {
    try {
      const response = await fetch('/data/articles.json');
      if (!response.ok) {
        throw new Error('Failed to load articles');
      }
      allArticles = await response.json();
      displayArticles(allArticles);
    } catch (error) {
      console.error('Error loading articles:', error);
      // Fallback: keep existing static articles
      console.log('Using static articles as fallback');
    }
  }

  // Display articles
  function displayArticles(articles) {
    if (!insightsList) return;

    // Clear existing articles (except if we're falling back to static)
    if (articles.length > 0) {
      insightsList.innerHTML = '';
    }

    articles.forEach(article => {
      const articleCard = createArticleCard(article);
      insightsList.appendChild(articleCard);
    });
  }

  // Create article card element
  function createArticleCard(article) {
    const card = document.createElement('a');
    card.className = 'article-card';
    card.href = article.url;
    card.dataset.tag = article.category;

    const categoryLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1);

    card.innerHTML = `
      <span class="tag-badge">${categoryLabel}</span>
      <h3>${article.title}</h3>
      ${article.excerpt ? `<p class="article-excerpt">${article.excerpt}</p>` : ''}
      <p class="read-time">${article.readTime}</p>
    `;

    return card;
  }

  // Filter articles
  function filterArticles(filterValue) {
    currentFilter = filterValue;
    
    const cards = insightsList.querySelectorAll('.article-card');
    
    cards.forEach(card => {
      const cardTag = card.dataset.tag;
      
      if (filterValue === 'all' || cardTag === filterValue) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Set up filter buttons
  function setupFilters() {
    filters.forEach(button => {
      button.addEventListener('click', () => {
        // Update active state
        filters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter articles
        const filterValue = button.dataset.filter;
        filterArticles(filterValue);
      });
    });
  }

  // Initialize
  if (insightsList) {
    setupFilters();
    loadArticles();
  }
})();

