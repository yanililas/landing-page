# SEO Quick Start Guide - Immediate Actions

## 🎯 Priority Tasks (Do This Week)

### 1. Fix Sitemap.xml (30 minutes)

Your current sitemap has URLs without `.html` extensions. Here's the corrected version:

**Replace `/Users/yanieliu/Desktop/Landing Page/sitemap.xml` with:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://averris.com/</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://averris.com/thinkers.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://averris.com/publishers.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://averris.com/impact.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://averris.com/insights.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://averris.com/about.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://averris.com/privacy.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://averris.com/contact.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Individual Articles -->
  <url>
    <loc>https://averris.com/insights/automation-and-the-public-square.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://averris.com/insights/bias-maps-see-the-full-picture.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://averris.com/insights/designing-institutions-for-the-ai-era.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://averris.com/insights/how-to-build-a-better-brain-diet.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://averris.com/insights/what-survives-automation-editorial-identity.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://averris.com/insights/zero-click-ai-and-the-new-funnel.html</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

---

### 2. Add Missing Meta Tags to Contact Page (15 minutes)

**Update `contact.html` `<head>` section:**

Add these lines after line 9 (after the favicon):

```html
<meta property="og:title" content="Contact Averris | Partnerships & Media Inquiries">
<meta property="og:description" content="Get in touch with Averris for partnerships, press inquiries, or questions about ethical AI for journalism.">
<meta property="og:image" content="https://averris.com/assets/logo%20dark.png">
<meta property="og:url" content="https://averris.com/contact.html">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://averris.com/contact.html">
```

---

### 3. Setup Google Analytics (30 minutes)

**Steps:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add this code to **ALL HTML files** before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Files to update:**
- index.html
- thinkers.html
- publishers.html
- impact.html
- insights.html
- about.html
- contact.html
- privacy.html
- All article HTML files in `/insights/`

---

### 4. Setup Google Search Console (20 minutes)

**Steps:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" → Enter `https://averris.com`
4. Verify ownership (use HTML tag method - easiest)
5. Submit sitemap: `https://averris.com/sitemap.xml`

---

### 5. Optimize Image Alt Text (20 minutes)

**Current Issues:** Some images missing descriptive alt text

**Files to Update:**

**index.html:**
```html
<!-- Line 51 - GOOD, keep as is -->
<img src="assets/logo dark.png" alt="Averris wordmark logo" class="logo-img" />
```

**about.html:**
```html
<!-- Line 52 - Improve -->
<img src="assets/Founder profile.jpg" alt="Yani Liu, Founder and CEO of Averris">
```

**Check all pages** and ensure every `<img>` has meaningful alt text:
- Logo: "Averris ethical AI journalism platform logo"
- Icons: Describe their meaning/function
- Photos: Describe who/what is in them
- Decorative: Use `alt=""` (empty but present)

---

### 6. Improve Page Titles (15 minutes)

**Files to update:**

**thinkers.html:**
```html
<title>AI Tools for Journalists & Thinkers | Averris</title>
```

**publishers.html:**
```html
<title>AI Solutions for Publishers & Media Organizations | Averris</title>
```

**impact.html:**
```html
<title>Impact: Ethical AI for Democracy & Journalism | Averris</title>
```

**insights.html:**
```html
<title>AI & Journalism Insights | Expert Analysis & Trends | Averris</title>
```

**about.html:** *(Keep as is - already good)*

**contact.html:**
```html
<title>Contact Averris | Partnerships & Media Inquiries</title>
```

---

### 7. Add Structured Data to Articles (30 minutes per article)

**For EACH article page**, add this before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[ARTICLE TITLE]",
  "description": "[ARTICLE EXCERPT - first 150-160 chars]",
  "image": "https://averris.com/assets/logo%20dark.png",
  "datePublished": "2025-11-12T00:00:00+00:00",
  "dateModified": "2025-11-12T00:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Yani Liu",
    "url": "https://averris.com/about.html"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Averris",
    "logo": {
      "@type": "ImageObject",
      "url": "https://averris.com/assets/logo%20dark.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://averris.com/insights/[ARTICLE-SLUG].html"
  }
}
</script>
```

**Example for "How to build a better brain diet":**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to build a better brain diet",
  "description": "In the age of AI-curated information, learn how to build a diverse, balanced information diet for better critical thinking and understanding.",
  "image": "https://averris.com/assets/brain.png",
  "datePublished": "2025-11-01T00:00:00+00:00",
  "dateModified": "2025-11-12T00:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Yani Liu",
    "url": "https://averris.com/about.html"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Averris",
    "logo": {
      "@type": "ImageObject",
      "url": "https://averris.com/assets/logo%20dark.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://averris.com/insights/how-to-build-a-better-brain-diet.html"
  }
}
</script>
```

