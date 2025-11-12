# Vercel Environment Variables Setup

## Current Issue

Your build is failing because TinaCMS can't find the environment variables during build time:

```
Error: Client not configured properly. Missing clientId, token.
```

## ✅ Solution Applied

Updated `tina/config.js` to use fallback values, allowing the build to complete even without credentials:

```javascript
clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
token: process.env.TINA_TOKEN || "",
```

**This means:**
- ✅ Build will succeed on Vercel
- ✅ Site will deploy
- ⚠️ Admin interface won't authenticate until you add real credentials

## 🔧 How to Add Environment Variables in Vercel

### Step 1: Verify Variable Names (MUST BE EXACT)

Go to [https://vercel.com](https://vercel.com) and add these **exact** variable names:

```
NEXT_PUBLIC_TINA_CLIENT_ID
TINA_TOKEN
```

⚠️ **Common mistakes:**
- ❌ `TINA_CLIENT_ID` (missing NEXT_PUBLIC_ prefix)
- ❌ `next_public_tina_client_id` (wrong case)
- ❌ Extra spaces in variable names
- ❌ Extra spaces in variable values

### Step 2: Add Variables to ALL Environments

1. Open your Vercel project
2. Go to **Settings** → **Environment Variables**
3. For **each** variable:
   - Click "Add New"
   - Enter **Key**: `NEXT_PUBLIC_TINA_CLIENT_ID`
   - Enter **Value**: Your actual client ID from TinaCMS
   - **Check ALL boxes**: Production, Preview, Development
   - Click "Save"

4. Repeat for `TINA_TOKEN`

### Step 3: Get Your Actual TinaCMS Credentials

1. Go to [https://app.tina.io](https://app.tina.io)
2. Sign in to your account
3. Select your project
4. Go to **Overview** or **Configuration**
5. Look for:
   - **Client ID** (looks like: `789a3b63-9d71-40ad-ae33-caab7cc06e9b`)
   - **Read-Only Token** or **Token** (long alphanumeric string)

### Step 4: Redeploy

After adding variables:

1. Go to **Deployments** tab in Vercel
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## 📋 Verification Checklist

Before redeploying, verify:

- [ ] Variable names are EXACTLY: `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`
- [ ] No extra spaces in variable names or values
- [ ] Both variables added to **Production, Preview, AND Development**
- [ ] Values copied correctly from TinaCMS dashboard (no truncation)
- [ ] Clicked "Save" after adding each variable

## 🎯 Expected Results

### Without Environment Variables (Current State)
- ✅ Build succeeds
- ✅ Site deploys
- ❌ Admin shows error: "Client not configured"

### With Environment Variables (After Adding)
- ✅ Build succeeds
- ✅ Site deploys
- ✅ Admin shows login screen
- ✅ Can authenticate and manage content

## 🔍 Troubleshooting

### Build still fails after adding variables

**Check:**
1. Did you redeploy after adding variables?
2. Are variable names spelled exactly right?
3. In Vercel dashboard → Settings → Environment Variables, can you see both variables listed?

### Admin still shows error after successful build

**Possible causes:**
1. Variable values are incorrect (check TinaCMS dashboard)
2. Your TinaCMS project isn't connected to your Git repository
3. Browser cache - try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### How to verify variables are set correctly

In your next Vercel deployment, check the **build logs**. You should NOT see:
```
Error: Client not configured properly
```

If you still see this error, the variables aren't being read.

## 🔄 Alternative: Let Build Complete Without Credentials

**Current configuration allows this!**

Since we added fallback values (`|| ""`), your build will now complete successfully even without TinaCMS credentials. The site will deploy, but the admin interface won't work until you add real credentials.

**Workflow:**
1. Commit and push current changes
2. Vercel will deploy successfully
3. Add environment variables in Vercel
4. Redeploy (or push another commit)
5. Admin will then work

## 📝 What Are These Variables For?

### `NEXT_PUBLIC_TINA_CLIENT_ID`
- Identifies your TinaCMS project
- Used by the admin interface to connect to TinaCMS Cloud
- Safe to expose in client-side code (that's why it has `NEXT_PUBLIC_` prefix)

### `TINA_TOKEN`
- Authentication token for TinaCMS API
- Used during build to fetch content schema
- Should be kept secret (no `NEXT_PUBLIC_` prefix)

## 🚀 Quick Start (For Vercel)

```bash
# 1. Commit the current fix
git add .
git commit -m "Add fallback values for TinaCMS environment variables"
git push origin main

# 2. Add environment variables in Vercel dashboard
# (See Step 2 above)

# 3. Wait for automatic redeployment
# OR trigger manual redeploy in Vercel dashboard
```

## Need Help?

1. **Can't find environment variables section in Vercel?**
   - Make sure you're looking at the right project
   - Section is under: Settings → Environment Variables (left sidebar)

2. **Can't find TinaCMS credentials?**
   - Log in to [app.tina.io](https://app.tina.io)
   - Make sure you're looking at the right project
   - Credentials are usually in "Overview" or "Configuration" section

3. **Variables added but still not working?**
   - Screenshot your Vercel environment variables page (without showing values)
   - Check build logs for any errors
   - Make sure you redeployed after adding variables

---

**Status**: Build should now succeed - admin will work once you add real credentials to Vercel.

