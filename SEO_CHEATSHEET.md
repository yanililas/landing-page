# SEO Cheatsheet - Quick Reference

## 🚀 Commands You'll Use Often

```bash
# Generate sitemap (after adding new articles)
npm run build:sitemap

# Full build (TinaCMS + articles + sitemap)
npm run build

# Development server
npm run dev

# SEO audit reminder
npm run seo:audit
```

---

## 🎯 Your Top 10 Target Keywords

| Rank | Keyword | Searches/mo | Difficulty | Priority |
|------|---------|-------------|------------|----------|
| 1 | ethical AI for journalism | 140 | Low | START HERE ⭐ |
| 2 | AI tools for journalists | 320 | Low-Med | START HERE ⭐ |
| 3 | journalism in the age of AI | 90 | Low | START HERE ⭐ |
| 4 | AI for publishers | 480 | Medium | Month 2-3 |
| 5 | journalism technology | 720 | Medium | Month 2-3 |
| 6 | journalism AI tools | 1,300 | High | Month 4-6 |
| 7 | future of journalism | 1,600 | High | Month 4-6 |
| 8 | AI journalism | 2,900 | High | Month 6-12 |
| 9 | ethical AI | 5,400 | Very High | Month 6-12 |
| 10 | media AI solutions | 390 | Medium | Month 3-4 |

---

## ✅ Daily/Weekly Checklist

### Monday (15 min)
- [ ] Check Google Analytics traffic
- [ ] Review top pages from weekend
- [ ] Note any ranking changes

### Wednesday (2 hours)
- [ ] Write & publish 1 article
- [ ] Optimize for target keyword
- [ ] Add 2-3 internal links
- [ ] Share on social media
- [ ] Run: `npm run build:sitemap`

### Friday (30 min)
- [ ] Check Google Search Console
- [ ] Monitor new search queries
- [ ] Check for crawl errors
- [ ] Plan next week's content

### Monthly (2 hours)
- [ ] Full analytics review
- [ ] Update old content
- [ ] Build 2-5 new backlinks
- [ ] Competitive analysis
- [ ] Performance audit

---

## 📊 KPI Targets (Track Monthly)

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| **Organic Visitors** | Baseline | +50% | +200% | +400% |
| **Keywords Top 100** | 5-10 | 15-25 | 30-50 | 50-100 |
| **Keywords Top 10** | 0-1 | 1-3 | 3-8 | 8-15 |
| **Domain Authority** | 10-15 | 15-20 | 20-25 | 25-35 |
| **Quality Backlinks** | 0-2 | 5-10 | 10-20 | 20-40 |
| **Articles Published** | 4-6 | 12-18 | 24-36 | 48-72 |

---

## 🛠️ Essential Tools URLs

### Free (Use Daily)
- **Analytics**: https://analytics.google.com
- **Search Console**: https://search.google.com/search-console
- **PageSpeed**: https://pagespeed.web.dev/
- **Schema Test**: https://validator.schema.org/
- **Mobile Test**: https://search.google.com/test/mobile-friendly

### Testing (Use Weekly)
- **OG Preview**: https://www.opengraph.xyz/
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Keyword Planner**: https://ads.google.com/home/tools/keyword-planner/

### Paid (Optional)
- **Ahrefs**: https://ahrefs.com ($99/mo)
- **SEMrush**: https://semrush.com ($119/mo)
- **Ubersuggest**: https://neilpatel.com/ubersuggest/ ($29/mo)

---

## 📝 Article Optimization Template

When writing a new article, use this checklist:

### Pre-Writing
- [ ] Choose target keyword (from list above)
- [ ] Research top 3 ranking articles
- [ ] Outline with H2/H3 structure
- [ ] Plan 1,500+ words

### Writing
- [ ] Keyword in title
- [ ] Keyword in first 100 words
- [ ] Keyword in at least one H2
- [ ] Keyword density 1-2%
- [ ] 2-3 internal links
- [ ] 1-2 external links (authority sites)
- [ ] Clear, scannable paragraphs

