# 🚀 Production Deployment Guide - Step by Step

This guide will walk you through deploying your Averris CMS to production with full authentication.

## ✅ Prerequisites Completed

- ✅ Netlify Identity widget added to all pages
- ✅ Admin config.yml configured for git-gateway
- ✅ Sample articles created
- ✅ All files ready for deployment

---

## 📋 Step-by-Step Deployment

### STEP 1: Push Your Code to GitHub

#### 1.1 Initialize Git Repository (if not already done)

Open Terminal in your project folder:

```bash
cd "/Users/yanieliu/Desktop/Landing Page"
```

Initialize Git:

```bash
git init
```

#### 1.2 Create a GitHub Repository

1. Go to **https://github.com**
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `averris-website` (or your preferred name)
   - **Description**: "Averris - Ethical AI for the Future of Journalism"
   - **Visibility**: Choose Public or Private
   - **DON'T** initialize with README, .gitignore, or license (we already have files)
4. Click **"Create repository"**

#### 1.3 Connect and Push Your Code

GitHub will show you commands. Use these (replace with YOUR repository URL):

```bash
# Add all files
git add .

# Make your first commit
git commit -m "Initial commit with Decap CMS"

# Set main branch
git branch -M main

# Add your GitHub repository (REPLACE with your actual URL!)
git remote add origin https://github.com/YOUR-USERNAME/averris-website.git

# Push to GitHub
git push -u origin main
```

**✅ Checkpoint**: Visit your GitHub repository - you should see all your files!

---

### STEP 2: Deploy to Netlify

#### 2.1 Sign Up / Log In to Netlify

1. Go to **https://app.netlify.com**
2. Sign up (or log in) - **use GitHub** to sign in for easiest setup
3. Authorize Netlify to access your GitHub repositories

#### 2.2 Create New Site

1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. You may need to **authorize Netlify** to access your repos
4. Select your **`averris-website`** repository

#### 2.3 Configure Build Settings

On the deploy configuration page:

```
Branch to deploy: main
Build command: node update-articles-index.js
Publish directory: .
```

**Important**: Set the publish directory to just a period: **`.`** (root)

#### 2.4 Deploy!

1. Click **"Deploy site"**
2. Wait 1-2 minutes while Netlify builds your site
3. Once done, you'll get a URL like: `https://random-name-123456.netlify.app`

**✅ Checkpoint**: Click the URL - your website should be live!

---

### STEP 3: Enable Netlify Identity

#### 3.1 Enable Identity Service

1. In your Netlify site dashboard, go to **"Identity"** tab (top menu)
2. Click **"Enable Identity"**
3. Wait a few seconds for it to activate

#### 3.2 Configure Registration Settings

1. Go to **Identity** → **Settings and usage** (or just scroll down)
2. Under **"Registration"**, click **"Edit settings"**
3. Set **Registration preferences** to **"Invite only"** ✅ (recommended for security)
4. Click **"Save"**

#### 3.3 Configure External Providers (Optional but Recommended)

1. Still in Identity settings, find **"External providers"**
2. Click **"Add provider"**
3. Enable **GitHub** or **Google** (or both) for easier login
4. Click **"Save"**

**✅ Checkpoint**: Identity is now enabled!

---

### STEP 4: Enable Git Gateway

This allows the CMS to commit directly to your GitHub repository.

#### 4.1 Enable Git Gateway

1. In **Identity** settings, scroll to **"Services"**
2. Under **Git Gateway**, click **"Enable Git Gateway"**
3. Wait for confirmation (should be instant)

**✅ Checkpoint**: Git Gateway is now active!

---

### STEP 5: Invite Yourself as a User

#### 5.1 Invite Your Email

1. Go back to **Identity** → **Users** tab
2. Click **"Invite users"**
3. Enter **your email address**
4. Click **"Send"**

#### 5.2 Accept Invitation

1. Check your email (inbox or spam)
2. Click the invitation link
3. You'll be taken to your site
4. **Set your password** (choose a strong one!)
5. Click **"Complete signup"**

**✅ Checkpoint**: You're now registered!

---

### STEP 6: Test the CMS

#### 6.1 Access the Admin Panel

1. Go to **`https://your-site-name.netlify.app/admin`**
2. You should see the Decap CMS interface
3. Click **"Login with Netlify Identity"**
4. Enter your email and password
5. Click **"Log in"**

**🎉 SUCCESS!** You should now see the CMS dashboard!

#### 6.2 Create Your First Article

1. Click **"New Insights"**
2. Fill in the article details:
   - **Title**: "Hello from Production!"
   - **Category**: Choose one
   - **Body**: Write some content
3. Click **"Publish"** → **"Publish now"**

#### 6.3 Verify It's Saved

1. Go to your **GitHub repository**
2. Check the **`articles/`** folder
3. You should see a new `.md` file - **that's your article!**
4. It was committed automatically by the CMS! 🎉

---

### STEP 7: Update Your Site URLs (Optional)

#### 7.1 Custom Domain (Optional)

If you want a custom domain instead of `random-name.netlify.app`:

