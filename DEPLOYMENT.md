# Deployment Guide: Vercel + TinaCMS

Complete guide for deploying your TinaCMS-powered Averris site to Vercel.

## Prerequisites

✅ GitHub repository with your code  
✅ TinaCMS Cloud account configured  
✅ Vercel account (free tier is fine)  

## Deployment Methods

### Method 1: Vercel Dashboard (Easiest)

#### Step 1: Connect Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Import"

#### Step 2: Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `.` (current directory)
- **Install Command**: `npm install`

#### Step 3: Add Environment Variables

Click "Environment Variables" and add:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Your TinaCMS Client ID | Production, Preview |
| `TINA_TOKEN` | Your TinaCMS Token | Production, Preview |

**⚠️ Important**: Mark `TINA_TOKEN` as sensitive!

#### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build
3. Your site is live! 🎉

#### Step 5: Verify

Visit your deployment:
- **Home**: `https://your-project.vercel.app`
- **Insights**: `https://your-project.vercel.app/insights.html`
- **Admin**: `https://your-project.vercel.app/admin`

---

### Method 2: Vercel CLI (For Developers)

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

#### Step 2: Login

```bash
vercel login
```

#### Step 3: Deploy

```bash
vercel
```

Follow the interactive prompts:
- **Set up and deploy**: Yes
- **Which scope**: Your personal account or team
- **Link to existing project**: No (first time) or Yes (subsequent)
- **What's your project's name**: averris-landing
- **In which directory is your code**: ./
- **Want to modify settings**: No

#### Step 4: Add Environment Variables

```bash
vercel env add NEXT_PUBLIC_TINA_CLIENT_ID
vercel env add TINA_TOKEN
```

When prompted:
- **Value**: Paste your credential
- **Environments**: Production, Preview, Development

#### Step 5: Production Deploy

```bash
vercel --prod
```

---

## Post-Deployment Setup

### 1. Configure Custom Domain

In Vercel dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `averris.com`, `www.averris.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

### 2. Set Up Automatic Deployments

Vercel automatically deploys on every push to your main branch. To configure:

1. Go to "Settings" → "Git"
2. Verify your repository is connected
3. Set production branch (usually `main`)
4. Enable automatic preview deployments for PRs

### 3. Configure Build Settings

Fine-tune in "Settings" → "General":

- **Node.js Version**: 18.x or higher
- **Build & Development Settings**:
  - Build Command: `npm run build`
  - Output Directory: `.`
  - Install Command: `npm install`

### 4. Set Up Vercel Ignore

Create `.vercelignore` to exclude files from deployment:

```
node_modules
.git
.env
*.log
.DS_Store
```

---

## TinaCMS Cloud Configuration

### Allow Vercel Domains

In TinaCMS Cloud dashboard:

1. Go to your project settings
2. Navigate to "Authorized URLs"
3. Add your Vercel URLs:
   - `https://your-project.vercel.app`
   - `https://your-custom-domain.com`
   - `https://*.vercel.app` (for preview deployments)

### Configure Git Provider

1. In TinaCMS dashboard, go to "Git Provider"
2. Select "GitHub"
3. Authorize TinaCMS to access your repository
4. Select your repository from the list

---

## Continuous Deployment Workflow

Once set up, your workflow becomes:

### Editing Content

1. Go to `https://your-site.com/admin`
2. Log in with TinaCMS
3. Edit or create articles
4. Click "Save"
5. TinaCMS commits changes to GitHub
6. Vercel automatically rebuilds and deploys

### Code Changes

1. Make changes locally
2. Commit to a branch
3. Push to GitHub
4. Vercel creates a preview deployment
5. Review the preview
6. Merge to `main`
7. Vercel deploys to production

---

## Monitoring and Maintenance

### Check Deployment Status

**Via Dashboard**:
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- View all deployments and their status

**Via CLI**:
```bash
vercel ls
```

### View Logs

**Via Dashboard**:
- Click on a deployment
- Go to "Logs" tab

**Via CLI**:
```bash
vercel logs
```

### Roll Back