### Post-Writing
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Featured image with alt text
- [ ] Schema markup (Article)
- [ ] Publish date
- [ ] Author bio
- [ ] Social share buttons

### After Publishing
- [ ] Share on LinkedIn
- [ ] Share on Twitter/X
- [ ] Update sitemap: `npm run build:sitemap`
- [ ] Submit URL to Search Console
- [ ] Add to internal links on related pages

---

## 🎨 Meta Tags Template

Copy/paste and customize for each page:

```html
<!-- Page Title -->
<title>[Primary Keyword] | [Secondary Keyword] | Averris</title>

<!-- Meta Description -->
<meta name="description" content="[150-160 characters including primary keyword and call-to-action]">

<!-- Open Graph -->
<meta property="og:title" content="[Title - can be slightly different]">
<meta property="og:description" content="[Same or similar to meta description]">
<meta property="og:image" content="https://averris.com/assets/[relevant-image].png">
<meta property="og:url" content="https://averris.com/[page-url].html">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title]">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="https://averris.com/assets/[image].png">

<!-- Canonical -->
<link rel="canonical" href="https://averris.com/[page-url].html">
```

---

## 📐 Schema Markup Templates

### Article Schema (For blog posts)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Article excerpt/summary]",
  "image": "https://averris.com/assets/[image].png",
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
    "@id": "https://averris.com/insights/[article-slug].html"
  }
}
</script>
```

### FAQ Schema (For FAQ sections)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Question]",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Answer]"
    }
  }]
}
</script>
```

### Breadcrumb Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://averris.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "[Page Name]",
    "item": "https://averris.com/[page].html"
  }]
}
</script>
```

---

## 🖼️ Image Optimization Quick Guide

### Before Upload
1. Compress (TinyPNG.com)
2. Resize to exact dimensions needed
3. Convert to WebP (if possible)
4. Descriptive filename: `ai-journalism-tools.png` not `IMG_1234.png`

### In HTML
```html
<!-- Basic -->
<img src="assets/image.png" 
     alt="Descriptive text with keyword" 
     loading="lazy"
     width="800" 
     height="600">

<!-- Advanced (with WebP) -->
<picture>
  <source srcset="assets/image.webp" type="image/webp">
  <img src="assets/image.png" 
       alt="Descriptive text with keyword" 
       loading="lazy">
