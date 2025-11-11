# Quick Start Guide: TinaCMS Setup for Averris

This guide will get you up and running with TinaCMS in under 10 minutes.

## Step 1: Install Dependencies (2 min)

```bash
npm install
```

## Step 2: Create TinaCMS Account (3 min)

1. Go to [https://app.tina.io/register](https://app.tina.io/register)
2. Sign up with GitHub (recommended)
3. Create a new project called "Averris"
4. When prompted, connect your GitHub repository
5. Copy your credentials:
   - **Client ID** (starts with `NEXT_PUBLIC_TINA_CLIENT_ID`)
   - **Token** (starts with `TINA_TOKEN`)

## Step 3: Configure Environment Variables (1 min)

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your TinaCMS credentials:

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_actual_client_id
TINA_TOKEN=your_actual_token
GITHUB_BRANCH=main
```

## Step 4: Initialize TinaCMS (1 min)

```bash
npx tinacms init
```

This generates the admin interface in the `/admin` folder.

## Step 5: Build Articles (1 min)

```bash
npm run build
```

This converts your markdown articles to HTML pages.

## Step 6: Test Locally (2 min)

```bash
npm run dev
```

Open your browser:
- **Website**: `http://localhost:3000`
- **Admin**: `http://localhost:3000/admin`

Test creating a new article!

## Step 7: Deploy to Vercel (Optional, 3 min)

### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
5. Click "Deploy"

### Via CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and add your environment variables when asked.

## Done! 🎉

Your TinaCMS-powered site is now live. You can:

- ✅ Edit articles at `https://your-site.vercel.app/admin`
- ✅ View articles at `https://your-site.vercel.app/insights`
- ✅ Auto-deploy on every Git push

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore [TinaCMS documentation](https://tina.io/docs/)
- Set up a custom domain in Vercel
- Invite team members to collaborate

## Common Issues

### "Cannot connect to TinaCMS"
→ Check your `.env` file has the correct credentials

### "Articles not showing"
→ Make sure `published: true` in article frontmatter, then run `npm run build`

### "Build failing on Vercel"
→ Verify environment variables are set in Vercel project settings

## Need Help?

- Check [TinaCMS Discord](https://discord.com/invite/zumN63Ybpf)
- See [Vercel Documentation](https://vercel.com/docs)
- Review the main [README.md](README.md)

