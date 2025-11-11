# Decap CMS Setup Guide for Averris

## Overview

Your Averris website now has Decap CMS integrated! This allows you to manage articles through a clean WYSIWYG editor at `/admin`.

## 🎯 Quick Start

### For Local Development

1. **Serve your site locally** with a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server -p 8000
   ```

2. **Access the CMS**:
   - Open `http://localhost:8000/admin`
   - The test-repo backend is currently configured for local testing

### For Production (GitHub Backend)

To enable the CMS on your live site, you need to:

#### Step 1: Update the Backend Configuration

Edit `admin/config.yml` and update the backend section:

```yaml
backend:
  name: github
  repo: your-username/your-repo-name  # e.g., averris/website
  branch: main  # or master
```

#### Step 2: Enable GitHub OAuth

You have two options:

**Option A: Using Netlify (Recommended)**

1. Deploy your site to Netlify
2. Go to Netlify Dashboard → Site Settings → Identity
3. Enable Git Gateway
4. Enable Identity service
5. Update your `index.html` to include (add before `</head>`):
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

**Option B: Using GitHub OAuth App**

1. Create a GitHub OAuth App:
   - Go to GitHub Settings → Developer Settings → OAuth Apps → New OAuth App
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
2. Use a service like [netlify-cms-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
3. Update your config accordingly

## 📝 Creating Articles

### Through the CMS Interface

1. Go to `/admin`
2. Click "New Insights"
3. Fill in the article details:
   - **Title**: Your article title
   - **Publish Date**: When to publish
   - **Category**: Choose from Thinkers, Publishers, or Impact
   - **Featured Image**: Upload an image (optional)
   - **Excerpt**: Short summary for the card
   - **Read Time**: Estimated reading time in minutes
   - **Body**: Your article content (Markdown supported)
   - **Author**: Your name
   - **Tags**: Relevant tags (optional)

4. Click "Publish" to make it live

### After Creating an Article

Run this command to update the articles index:

```bash
node update-articles-index.js
```

This updates `articles.json` which powers the insights page.

## 🗂️ File Structure

```
Landing Page/
├── admin/
│   ├── index.html          # CMS admin interface
│   └── config.yml          # CMS configuration
├── articles/
│   └── *.md               # Your article markdown files
├── assets/
│   └── articles/          # Uploaded article images
├── articles.json          # Article index (auto-generated)
├── load-articles.js       # Script to load articles dynamically
├── article.html           # Article template page
└── update-articles-index.js  # Build script
```

## ⚙️ Configuration Options

### Customizing Fields

Edit `admin/config.yml` to add or modify fields:

```yaml
fields:
  - {label: "Title", name: "title", widget: "string"}
  - {label: "Custom Field", name: "customField", widget: "text"}
```

### Available Widgets

- `string`: Short text
- `text`: Long text
- `markdown`: Rich text editor
- `datetime`: Date picker
- `image`: Image uploader
- `select`: Dropdown
- `list`: Multiple items
- `number`: Numeric input
- `boolean`: Checkbox

## 🚀 Deployment

### Recommended: Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `node update-articles-index.js` (optional)
4. Publish directory: `/` (root)
5. Enable Netlify Identity for authentication

### Alternative: GitHub Pages

1. Enable GitHub Actions
2. Create a workflow that runs `update-articles-index.js` on push
3. Deploy to GitHub Pages

### Alternative: Any Static Host

- Vercel, Cloudflare Pages, or any static host works
- Remember to run `update-articles-index.js` after adding articles
- Set up authentication for the CMS

## 🔐 Authentication Options

### Test Repo (Local Only)
Currently configured. No authentication needed. For testing only.

### Git Gateway (via Netlify)
Best for small teams. Uses Netlify Identity.

### GitHub Backend
Direct GitHub authentication. Good for developers.

### GitLab / Bitbucket
Similar to GitHub backend.

## 🛠️ Troubleshooting

### Articles Not Showing?
1. Check `articles.json` exists and is valid
2. Run `node update-articles-index.js`
3. Check browser console for errors
4. Ensure you're serving via a web server (not `file://`)

### Can't Access /admin?
1. Make sure you're using a web server
2. Check that `admin/index.html` exists
3. Check browser console for CORS errors

### CMS Login Issues?
1. Check your backend configuration in `admin/config.yml`
2. Verify OAuth app credentials
3. Check Netlify Identity is enabled (if using Netlify)

## 📚 Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Configuration Options](https://decapcms.org/docs/configuration-options/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
- [Backend Configuration](https://decapcms.org/docs/backends-overview/)

## 🎨 Customization

### Styling the CMS
You can customize the CMS appearance by adding custom CSS in `admin/index.html`.

### Preview Templates
Add custom preview templates to see how your content will look before publishing.

## 📧 Support

For issues or questions:
- Check the [Decap CMS community](https://github.com/decaporg/decap-cms/discussions)
- Review the documentation
- Check existing GitHub issues

---

**Happy Writing! 🎉**

Your articles will appear automatically on the Insights page once published.

