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
    card.dataset.tag = article.category;

    const categoryLabel =
      article.category.charAt(0).toUpperCase() + article.category.slice(1);

    card.innerHTML = `
      <span class="tag-badge">${categoryLabel}</span>
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
    if (thinkerCarousel) {
      const thinkerArticles = allArticles.filter(
        (a) => a.category === 'thinkers'
      );
      populateCarousel(thinkerCarousel, thinkerArticles);
    }

    if (publisherCarousel) {
      const publisherArticles = allArticles.filter(
        (a) => a.category === 'publishers'
      );
      populateCarousel(publisherCarousel, publisherArticles);
    }

    if (impactCarousel) {
      const impactArticles = allArticles.filter((a) => a.category === 'impact');
      populateCarousel(impactCarousel, impactArticles);
    }
  }

  loadArticles();
})();

