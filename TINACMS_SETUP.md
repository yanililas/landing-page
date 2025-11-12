# TinaCMS Setup Guide

## ✅ Issues Fixed

1. ✅ **Build command updated** - Vercel now builds TinaCMS admin interface
2. ✅ **Admin interface generated** - TinaCMS files created in `/admin` folder
3. ✅ **Build script fixed** - Added `--skip-cloud-checks` flag to prevent deployment issues
4. ✅ **Configuration validated** - `tina/config.js` properly references environment variables

## 🔧 Required: Vercel Environment Variables

To enable TinaCMS Cloud features (authentication, Git integration), you MUST add these environment variables in Vercel:

### Step 1: Get Your TinaCMS Credentials

1. Go to [https://app.tina.io](https://app.tina.io)
2. Sign in to your TinaCMS account
3. Find your project: **Averris Landing Page**
4. Go to **Project Settings** → **Configuration**
5. Copy these values:
   - **Client ID**: `NEXT_PUBLIC_TINA_CLIENT_ID`
   - **Token**: `TINA_TOKEN`

### Step 2: Add to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Select your project: **averris-landing-page** (or similar)
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

   ```
   NEXT_PUBLIC_TINA_CLIENT_ID = [paste your client ID]
   TINA_TOKEN = [paste your token]
   ```

5. **Important**: Add them to **Production**, **Preview**, AND **Development** environments
6. Save changes

### Step 3: Redeploy

1. Go to **Deployments** tab in Vercel
2. Click on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete (~2-3 minutes)

## 🎉 Testing the Admin Interface

Once redeployed:

1. Visit `https://your-domain.com/admin` (or `https://your-vercel-url.vercel.app/admin`)
2. You should see the TinaCMS login screen
3. Sign in with your TinaCMS account
4. You'll see the article management interface

## 🔍 Troubleshooting

### Admin page shows "Failed loading TinaCMS assets"

**Cause**: Environment variables not set or deployment incomplete

**Fix**:
1. Verify environment variables are set in Vercel
2. Redeploy the project
3. Hard refresh the admin page (Cmd+Shift+R / Ctrl+Shift+R)

### "Authentication failed" error

**Cause**: Invalid credentials or TinaCMS Cloud not synced

**Fix**:
1. Verify credentials in [app.tina.io](https://app.tina.io)
2. Make sure your Git branch is pushed to remote
3. Check TinaCMS project is connected to your GitHub repo

### Changes not saving

**Cause**: TinaCMS needs write access to your repository

**Fix**:
1. In [app.tina.io](https://app.tina.io), verify GitHub app permissions
2. Ensure TinaCMS has access to your repository
3. Check that the branch name in `tina/config.js` matches your deployment branch

## 📝 About the Deprecation Warnings

The warnings you saw are **not critical**:

```
npm warn deprecated lodash.get@4.4.2
npm warn deprecated react-beautiful-dnd@13.1.1
```

These are from TinaCMS dependencies. They don't affect functionality:
- **lodash.get**: Used internally by TinaCMS, already using modern alternatives
- **react-beautiful-dnd**: Used for drag-and-drop in the admin UI, still works fine

**No action needed** - these will be updated by TinaCMS in future versions.

## 🚀 Next Steps

1. **Add environment variables in Vercel** ⬅️ DO THIS FIRST
2. **Redeploy your site**
3. **Test the admin interface** at `/admin`
4. **Start creating articles!**

## 💡 Local Development

To run TinaCMS locally:

```bash
npm run dev
```

Then visit: `http://localhost:3000/admin`

**Note**: Local mode works without TinaCMS Cloud credentials, but changes won't sync to your production site until you configure cloud access.

## 📚 Resources

- [TinaCMS Documentation](https://tina.io/docs/)
- [Admin Usage Guide](./admin/README.md)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Questions?** Check the main [README.md](./README.md) or visit the TinaCMS community forum.

