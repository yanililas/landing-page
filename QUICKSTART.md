# 🚀 Quick Start: Using Your CMS

## Start in 3 Steps

### 1. Start a Local Server

Open terminal in your project folder and run:

```bash
python3 -m http.server 8000
```

Or if you have Node.js:

```bash
npx http-server -p 8000
```

### 2. Access the CMS

Open your browser and go to:

```
http://localhost:8000/admin
```

You should see the Decap CMS interface!

### 3. Create Your First Article

1. Click **"New Insights"**
2. Fill in the form:
   - Title: "My First Article"
   - Category: Choose one (thinkers/publishers/impact)
   - Write your content in the editor
3. Click **"Publish"**

### 4. Update the Article List

After creating articles, run:

```bash
node update-articles-index.js
```

This updates `articles.json` so your articles appear on the insights page.

### 5. View Your Articles

Navigate to:
```
http://localhost:8000/insights.html
```

Your new article should appear in the list!

---

## ⚠️ Important Notes

- **Test Repo Mode**: Currently configured for local testing only
- **No Authentication**: In test mode, no login required
- **For Production**: See `CMS-SETUP.md` for GitHub/Netlify setup

## 🎯 Next Steps

1. Create a few test articles
2. Customize the CMS config in `admin/config.yml`
3. Set up GitHub backend for production (see `CMS-SETUP.md`)
4. Deploy to Netlify or your preferred host

## 📖 Full Documentation

See `CMS-SETUP.md` for complete setup instructions and deployment options.

---

**Ready to go? Start your server and visit `/admin`! 🎉**

