# TinaCMS Admin Interface

This directory contains the auto-generated TinaCMS admin interface.

⚠️ **Note**: The files in this directory are automatically generated during the build process. 
Don't edit them manually - they'll be overwritten!

## Accessing the Admin

### Production
- URL: `https://your-domain.com/admin`
- Authentication: TinaCMS Cloud (requires login)

### Local Development
```bash
npm run dev
```
Then visit: `http://localhost:3000/admin`

## Setup Required

Before the admin interface works, you need to:

1. **Add Environment Variables in Vercel**:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` - Your TinaCMS client ID
   - `TINA_TOKEN` - Your TinaCMS token

2. **Get Credentials**: Visit [app.tina.io](https://app.tina.io) to get these values

3. **Redeploy**: After adding environment variables, redeploy your Vercel site

## Full Setup Instructions

See [TINACMS_SETUP.md](../TINACMS_SETUP.md) in the root directory for complete setup instructions.

## How It Works

1. During build, `npm run build` executes `tinacms build`
2. TinaCMS generates:
   - `admin/index.html` - The admin interface entry point
   - `admin/assets/` - JavaScript and CSS bundles
   - `tina/__generated__/` - TypeScript types and GraphQL client

3. These files are served at `/admin` on your deployed site

## Managing Content

Once the admin is set up, you can:
- Create new articles
- Edit existing articles
- Upload images to `assets/articles/`
- Preview changes in real-time
- Publish/unpublish articles

All changes are automatically committed to your Git repository.

## Troubleshooting

**Admin page not loading?**
- Verify environment variables are set in Vercel
- Check the browser console for errors
- Ensure you've redeployed after adding credentials

**Can't authenticate?**
- Verify your TinaCMS credentials at [app.tina.io](https://app.tina.io)
- Make sure your Git branch is pushed to GitHub
- Check TinaCMS project is connected to your repository

For more help, see [TINACMS_SETUP.md](../TINACMS_SETUP.md) or the [TinaCMS Documentation](https://tina.io/docs/).

