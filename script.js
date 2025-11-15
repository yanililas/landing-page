document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Hamburger menu toggle for mobile/tablet
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        // Close menu when a link is clicked (for single-page UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Insights filter bar
    const filterContainer = document.getElementById('insights-filters');
    const filterButtons = filterContainer ? filterContainer.querySelectorAll('.filter-btn') : [];
    const insightsList = document.getElementById('insights-list');
    if (filterButtons.length && insightsList) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const value = btn.getAttribute('data-filter');
                insightsList.querySelectorAll('.article-card').forEach(card => {
                    const tag = (card.getAttribute('data-tag') || '').toLowerCase();
                    card.style.display = (value === 'all' || value === tag) ? '' : 'none';
                });
            });
        });
    }

    // Simple forms: waitlist + contact (placeholder handlers)
    const thinkerWaitlist = document.getElementById('thinker-waitlist');
    if (thinkerWaitlist) {
        thinkerWaitlist.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = thinkerWaitlist.querySelector('input[type="email"]').value;
            try { localStorage.setItem('waitlist_email', email); } catch {}
            alert('Thanks for joining the waiting list!');
            thinkerWaitlist.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for your message. We will get back to you.');
            contactForm.reset();
        });
    }

    // Article share button: copy current URL (with Web Share API fallback)
    const shareButton = document.querySelector('.share-btn');
    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const url = window.location.href;
            const originalHTML = shareButton.innerHTML;
            const originalLabel = shareButton.textContent || 'Share';

            const showCopiedState = () => {
                shareButton.classList.add('copied');
                shareButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Copied!';
                shareButton.disabled = true;
                setTimeout(() => {
                    shareButton.classList.remove('copied');
                    shareButton.innerHTML = originalHTML;
                    shareButton.disabled = false;
                }, 2000);
            };

            try {
                if (navigator.share) {
                    await navigator.share({ url });
                    return;
                }
            } catch (err) {
                // Fall through to clipboard-based sharing
            }

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(url);
                    showCopiedState();
                    return;
                }
            } catch (err) {
                // Fall through to legacy fallback
            }

            const tempInput = document.createElement('input');
            tempInput.value = url;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                // Swallow errors; worst case, no copy
            }
            document.body.removeChild(tempInput);
            showCopiedState();
        });
    }
});
