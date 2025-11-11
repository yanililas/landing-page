# Averris Landing Page with TinaCMS

This project integrates TinaCMS for content management with a static HTML landing page hosted on Vercel.

## Features

- 🎨 Beautiful static HTML landing page
- ✍️ TinaCMS for live article editing
- 📝 Markdown-based content (MDX support)
- 🚀 Automated build process
- ☁️ Vercel deployment ready
- 🔄 Git-based workflow

## Prerequisites

- Node.js 16+ and npm
- Git
- GitHub account
- Vercel account
- TinaCMS Cloud account (free tier available)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up TinaCMS Cloud

1. Go to [https://tina.io](https://tina.io) and sign up for a free account
2. Create a new project
3. Connect your GitHub repository
4. Copy your `Client ID` and `Token`

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your TinaCMS credentials:

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
GITHUB_BRANCH=main
```

### 4. Build TinaCMS Admin Interface

```bash
npx tinacms init
```

This will:
- Set up the TinaCMS admin interface in the `/admin` folder
- Generate necessary configuration files

### 5. Build Articles

Generate HTML pages from markdown content:

```bash
npm run build
```

This will:
- Convert all `.mdx` files in `content/articles/` to HTML
- Create individual article pages in `insights/`
- Generate `data/articles.json` for dynamic loading

### 6. Local Development

Run a local server to test:

```bash
npm run dev
```

This starts:
- TinaCMS dev server
- Local web server on `http://localhost:3000`

Access the CMS admin at: `http://localhost:3000/admin`

## Project Structure

```
Landing Page/
├── admin/                  # TinaCMS admin interface (generated)
├── content/
│   └── articles/          # MDX article files
├── insights/              # Generated HTML article pages
├── data/
│   └── articles.json      # Generated articles index
├── scripts/
│   └── build-articles.js  # Build script for converting MDX to HTML
├── tina/
│   └── config.js          # TinaCMS configuration
├── assets/                # Images and static files
├── *.html                 # Landing page HTML files
├── style.css              # Main stylesheet
├── script.js              # Main JavaScript
├── insights-loader.js     # Dynamic article loader
├── package.json           # Dependencies
├── vercel.json            # Vercel deployment config
└── .env.example           # Environment variables template
```

## Creating New Articles

### Option 1: Using TinaCMS (Recommended)

1. Start the dev server: `npm run dev`
2. Go to `http://localhost:3000/admin`
3. Click "Articles" in the sidebar
4. Click "Create New" button
5. Fill in the article details:
   - Title
   - Category (Thinkers, Publishers, or Impact)
   - Publish Date
   - Read Time
   - Excerpt
   - Author
   - Body content
   - Published status (toggle to make live)
6. Click "Save"
7. Commit and push changes to GitHub

### Option 2: Manual Creation

1. Create a new `.mdx` file in `content/articles/`
2. Add frontmatter:

```yaml
---
title: Your Article Title
category: thinkers  # or 'publishers' or 'impact'
publishDate: 2025-01-15T10:00:00.000Z
readTime: 5 min read
excerpt: Short description
author: Your Name
published: true
---
```

3. Write your content in Markdown
4. Run `npm run build` to generate HTML
5. Commit and push

## Deployment to Vercel

### Initial Setup

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Connect to Vercel:
```bash
vercel
```

### Automatic Deployment

Once connected, every push to your main branch will automatically:
1. Run `npm install`
2. Run `npm run build`
3. Deploy to Vercel

### Environment Variables on Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

### Custom Domain

In Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `averris.com`)

## Article Content Schema

Each article supports:

- **Title**: Main heading
- **Category**: thinkers | publishers | impact
- **Publish Date**: ISO 8601 format
- **Read Time**: Display time (e.g., "5 min read")
- **Excerpt**: Short description for cards
- **Author**: Article author name
- **Featured Image**: Optional cover image
- **Body**: Rich text content with:
  - Headings (H1-H4)
  - Paragraphs
  - Lists (ordered and unordered)
  - Bold and italic text
  - Links
  - Blockquotes
  - Code blocks
  - Images
  - Custom callouts and quotes

## Development Commands

```bash
# Install dependencies
npm install

# Run TinaCMS dev server
npm run dev

# Build articles from markdown
npm run build:articles

# Full build (TinaCMS + articles)
npm run build
```

## Content Management Workflow

### Editing Workflow

1. **Edit**: Make changes via TinaCMS admin or directly in markdown files
2. **Preview**: Changes appear immediately in TinaCMS preview
3. **Save**: Click save in TinaCMS (creates a commit)
4. **Build**: Build process runs automatically on Vercel
5. **Deploy**: New version goes live

### Publishing States

- `published: true` → Article visible on site
- `published: false` → Article hidden (draft mode)

## Troubleshooting

### Articles not showing

1. Check `published: true` in frontmatter
2. Run `npm run build:articles` locally
3. Verify `data/articles.json` was generated
4. Check browser console for errors

### TinaCMS admin not loading

1. Verify environment variables are set
2. Check `.env` file exists with valid credentials
3. Run `npx tinacms init` to regenerate admin
4. Clear browser cache

### Build failing on Vercel

1. Check Vercel build logs
2. Verify environment variables are set in Vercel
3. Ensure `package.json` has correct build command
4. Test build locally: `npm run build`

## Support

For issues with:
- **TinaCMS**: [TinaCMS Documentation](https://tina.io/docs/)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **This Project**: Create an issue or contact the Averris team

## License

© 2025 Averris S.A.S. · All Rights Reserved

