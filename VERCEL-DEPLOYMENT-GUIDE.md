# 🚀 Vercel Deployment with GitHub OAuth - Complete Guide

This guide will walk you through deploying your Averris website with Decap CMS to Vercel using GitHub authentication.

---

## ✅ What's Already Done

- ✅ **vercel.json** created - Fixes deployment error
- ✅ **admin/config.yml** updated - Now uses GitHub backend
- ✅ Netlify Identity removed - Not needed for GitHub OAuth
- ✅ CMS configured - Ready for GitHub authentication

---

## 📋 Complete Setup (3 Main Steps)

### STEP 1: Update Your Repository Name in Config

**IMPORTANT:** Before anything else, update `admin/config.yml` with your actual GitHub info.

1. Open `admin/config.yml`
2. Find this line:
   ```yaml
   repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME
   ```
3. Replace with your actual info, for example:
   ```yaml
   repo: janedoe/averris-website
   ```

**Example:**
- If your GitHub username is `janedoe`
- And your repo is named `averris-website`
- It should be: `repo: janedoe/averris-website`

**Save the file!**

---

### STEP 2: Push Everything to GitHub

Open Terminal and run:

```bash
cd "/Users/yanieliu/Desktop/Landing Page"

# Add all changes
git add .

# Commit with message
git commit -m "Configure for Vercel deployment with GitHub OAuth"

# Push to GitHub
git push
```

**Important:** Make sure your GitHub repository is **public** OR if it's private, you have proper access rights.

---

### STEP 3: Fix Vercel Deployment

Your site should now deploy successfully on Vercel!

1. Go to your **Vercel dashboard**: https://vercel.com/dashboard
2. Find your project
3. The latest deployment should succeed now (check the deployment status)
4. If it's still building, wait a minute for it to complete

**✅ Your site is now live!** Visit your Vercel URL to confirm.

---

## 🔐 STEP 4: Set Up GitHub OAuth Authentication

Now let's enable login for the CMS. This allows you to access `/admin` and create articles.

### 4.1: Create GitHub OAuth Application

1. **Go to GitHub.com** and log in
2. Click your **profile picture** (top right) → **Settings**
3. Scroll down to **Developer settings** (bottom of left sidebar)
4. Click **OAuth Apps** → **New OAuth App** (or "Register a new application")