1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Follow the instructions to connect your domain

#### 7.2 Change Site Name

To get a better Netlify subdomain:

1. Go to **Site settings** → **Site details**
2. Click **"Change site name"**
3. Enter: `averris` (or your preferred name)
4. Your site will now be: `https://averris.netlify.app`

---

## 🎯 Final Checklist

After completing all steps, verify:

- ✅ Site is live at your Netlify URL
- ✅ Can access `/admin` and see login screen
- ✅ Can log in with your email/password
- ✅ Can create and publish articles
- ✅ Articles appear in GitHub repository
- ✅ Articles show on `/insights.html` page
- ✅ Can log out and log back in

---

## 🎨 Customizing Your Site

### Update Site URLs

Your HTML files currently reference `https://averris.com`. Update these to your actual domain:

**Files to update:**
- `index.html`
- `insights.html`
- Other pages with meta tags

**Find and replace:**
- Old: `https://averris.com`
- New: `https://your-actual-domain.com` or `https://your-site.netlify.app`

---

## 🔄 Workflow After Deployment

### For Content Editors:

1. Go to `https://your-site.netlify.app/admin`
2. Log in
3. Click "New Insights"
4. Write your article
5. Click "Publish"
6. Done! Article is live automatically

### For Developers:

**Making code changes:**

```bash
# Make your changes locally
# Test them

# Commit and push
git add .
git commit -m "Your change description"
git push

# Netlify auto-deploys in 1-2 minutes!
```

**Adding new users:**

1. Netlify Dashboard → Identity → Invite users
2. Enter their email
3. They receive invitation
4. They set password
5. They can now access `/admin`

---

## 🆘 Troubleshooting

### Can't Log In to CMS?

**Check:**
1. ✅ Netlify Identity is enabled
2. ✅ Git Gateway is enabled
3. ✅ You've accepted the email invitation
4. ✅ Using correct email/password
5. ✅ Browser isn't blocking third-party cookies

**Fix:** Clear browser cache, try incognito mode

### Articles Not Saving?

**Check:**
1. ✅ Git Gateway is enabled
2. ✅ Your `config.yml` has `name: git-gateway`
3. ✅ You're logged in to the CMS
4. ✅ Check browser console for errors

**Fix:** Go to Netlify → Identity → Services → Re-enable Git Gateway

### Articles Not Showing on Site?

**Option 1 - Automatic (Recommended):**
Update your `netlify.toml` to rebuild articles index automatically:

```toml
[build]
  command = "node update-articles-index.js"
  publish = "."
```

**Option 2 - Manual:**
Run locally and commit:

```bash
node update-articles-index.js
git add articles.json
git commit -m "Update articles index"
git push
```

### "Identity Settings Not Found" Error?

**Fix:** Wait a few minutes after enabling Identity, then try again

### Forgot Password?

1. Go to your site (not /admin)
2. If the Identity widget is visible, click "Forgot password?"
3. Or go to Netlify Dashboard → Identity → Select user → Send recovery email

---

## 📧 Inviting Team Members

### For Content Editors:

1. **Netlify Dashboard** → **Identity** → **Invite users**
2. Enter their email
3. They receive invitation
4. They set password
5. They can now create articles at `/admin`

### Setting Roles (Optional):

Decap CMS supports editorial workflow:

Edit `admin/config.yml`:

```yaml
# At the top, add:
publish_mode: editorial_workflow

# This enables:
# - Draft articles
# - Review process
# - Approve before publishing
```

---

## 🎓 Next Steps

### 1. Customize Your CMS

Edit `admin/config.yml` to add more fields:

```yaml
fields:
  - {label: "Subtitle", name: "subtitle", widget: "string"}
  - {label: "Published", name: "published", widget: "boolean", default: true}
```

### 2. Add More Collections

Create collections for other content types:

```yaml
collections:
  - name: "team"
    label: "Team Members"
    folder: "team"
    create: true
    fields:
      - {label: "Name", name: "name", widget: "string"}
      - {label: "Role", name: "role", widget: "string"}
      - {label: "Photo", name: "photo", widget: "image"}
```

### 3. Backup Strategy

**Your content is already backed up!**
- Every article is in GitHub
- Full version history
- Can restore any previous version

To be extra safe:
- Enable branch protection on GitHub
- Set up automated backups of your repo

---

## 📚 Resources

- **Netlify Identity Docs**: https://docs.netlify.com/visitor-access/identity/
- **Git Gateway Docs**: https://docs.netlify.com/visitor-access/git-gateway/
- **Decap CMS Docs**: https://decapcms.org/docs/
- **Netlify Support**: https://answers.netlify.com/

---

## ✅ You're Done!

**Congratulations!** Your CMS is now fully deployed and production-ready! 🎉

**Your new workflow:**
1. Write articles at `/admin`
2. Click "Publish"
3. Articles auto-save to GitHub
4. Site auto-updates
5. Readers see new content

**Simple, powerful, and secure!** ✨

Need help? Check the troubleshooting section or refer to the documentation links above.

Happy publishing! 🚀

