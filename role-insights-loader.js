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

  function createArticleCard(article, primaryTag) {
    const card = document.createElement('a');
    card.className = 'article-card';
    card.href = article.url;
    
    // Support both old 'category' and new 'tags' format
    const tags = article.tags || (article.category ? [article.category] : []);
    const displayTag = primaryTag || tags[0] || 'article';
    card.dataset.tag = displayTag;

    const categoryLabel =
      displayTag.charAt(0).toUpperCase() + displayTag.slice(1);

    card.innerHTML = `
      ${article.featuredImage ? `<img src="${article.featuredImage}" alt="${article.title}" class="article-card-image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0; margin-bottom: 1rem;">` : ''}
      <span class="tag-badge">${categoryLabel}</span>
      <h3>${article.title}</h3>
      ${article.excerpt ? `<p class="article-excerpt">${article.excerpt}</p>` : ''}
      <p class="read-time">${article.readTime}</p>
    `;

    return card;
  }

  function populateCarousel(rootEl, articles, primaryTag) {
    if (!rootEl || !articles.length) return;

    // Ensure carousel styling
    if (!rootEl.classList.contains('carousel')) {
      rootEl.classList.add('carousel');
    }

    rootEl.innerHTML = '';
    articles.forEach((article) => {
      rootEl.appendChild(createArticleCard(article, primaryTag));
    });
  }

  function populateCarousels(allArticles) {
    // Helper function to check if article has a specific tag
    function hasTag(article, tag) {
      // Support both old 'category' and new 'tags' format
      if (article.tags && Array.isArray(article.tags)) {
        return article.tags.includes(tag);
      }
      return article.category === tag;
    }

    if (thinkerCarousel) {
      const thinkerArticles = allArticles.filter((a) => hasTag(a, 'thinkers'));
      populateCarousel(thinkerCarousel, thinkerArticles, 'thinkers');
    }

    if (publisherCarousel) {
      const publisherArticles = allArticles.filter((a) => hasTag(a, 'publishers'));
      populateCarousel(publisherCarousel, publisherArticles, 'publishers');
    }

    if (impactCarousel) {
      const impactArticles = allArticles.filter((a) => hasTag(a, 'impact'));
      populateCarousel(impactCarousel, impactArticles, 'impact');
    }
  }

  loadArticles();
})();

