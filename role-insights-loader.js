// Populate Thinker/Publisher/Impact carousels from data/articles.json
(function () {
  'use strict';

  const THINKER_SELECTOR = '#thinker-insights-carousel';
  const PUBLISHER_SELECTOR = '#publisher-insights-carousel';
  const IMPACT_SELECTOR = '#impact-insights-carousel';

  const thinkerCarousel = document.querySelector(THINKER_SELECTOR);
  const publisherCarousel = document.querySelector(PUBLISHER_SELECTOR);
  const impactCarousel = document.querySelector(IMPACT_SELECTOR);

  // If none of the carousels are present, no work to do on this page.
  if (!thinkerCarousel && !publisherCarousel && !impactCarousel) return;

  async function loadArticles() {
    try {
      const response = await fetch('/data/articles.json');
      if (!response.ok) throw new Error('Failed to load articles.json');
      const allArticles = await response.json();
      populateCarousels(allArticles);
    } catch (error) {
      console.error('Error loading role insights:', error);
    }
  }

  function createArticleCard(article) {
    const card = document.createElement('a');
    card.className = 'article-card';
    card.href = article.url;
    
    // Handle both old format (single category) and new format (categories array)
    const categories = Array.isArray(article.categories) ? article.categories : (article.category ? [article.category] : []);
    card.dataset.tag = categories.join(',');

    const categoryBadges = categories
      .map(cat => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        return `<span class="tag-badge">${label}</span>`;
      })
      .join(' ');

    card.innerHTML = `
      ${article.featuredImage ? `<img src="${article.featuredImage}" alt="${article.title}" class="article-card-image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0; margin-bottom: 1rem;">` : ''}
      ${categoryBadges}
      <h3>${article.title}</h3>
      ${article.excerpt ? `<p class="article-excerpt">${article.excerpt}</p>` : ''}
      <p class="read-time">${article.readTime}</p>
    `;

    return card;
  }

  function populateCarousel(rootEl, articles) {
    if (!rootEl || !articles.length) return;

    // Ensure carousel styling
    if (!rootEl.classList.contains('carousel')) {
      rootEl.classList.add('carousel');
    }

    rootEl.innerHTML = '';
    articles.forEach((article) => {
      rootEl.appendChild(createArticleCard(article));
    });
  }

  function populateCarousels(allArticles) {
    // Helper function to check if article has a specific category
    function hasCategory(article, category) {
      if (Array.isArray(article.categories)) {
        return article.categories.includes(category);
      }
      // Backward compatibility with old single category format
      return article.category === category;
    }

    if (thinkerCarousel) {
      const thinkerArticles = allArticles.filter((a) => hasCategory(a, 'thinkers'));
      populateCarousel(thinkerCarousel, thinkerArticles);
    }

    if (publisherCarousel) {
      const publisherArticles = allArticles.filter((a) => hasCategory(a, 'publishers'));
      populateCarousel(publisherCarousel, publisherArticles);
    }

    if (impactCarousel) {
      const impactArticles = allArticles.filter((a) => hasCategory(a, 'impact'));
      populateCarousel(impactCarousel, impactArticles);
    }
  }

  loadArticles();
})();