</picture>
```

### Target Sizes
- Hero images: < 200KB
- Article images: < 150KB  
- Icons/logos: < 50KB
- Thumbnails: < 30KB

---

## 🔗 Link Building Checklist

### Month 1: Foundation
- [ ] Create LinkedIn company page
- [ ] Create Twitter/X profile
- [ ] Submit to Crunchbase
- [ ] Submit to Product Hunt
- [ ] Submit to relevant directories

### Month 2-3: Content
- [ ] Write 2 guest posts
- [ ] Create original research/report
- [ ] Reach out to 10 potential partners
- [ ] Comment on industry blogs

### Month 4-6: Outreach
- [ ] Interview industry experts
- [ ] Get featured in newsletters
- [ ] Speak at online event
- [ ] Collaborate on content

### Ongoing
- [ ] Monitor brand mentions (set up alerts)
- [ ] Respond to HARO requests
- [ ] Build relationships with journalists
- [ ] Share others' content

---

## ⚠️ Red Flags to Avoid

| ❌ Don't Do This | ✅ Do This Instead |
|-----------------|-------------------|
| Keyword stuff (5%+ density) | Write naturally (1-2%) |
| Buy backlinks | Earn them organically |
| Duplicate content | Unique content on every page |
| Ignore mobile users | Mobile-first design |
| Slow loading (>5s) | Fast loading (<3s) |
| No alt text | Descriptive alt on all images |
| No analytics | Track everything |
| Set and forget | Consistent weekly effort |
| Copy competitors | Create better content |
| Focus only on rankings | Focus on user value |

---

## 🎯 Monthly Content Ideas

### Thinkers Category
- How AI changes critical thinking
- Building a diverse information diet
- Fact-checking in the AI era
- Media literacy for AI age
- Bias detection techniques

### Publishers Category  
- Zero-click AI strategies
- AI content distribution
- Audience engagement with AI
- Revenue models for AI era
- Newsroom AI integration

### Impact Category
- AI and democracy
- Information integrity
- Journalism ethics
- Media sustainability
- Tech regulation

### Mix Ideas
- Case studies
- Interviews
- Research findings
- Tool reviews
- Industry trends
- Event recaps

---

## 📞 Emergency Troubleshooting

### Site Not Indexing?
1. Check Google Search Console for errors
2. Verify sitemap is submitted
3. Check robots.txt isn't blocking
4. Ensure pages have content (300+ words)
5. Wait 2-4 weeks (patience!)

### Rankings Dropped?
1. Check for manual penalties (Search Console)
2. Review recent changes
3. Check competitor improvements
4. Verify backlinks are still live
5. Ensure site speed is still good

### No Traffic?
1. Check Analytics is installed correctly
2. Verify Search Console shows impressions
3. Review target keywords (too competitive?)
4. Check if content matches search intent
5. Improve titles/descriptions (CTR)

### Technical Issues?
1. Test page speed: pagespeed.web.dev
2. Test mobile: search.google.com/test/mobile-friendly
3. Test structured data: validator.schema.org
4. Check console for errors
5. Review Search Console coverage report

---

## 💡 Pro Tips

1. **Write for humans first** - If it's helpful to readers, it's good for SEO
2. **Consistency beats intensity** - 3 hours/week > 20 hours/month
3. **Data beats guesses** - Always check analytics before making changes
4. **Speed matters** - Every 1s delay = 7% fewer conversions
5. **Mobile is king** - 60%+ of users are on mobile
6. **Content is queen** - Great content always wins eventually
7. **Patience pays** - SEO is a 6-12 month game
8. **Quality > Quantity** - For both content and backlinks
9. **User experience = SEO** - Google rewards good UX
10. **Never stop learning** - SEO changes constantly

---

## 📚 Learning Resources

### Beginner
- Google SEO Starter Guide (Read first!)
- Moz Beginner's Guide to SEO
- Ahrefs YouTube Channel

### Intermediate
- Search Engine Journal blog
- Backlinko blog
- Neil Patel blog

### Advanced
- Google Search Central blog
- SEO Twitter (#SEOchat)
- r/TechSEO on Reddit

### Communities
- r/SEO (Reddit)
- SEO Twitter
- Indie Hackers
- Growth Hackers

---

## 🎉 Quick Wins Checklist

Do these today for fast impact:

- [ ] Run `npm run build:sitemap`
- [ ] Submit sitemap to Search Console
- [ ] Add Google Analytics to all pages
- [ ] Fix contact.html meta tags
- [ ] Update all page titles
- [ ] Add alt text to all images
- [ ] Set up Google Search Console
- [ ] Add internal links (3-5 per page)

**Time needed:** ~4 hours  
**Expected impact:** 30-50% improvement in 4-6 weeks

---

## 📧 Contacts & Resources

**Your Site:**
- Production: https://averris.com
- Admin: https://averris.com/admin
- Contact: yani.liu@averris.com

**Your Tina CMS:**
- Client ID: `789a3b63-9d71-40ad-ae33-caab7cc06e9b`
- Dashboard: https://app.tina.io

**Documentation:**
- SEO_README.md - Start here
- SEO_PLAN.md - Complete strategy
- SEO_QUICK_START.md - This week's tasks
- SEO_SUMMARY.md - What's been done
- SEO_CHEATSHEET.md - This file

---

**Print this and keep it next to your computer! 🚀**

*Last updated: November 12, 2025*

