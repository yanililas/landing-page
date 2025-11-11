# ✅ Production Deployment Checklist

Follow this checklist to deploy your CMS to production!

---

## 🎯 Pre-Deployment (Already Done!)

- ✅ Netlify Identity widget added to all HTML pages
- ✅ Admin config set to `git-gateway`
- ✅ Sample articles created
- ✅ All files ready

---

## 📋 STEP 1: GitHub Repository

### Tasks:
- ☐ Open Terminal
- ☐ Navigate to project: `cd "/Users/yanieliu/Desktop/Landing Page"`
- ☐ Initialize Git: `git init`
- ☐ Go to https://github.com and create new repository
  - Name: `averris-website` (or your choice)
  - Visibility: Public or Private
  - DON'T initialize with README
- ☐ Run these commands (replace URL with yours):
  ```bash
  git add .
  git commit -m "Initial commit with Decap CMS"
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
  git push -u origin main
  ```
- ☐ Verify files appear on GitHub

**✅ Done?** → Proceed to Step 2

---

## 📋 STEP 2: Deploy to Netlify

### Tasks:
- ☐ Go to https://app.netlify.com
- ☐ Sign up/login (use GitHub for easiest setup)
- ☐ Click "Add new site" → "Import an existing project"
- ☐ Choose "Deploy with GitHub"
- ☐ Authorize Netlify (if asked)
- ☐ Select your `averris-website` repository
- ☐ Configure build:
  - **Branch**: main
  - **Build command**: `node update-articles-index.js`
  - **Publish directory**: `.` (just a period)
- ☐ Click "Deploy site"
- ☐ Wait 1-2 minutes
- ☐ Click the URL to verify site is live

**✅ Done?** → Proceed to Step 3

---

## 📋 STEP 3: Enable Netlify Identity

### Tasks:
- ☐ In Netlify dashboard, click "Identity" tab
- ☐ Click "Enable Identity"
- ☐ Wait for activation
- ☐ Go to Identity → Settings
- ☐ Under "Registration", click "Edit settings"
- ☐ Set to "Invite only"
- ☐ Click "Save"
- ☐ (Optional) Add external providers (GitHub/Google)

**✅ Done?** → Proceed to Step 4

---

## 📋 STEP 4: Enable Git Gateway

### Tasks:
- ☐ Still in Identity settings
- ☐ Scroll to "Services" section
- ☐ Find "Git Gateway"
- ☐ Click "Enable Git Gateway"
- ☐ Wait for confirmation

**✅ Done?** → Proceed to Step 5

---

## 📋 STEP 5: Invite Yourself

### Tasks:
- ☐ Go to Identity → Users tab
- ☐ Click "Invite users"
- ☐ Enter your email address
- ☐ Click "Send"
- ☐ Check your email (inbox or spam)
- ☐ Click the invitation link
- ☐ Set a strong password
- ☐ Complete signup

**✅ Done?** → Proceed to Step 6

---

## 📋 STEP 6: Test the CMS

### Tasks:
- ☐ Go to: `https://your-site-name.netlify.app/admin`
- ☐ Click "Login with Netlify Identity"
- ☐ Enter email and password
- ☐ Click "Log in"
- ☐ Verify you see the CMS dashboard
- ☐ Click "New Insights"
- ☐ Create a test article:
  - Title: "Hello from Production!"
  - Category: Choose one
  - Write some content
- ☐ Click "Publish" → "Publish now"
- ☐ Go to your GitHub repo
- ☐ Check `articles/` folder
- ☐ Verify new `.md` file appears (auto-committed!)
- ☐ Go to your site's insights page
- ☐ Verify article appears

**✅ Done?** → You're live! 🎉

---

## 📋 STEP 7: Customize (Optional)

### Change Site Name:
- ☐ Netlify → Site settings → Site details
- ☐ Click "Change site name"
- ☐ Enter preferred name (e.g., `averris`)
- ☐ Site URL becomes: `https://averris.netlify.app`

### Add Custom Domain:
- ☐ Netlify → Domain settings
- ☐ Click "Add custom domain"
- ☐ Follow instructions

### Update Meta Tags:
- ☐ Edit HTML files
- ☐ Replace `https://averris.com` with your actual URL
- ☐ Commit and push changes

**✅ Done?** → Fully customized! ✨

---

## 🎉 Success Criteria

Your deployment is successful if:

- ✅ Site is live and accessible
- ✅ Can access `/admin` and see login screen
- ✅ Can log in with your credentials
- ✅ Can create articles in the CMS
- ✅ Articles save to GitHub automatically
- ✅ Articles appear on insights page
- ✅ Can log out and log back in

---

## 🆘 Need Help?

If you get stuck:

1. **Check troubleshooting** in `PRODUCTION-DEPLOYMENT-GUIDE.md`
2. **Common issues:**
   - Can't log in? → Check Identity is enabled
   - Articles won't save? → Check Git Gateway is enabled
   - Site won't deploy? → Check build command in Netlify
3. **Get support:**
   - Netlify: https://answers.netlify.com/
   - Decap CMS: https://github.com/decaporg/decap-cms/discussions

---

## 📖 Full Documentation

For detailed instructions, see:
- **`PRODUCTION-DEPLOYMENT-GUIDE.md`** - Complete step-by-step guide
- **`CMS-SETUP.md`** - Configuration options
- **`CMS-README.md`** - Feature documentation

---

## 🚀 Your New Workflow

After deployment:

1. Go to `/admin` on your live site
2. Log in
3. Create articles
4. Click "Publish"
5. Done! Auto-saved and live!

**No more manual deployments needed!** 🎊

---

**Ready to start?** Begin with Step 1 above! ⬆️

Each step builds on the previous one - don't skip ahead!

Good luck! You've got this! 💪

