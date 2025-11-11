# 🎉 Decap CMS Successfully Integrated!

Your Averris website now has a fully functional content management system with a WYSIWYG editor accessible at `/admin`.

## 📦 What Was Set Up

### Core CMS Files
- ✅ **`/admin/index.html`** - CMS admin interface
- ✅ **`/admin/config.yml`** - CMS configuration
- ✅ **`/articles/`** - Folder for article markdown files
- ✅ **`/assets/articles/`** - Folder for uploaded images
- ✅ **`articles.json`** - Article index (auto-generated)
- ✅ **`load-articles.js`** - Dynamic article loader
- ✅ **`article.html`** - Article display template
- ✅ **`update-articles-index.js`** - Build script

### Helper Files
- ✅ **`QUICKSTART.md`** - Quick start guide (start here!)
- ✅ **`CMS-SETUP.md`** - Comprehensive setup documentation
- ✅ **`netlify.toml`** - Netlify deployment configuration
- ✅ **`package.json`** - NPM scripts for easy development
- ✅ **`.gitignore`** - Git ignore rules
- ✅ **`admin/netlify-identity.html`** - Authentication setup guide

### Sample Content
- ✅ **`articles/sample-article.md`** - Example article to get you started

## 🚀 Quick Start

### 1. Test Locally

```bash
# Start a local server
python3 -m http.server 8000

# Or using npm
npm start
```

Then open: **http://localhost:8000/admin**

### 2. Create Your First Article

1. Go to `/admin`
2. Click **"New Insights"**
3. Fill in the form and write your content
4. Click **"Publish"**

### 3. Update the Article Index

After creating articles:

```bash
node update-articles-index.js
```

Or using npm:

```bash
npm run build
```

### 4. View Your Articles

Navigate to: **http://localhost:8000/insights.html**

Your articles will appear automatically!

## 🌐 Deploy to Production

### Option 1: Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Decap CMS"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Deploy!

3. **Enable Authentication**
   - In Netlify Dashboard → Identity → Enable Identity
   - Enable Git Gateway
   - Invite yourself as a user
   - See `admin/netlify-identity.html` for detailed instructions

4. **Update Backend Configuration**
   
   Edit `admin/config.yml`:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

### Option 2: GitHub Backend

1. **Create GitHub OAuth App**
   - GitHub Settings → Developer Settings → OAuth Apps → New
   - Homepage URL: `https://yourdomain.com`
   - Callback URL: `https://api.netlify.com/auth/done`

2. **Update config.yml**
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo
     branch: main
   ```

3. **Set up OAuth provider** (see CMS-SETUP.md for details)

### Option 3: Other Hosts

Works with:
- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ GitHub Pages
- ✅ Any static host

Just ensure:
- The build script runs: `node update-articles-index.js`
- Authentication is configured (GitHub or Git Gateway)

## 📝 Article Structure

Each article is a markdown file with frontmatter:

```markdown
---
title: "Your Article Title"
date: 2025-11-11T10:00:00.000Z
category: "thinkers"  # or "publishers" or "impact"
excerpt: "Short description for the card"
readTime: 5
author: "Your Name"
image: "/assets/articles/image.jpg"  # optional
tags:
  - "AI"
  - "Journalism"
---

# Your Article Content

Write your article here using **Markdown**.

## Subheading

- Bullet points
- More content
```

## 🎨 Customizing the CMS

### Add New Fields

Edit `admin/config.yml`:

```yaml
fields:
  - {label: "Subtitle", name: "subtitle", widget: "string", required: false}
  - {label: "Published", name: "published", widget: "boolean", default: true}
```

### Change Categories

In `admin/config.yml`:

```yaml
- {label: "Category", name: "category", widget: "select", 
   options: ["thinkers", "publishers", "impact", "technology", "news"]}
```

### Customize Media Folder

In `admin/config.yml`:

```yaml
media_folder: "assets/images"
public_folder: "/assets/images"
```

## 🔧 NPM Scripts

```bash
npm start      # Start local server on port 8000
npm run build  # Update articles.json
npm run dev    # Build and start server
```

## 📂 File Structure

```
Landing Page/
├── admin/
│   ├── index.html               # CMS interface
│   ├── config.yml              # CMS configuration
│   └── netlify-identity.html   # Auth setup guide
├── articles/
│   └── sample-article.md       # Your articles
├── assets/
│   └── articles/               # Uploaded images
├── articles.json               # Article index
├── load-articles.js            # Article loader
├── article.html               # Article template
├── update-articles-index.js   # Build script
├── insights.html              # Updated with CMS integration
├── netlify.toml              # Netlify config
├── package.json              # NPM config
└── README files...
```

## ✨ Features

### WYSIWYG Editor
- Rich text editing with preview
- Markdown support
- Live preview of your content

### Media Management
- Drag & drop image uploads
- Automatic image path management
- Images stored in `/assets/articles/`

### Git-based Workflow
- All content versioned in Git
- Every publish = Git commit
- Full history and rollback capability

### Categories & Tags
- Organize articles by category
- Add multiple tags
- Filter articles on insights page

### SEO-Friendly
- Clean URLs
- Proper meta tags
- Structured data ready

## 🐛 Troubleshooting

### Articles not showing?
```bash
# Regenerate the index
node update-articles-index.js

# Check the file exists
cat articles.json

# Make sure you're using a web server, not file://
```

### Can't access /admin?
- Ensure you're using a web server (not opening the file directly)
- Check browser console for errors
- Verify `admin/index.html` exists

### CMS loads but can't save?
- Check your backend configuration
- Ensure authentication is set up
- Verify Git Gateway is enabled (if using Netlify)

### Images not loading?
- Check the `media_folder` path in config.yml
- Verify images were uploaded to `/assets/articles/`
- Check browser console for 404 errors

## 📚 Documentation

- **Quick Start**: `QUICKSTART.md`
- **Full Setup Guide**: `CMS-SETUP.md`
- **Authentication**: `admin/netlify-identity.html`
- **Decap CMS Docs**: https://decapcms.org/docs/
- **Netlify Identity**: https://docs.netlify.com/visitor-access/identity/

## 🎯 Next Steps

1. ✅ Test the CMS locally
2. ✅ Create a few sample articles
3. ✅ Customize the CMS configuration
4. ✅ Deploy to Netlify or your preferred host
5. ✅ Set up authentication (Git Gateway or GitHub)
6. ✅ Invite team members (if any)
7. ✅ Start publishing!

## 💡 Tips

- **Commit Often**: The CMS commits directly to Git
- **Use Categories**: Keep articles organized
- **Add Images**: Visual content increases engagement
- **Write Excerpts**: They appear on the insights page cards
- **Set Read Time**: Helps readers know what to expect
- **Use Tags**: Makes content discoverable

## 🤝 Need Help?

- Check the troubleshooting section above
- Read `CMS-SETUP.md` for detailed instructions
- Visit [Decap CMS Discussions](https://github.com/decaporg/decap-cms/discussions)
- Check the [Decap CMS Documentation](https://decapcms.org/docs/)

---

**Ready to start? Open `/admin` and create your first article! 🚀**

*Built with [Decap CMS](https://decapcms.org) - An open-source content management system for Git workflows.*