5. **Fill in the form:**
   - **Application name**: `Averris CMS` (or any name you prefer)
   - **Homepage URL**: `https://your-site.vercel.app` 
     - ⚠️ **Use your actual Vercel URL!**
     - Find it in Vercel dashboard under your project
   - **Application description**: `Content management for Averris website` (optional)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
     - ⚠️ **Yes, use Netlify's URL even though you're on Vercel!** (We're using their free OAuth proxy)

6. Click **Register application**

### 4.2: Get Your Credentials

After creating the app:

1. You'll see your **Client ID** - **Copy it** and save somewhere safe
2. Click **"Generate a new client secret"**
3. **Copy the secret immediately** - you can only see it once!
4. Save both somewhere secure (password manager recommended)

**Keep these safe - you'll need them in the next step!**

---

## 🔗 STEP 5: Set Up OAuth Provider (Using Netlify's Free Service)

Even though your site is on Vercel, we'll use Netlify's free OAuth service to handle GitHub authentication. This is the easiest method!

### 5.1: Create Free Netlify Account

1. Go to **https://app.netlify.com**
2. Click **Sign up** → Choose "Sign up with GitHub" (easiest)
3. Authorize Netlify

### 5.2: Create an Empty Site (Just for OAuth)

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Choose **GitHub**
3. Select **ANY repository** (even a different one, doesn't matter)
4. Click **Deploy site**
5. **Don't worry** - we're not actually deploying your site here, just using OAuth

### 5.3: Enable Git Gateway

1. After the site is created, go to **Identity** tab
2. Click **"Enable Identity"**
3. Wait a few seconds for it to activate
4. Scroll down to **"Services"** section
5. Under **Git Gateway**, click **"Enable Git Gateway"**

### 5.4: Add GitHub OAuth Provider

1. Still in **Identity** settings
2. Find **"External providers"** section  
3. Click **"Add provider"** → Select **"GitHub"**
4. **Enter your credentials:**
   - **Client ID**: Paste the one you copied from GitHub
   - **Client Secret**: Paste the secret you copied from GitHub
5. Click **"Save"**

✅ **OAuth is now configured!**

---

## 🎉 STEP 6: Test Your CMS!

### 6.1: Access the Admin Panel

1. Go to your **Vercel site** URL: `https://your-site.vercel.app/admin`
2. You should see the Decap CMS interface
3. Click **"Login with GitHub"**
4. A popup will open asking you to authorize with GitHub
5. Click **"Authorize"** (first time only)
6. You'll be redirected back to the CMS dashboard

**🎊 Success!** You're now logged in!

### 6.2: Create Your First Article

1. Click **"New Insights"**
2. Fill in the fields:
   - **Title**: "Hello from Vercel!"
   - **Publish Date**: Today's date
   - **Category**: Choose one (thinkers/publishers/impact)
   - **Excerpt**: "My first article published via CMS"
   - **Read Time**: 5
   - **Body**: Write some content using markdown
3. Click **"Publish"** → **"Publish now"**

### 6.3: Verify It Worked

1. Go to your **GitHub repository**
2. Check the **`articles/`** folder
3. You should see a new `.md` file - **that's your article!**
4. The CMS automatically committed it to GitHub!
5. Wait 1-2 minutes for Vercel to auto-deploy
6. Visit `https://your-site.vercel.app/insights`
7. Run `node update-articles-index.js` locally and push (for now - see automation below)

**🎉 Your article should appear on the insights page!**

---

## 🔄 Your New Publishing Workflow

From now on, publishing is super easy:

1. **Go to** `https://your-site.vercel.app/admin`
2. **Log in** with GitHub (stays logged in for 30 days)
3. **Click** "New Insights"
4. **Write** your article
5. **Click** "Publish"
6. **Done!** Article automatically:
   - Saves to GitHub
   - Triggers Vercel deployment
   - Appears on your live site in 1-2 minutes

**Total time: 5-10 minutes per article!** ✨

---

## ⚙️ Optional: Automate Articles Index

Currently, you need to run `node update-articles-index.js` after publishing. Let's automate this!

### Option A: Update Build Command in Vercel

Your `vercel.json` already has this:
```json
{
  "buildCommand": "node update-articles-index.js",
  "outputDirectory": "."
}
```

This means every deployment automatically updates the articles index! **You're already set!** 🎉

### Option B: Verify It's Working

1. Publish an article in the CMS
2. Wait for Vercel to auto-deploy
3. Visit your insights page
4. Article should appear automatically!

---

## 🎨 Customization & Tips

### Add More Fields to Articles

Edit `admin/config.yml` under `fields:`:

```yaml
fields:
  - {label: "Title", name: "title", widget: "string"}
  - {label: "Subtitle", name: "subtitle", widget: "string", required: false}
  - {label: "Featured", name: "featured", widget: "boolean", default: false}
  # ... other fields
```

### Change Article URL Structure

In `admin/config.yml`, update the `slug` template:

```yaml
slug: "{{slug}}"  # Simple: article-title
# OR
slug: "{{year}}/{{month}}/{{slug}}"  # With dates: 2025/11/article-title
```

### Editorial Workflow (Draft → Review → Publish)

Add to the top of `admin/config.yml`:

```yaml
publish_mode: editorial_workflow
```

This adds a draft system with review process!

---

## 🆘 Troubleshooting

### "Login with GitHub" doesn't work

**Check:**
- ✅ OAuth app created in GitHub settings
- ✅ Correct callback URL: `https://api.netlify.com/auth/done`
- ✅ Client ID and Secret added to Netlify
- ✅ Git Gateway enabled in Netlify
- ✅ Your GitHub repo is public (or you have access if private)

**Fix:**
- Try in incognito/private browser window
- Clear browser cache
- Check browser console for errors
- Verify all credentials are correct

### Articles don't save / "Cannot read repository"

**Check:**
- ✅ `repo:` in config.yml matches your actual GitHub repo
- ✅ Format is: `username/repo-name` (no https://, no .git)
- ✅ Branch name is correct (`main` vs `master`)
- ✅ Repository exists and you have write access

**Fix:**
- Double-check repo name in `admin/config.yml`
- Make sure you're logged into the correct GitHub account
- Check GitHub permissions

### Articles don't appear on insights page

**Option 1 - Automatic (Recommended):**
Your `vercel.json` should handle this automatically on each deploy.

**Option 2 - Manual:**
Run locally and push:
```bash
node update-articles-index.js
git add articles.json
git commit -m "Update articles index"
git push
```

### Vercel deployment still fails

**Check:**
- ✅ `vercel.json` exists in root directory
- ✅ `outputDirectory` is set to `.` (period)
- ✅ Node modules install correctly

**Fix:**
- Check Vercel deployment logs
- Ensure `package.json` exists
- Try redeploying manually in Vercel dashboard

---

## 🔒 Security Best Practices

### Protect Your Credentials

- ✅ Never commit OAuth secrets to GitHub
- ✅ Use Netlify/Vercel environment variables if needed
- ✅ Keep Client Secret in password manager
- ✅ Regenerate if accidentally exposed

### Repository Access

- ✅ Keep repo private if possible (OAuth still works)
- ✅ Only invite trusted collaborators
- ✅ Review commits regularly
- ✅ Enable branch protection in GitHub

### CMS Access

- ✅ Only authorized GitHub users can access CMS
- ✅ All changes are tracked in Git history
- ✅ Can roll back any change
- ✅ Full audit trail of who changed what

---

## 👥 Adding Team Members

Want others to write articles?

### Method 1: GitHub Collaborators (Easiest)

1. Go to your GitHub repo → **Settings** → **Collaborators**
2. Click **"Add people"**
3. Enter their GitHub username
4. They can now access `/admin` and publish

### Method 2: GitHub Organization

1. Create a GitHub organization
2. Transfer repo to organization
3. Add team members
4. Set permissions (Write access needed for CMS)

**That's it!** Anyone with write access to the repo can use the CMS.

---

## 📊 Your New Stack

```
Vercel (Hosting)
    ↕
GitHub (Content Storage + Version Control)
    ↕
Decap CMS (Content Management)
    ↕
GitHub OAuth (via Netlify proxy) (Authentication)
```

**Benefits:**
- ✅ Static site speed
- ✅ Git version control
- ✅ Free hosting
- ✅ No database needed
- ✅ Easy collaboration
- ✅ Full content ownership

---

## 📚 Resources

- **Decap CMS Docs**: https://decapcms.org/docs/
- **GitHub OAuth**: https://docs.github.com/en/developers/apps/building-oauth-apps
- **Vercel Docs**: https://vercel.com/docs
- **Support**: https://github.com/decaporg/decap-cms/discussions

---

## ✅ Success Checklist

Your setup is complete when you can:

- ✅ Visit your live site on Vercel
- ✅ Access `/admin` without errors
- ✅ Click "Login with GitHub" and authenticate
- ✅ See the CMS dashboard
- ✅ Create a new article
- ✅ Publish successfully
- ✅ See the article committed to GitHub
- ✅ See the article on your live insights page
- ✅ Log out and log back in

---

## 🎉 You're Done!

Congratulations! You now have a fully functional CMS running on Vercel with GitHub authentication!

**Your weekly workflow:**
1. Visit `/admin`
2. Write article (5-10 min)
3. Click "Publish"
4. Done! ✨

**No more manual deployments, no database to maintain, no complicated setup!**

Happy writing! 🚀

---

## 🆘 Still Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Verify all steps were completed in order
3. Check GitHub/Vercel deployment logs
4. Visit Decap CMS discussions: https://github.com/decaporg/decap-cms/discussions