If a deployment has issues:

**Via Dashboard**:
1. Go to "Deployments"
2. Find a working deployment
3. Click "⋮" → "Promote to Production"

**Via CLI**:
```bash
vercel rollback
```

---

## Troubleshooting

### Build Fails

**Check build logs**:
1. Go to failed deployment in Vercel
2. Click "View Build Logs"
3. Look for errors

**Common issues**:
- Missing environment variables → Add them in project settings
- Node version mismatch → Update in project settings
- Dependency issues → Check `package.json`

### TinaCMS Admin Not Loading

**Verify**:
- Environment variables are set correctly
- TinaCMS authorized URLs include your Vercel domain
- No browser console errors

### Articles Not Updating

**Check**:
- Build command includes `npm run build`
- `data/articles.json` is being generated
- Articles have `published: true`

### SSL/HTTPS Issues

Vercel provides automatic SSL. If you see warnings:
- Wait 24-48 hours after adding custom domain
- Verify DNS is properly configured
- Check "Domains" settings in Vercel

---

## Performance Optimization

### Enable Caching

In `vercel.json`, add cache headers:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Optimize Images

1. Use modern formats (WebP, AVIF)
2. Compress images before uploading
3. Use appropriate sizes for different screens

### Monitor Performance

Use Vercel Analytics:
1. Go to your project
2. Click "Analytics" tab
3. Review Web Vitals and usage

---

## Security Best Practices

### Environment Variables

✅ **DO**:
- Use environment variables for all secrets
- Mark sensitive variables as such
- Rotate tokens periodically

❌ **DON'T**:
- Commit `.env` to Git
- Share tokens in public channels
- Use the same token for multiple projects

### Access Control

- Use TinaCMS authentication
- Set up team permissions
- Review access logs regularly

### Content Security

- Enable HTTPS only
- Use strong passwords
- Enable 2FA on GitHub and Vercel

---

## Advanced Configuration

### Custom Build Script

Create `vercel-build.sh`:

```bash
#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building TinaCMS..."
npx tinacms build

echo "Building articles..."
node scripts/build-articles.js

echo "Build complete!"
```

Add to `vercel.json`:

```json
{
  "buildCommand": "bash vercel-build.sh"
}
```

### Webhook Triggers

Set up webhooks to trigger builds:

1. Go to "Settings" → "Git"
2. Copy deploy hook URL
3. Add to external services

### Preview Deployments

Enable previews for branches:

1. Go to "Settings" → "Git"
2. Enable "Preview Deployments"
3. Select branches to deploy

---

## Cost Considerations

### Vercel Pricing

**Free Tier** includes:
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic SSL
- Serverless functions

**Pro Tier** ($20/month):
- 1 TB bandwidth
- Advanced analytics
- Password protection
- Team collaboration

### TinaCMS Pricing

**Free Tier** includes:
- 1 user
- 1 branch
- Unlimited requests

**Starter** ($29/month):
- 3 users
- Multiple branches
- Priority support

---

## Getting Help

### Vercel Support

- [Documentation](https://vercel.com/docs)
- [Discord Community](https://vercel.com/discord)
- Email: support@vercel.com

### TinaCMS Support

- [Documentation](https://tina.io/docs/)
- [Discord Community](https://discord.com/invite/zumN63Ybpf)
- Email: support@tina.io

---

## Checklist

Use this checklist for a successful deployment:

- [ ] Repository on GitHub
- [ ] TinaCMS account created
- [ ] Environment variables configured
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build completes successfully
- [ ] Site loads at Vercel URL
- [ ] Admin interface accessible
- [ ] Articles display correctly
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] TinaCMS authorized URLs set
- [ ] Test content editing workflow
- [ ] Monitor first few deployments

---

## Next Steps

After successful deployment:

1. **Invite team members** to collaborate
2. **Set up monitoring** with Vercel Analytics
3. **Configure backups** for your content
4. **Create documentation** for your team
5. **Plan content strategy** for regular articles

🎉 **Congratulations! Your site is live and ready for content creation.**

