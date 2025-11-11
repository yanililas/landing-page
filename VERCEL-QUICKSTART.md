# ⚡ Vercel + GitHub OAuth - Quick Start Checklist

Follow these steps to get your CMS working with Vercel!

---

## ✅ Step-by-Step Checklist

### □ STEP 1: Update Config with Your GitHub Info (2 min)

1. Open `admin/config.yml`
2. Find line 3: `repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME`
3. Replace with your actual info (e.g., `repo: janedoe/averris-website`)
4. Save the file

**Example:**
- Your GitHub username: `janedoe`
- Your repo name: `averris-website`
- Line should be: `repo: janedoe/averris-website`

---

### □ STEP 2: Push to GitHub (1 min)

```bash
cd "/Users/yanieliu/Desktop/Landing Page"
git add .
git commit -m "Configure for Vercel with GitHub OAuth"
git push
```

---

### □ STEP 3: Verify Vercel Deployment (2 min)

1. Go to https://vercel.com/dashboard
2. Find your project
3. Check latest deployment status
4. Should now deploy successfully ✅
5. Note your Vercel URL (e.g., `https://averris-abc123.vercel.app`)

---

### □ STEP 4: Create GitHub OAuth App (5 min)

1. Go to https://github.com/settings/developers
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Name**: `Averris CMS`
   - **Homepage URL**: `https://YOUR-SITE.vercel.app` (your actual URL!)
   - **Callback URL**: `https://api.netlify.com/auth/done`
4. Click **Register application**
5. **Copy Client ID** (save it!)
6. Click **Generate new client secret**
7. **Copy secret immediately** (save it!)

⚠️ **Keep these safe - you'll need them next!**

---

### □ STEP 5: Set Up Netlify OAuth Proxy (5 min)

1. Go to https://app.netlify.com
2. Sign up (use GitHub login - easiest)
3. Create new site:
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose any repo (doesn't matter which)
   - Click **Deploy**
4. Go to **Identity** tab → Click **"Enable Identity"**
5. Scroll to **Services** → Click **"Enable Git Gateway"**
6. Scroll to **External providers**:
   - Click **"Add provider"** → Select **"GitHub"**
   - **Paste your Client ID**
   - **Paste your Client Secret**
   - Click **Save**

✅ **OAuth is configured!**

---

### □ STEP 6: Test Your CMS! (5 min)

1. Go to `https://your-site.vercel.app/admin`
2. Click **"Login with GitHub"**
3. Authorize when prompted
4. You should see the CMS dashboard! 🎉

---

### □ STEP 7: Create First Article (5 min)

1. Click **"New Insights"**
2. Fill in:
   - **Title**: "My First Article"
   - **Category**: Choose one
   - **Body**: Write something
3. Click **"Publish"** → **"Publish now"**
4. Check your GitHub repo - new file in `articles/`!
5. Wait 1-2 min for Vercel to deploy
6. Visit `/insights` - article should appear!

---

## ✅ Success!

If you completed all steps, you can now:

- ✅ Visit `/admin` anytime
- ✅ Log in with GitHub
- ✅ Write articles easily
- ✅ Publish with one click
- ✅ Articles auto-deploy to Vercel

---

## 🎯 Your Weekly Workflow

From now on:

1. Go to `yoursite.vercel.app/admin`
2. Log in
3. Write article
4. Click "Publish"
5. Done! ✨

**Time: ~5-10 minutes per article**

---

## 🆘 Troubleshooting

### Can't log in?
→ Check Client ID/Secret are correct in Netlify
→ Check callback URL is `https://api.netlify.com/auth/done`
→ Try incognito mode

### Articles won't save?
→ Check `repo:` in config.yml matches your GitHub repo exactly
→ Format: `username/repo-name` (no https, no .git)

### Articles don't appear on site?
→ Wait 1-2 min for Vercel to auto-deploy
→ Articles index updates automatically

### Vercel deployment failed?
→ Check that vercel.json exists
→ Check Vercel logs for specific error

---

## 📖 Full Documentation

For detailed info, see: **VERCEL-DEPLOYMENT-GUIDE.md**

---

## 🎊 Done!

Happy writing! Your CMS is ready for weekly article posting! 🚀