---

## 📊 Testing Your Changes

After making updates:

1. **Test Structured Data:**
   - Go to [schema.org validator](https://validator.schema.org/)
   - Enter your URL
   - Fix any errors

2. **Test Page Speed:**
   - Go to [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test each main page
   - Aim for 90+ score

3. **Test Mobile Friendly:**
   - Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - Test your pages
   - Fix any issues

4. **Check Open Graph:**
   - Use [OpenGraph.xyz](https://www.opengraph.xyz/)
   - Preview how your pages look when shared

---

## 📈 Results Timeline

**Week 1-2** (after implementing above):
- ✅ Google starts crawling with correct sitemap
- ✅ Better social media previews
- ✅ Analytics data starts collecting

**Week 3-4:**
- ✅ Pages start appearing in search results
- ✅ You can see search queries in Search Console

**Month 2-3:**
- ✅ Rankings improve for long-tail keywords
- ✅ Organic traffic starts increasing

---

## 🎯 Weekly SEO Routine (After Initial Setup)

**Monday:**
- Check Google Analytics (weekend traffic)
- Review any new backlinks

**Wednesday:**
- Publish 1 new article
- Share on social media
- Add internal links

**Friday:**
- Check Google Search Console
- Monitor keyword rankings
- Plan next week's content

---

## 📋 Complete Checklist

### This Week:
- [ ] Update sitemap.xml
- [ ] Add meta tags to contact.html
- [ ] Setup Google Analytics
- [ ] Setup Google Search Console
- [ ] Optimize all image alt texts
- [ ] Improve page titles
- [ ] Add structured data to 1-2 articles (do more next week)

### Next Week:
- [ ] Add structured data to remaining articles
- [ ] Add FAQ section to homepage
- [ ] Create 2 new articles
- [ ] Add internal links between pages
- [ ] Compress and optimize images

### Month 2:
- [ ] Submit to directories (Crunchbase, Product Hunt)
- [ ] Create LinkedIn company page
- [ ] Start guest posting outreach
- [ ] Create "State of AI Journalism" report
- [ ] Add more articles (8-10 total)

---

## 🚨 Common Mistakes to Avoid

1. ❌ **Don't keyword stuff** - Write naturally
2. ❌ **Don't copy content** - Always be original
3. ❌ **Don't ignore mobile** - Test on phone
4. ❌ **Don't buy backlinks** - Build them organically
5. ❌ **Don't forget analytics** - Track everything
6. ❌ **Don't neglect speed** - Keep pages fast
7. ❌ **Don't skip alt text** - Every image needs it
8. ❌ **Don't forget to update** - Fresh content matters

---

## 🔗 Essential Bookmarks

Save these for quick access:

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Validator](https://validator.schema.org/)
- [Open Graph Checker](https://www.opengraph.xyz/)
- [Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

---

## 💡 Pro Tips

1. **Content is King**: Focus 60% on content, 40% on technical SEO
2. **Be Patient**: SEO takes 3-6 months to show real results
3. **Track Everything**: Use data to make decisions
4. **User First**: Always optimize for users, not just search engines
5. **Stay Updated**: Google algorithm changes frequently
6. **Build Authority**: Quality backlinks matter more than quantity
7. **Mobile Matters**: 60%+ of traffic is mobile
8. **Speed Wins**: Fast sites rank better and convert more

---

## 📞 Need Help?

**Free Resources:**
- Google Search Central documentation
- Moz Beginner's Guide to SEO
- Ahrefs blog

**Paid Tools Worth It:**
- Ahrefs ($99/mo) - Best for backlinks & keywords
- SEMrush ($119/mo) - All-in-one solution
- Screaming Frog ($259/year) - Technical audits

**Communities:**
- r/SEO on Reddit
- SEO Twitter (#SEOchat)
- Indie Hackers

---

**Start with the checklist above and work through it systematically. Good luck! 🚀**

*Last updated: November 12, 2025*

