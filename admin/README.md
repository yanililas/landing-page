# TinaCMS Admin Interface

This directory contains the TinaCMS admin interface for managing articles.

## Accessing the Admin

### Local Development
- URL: `http://localhost:3000/admin`
- Start dev server: `npm run dev`

### Production
- URL: `https://averris.com/admin`
- Authentication via TinaCMS Cloud

## First Time Setup

1. Make sure you've completed the main setup in the root README
2. Run `npx tinacms init` to generate the admin interface
3. Configure your TinaCMS Cloud credentials in `.env`
4. Start the dev server: `npm run dev`

## Managing Articles

### Creating a New Article

1. Navigate to the admin interface
2. Click "Articles" in the sidebar
3. Click "Create New Article"
4. Fill in all required fields:
   - **Title**: Your article headline
   - **Category**: Choose from Thinkers, Publishers, or Impact
   - **Publish Date**: When the article should be dated
   - **Read Time**: Estimated reading time
   - **Excerpt**: Brief description (shows on article cards)
   - **Author**: Your name or "Averris Team"
   - **Body**: Main article content
   - **Published**: Toggle on to make it live
5. Click "Save"

### Editing an Article

1. Click on the article from the list
2. Make your changes
3. Click "Save"
4. Changes will be committed to Git

### Rich Text Features

The body editor supports:
- **Headings**: H1 through H4
- **Formatting**: Bold, italic, underline
- **Lists**: Bulleted and numbered
- **Links**: Internal and external
- **Images**: Upload from the media manager
- **Blockquotes**: For emphasized quotes
- **Code blocks**: For technical content
- **Custom blocks**: Callouts and quote boxes

## Tips

- **Save often**: Each save creates a Git commit
- **Preview**: Use the preview pane to see your changes
- **Drafts**: Set `published: false` to work on drafts
- **Images**: Upload images to `assets/articles/` via the media manager
- **SEO**: Write clear, descriptive titles and excerpts

## Troubleshooting

If the admin doesn't load:
1. Check your `.env` file has valid TinaCMS credentials
2. Verify you're running `npm run dev`
3. Clear browser cache and reload
4. Check the console for error messages

For more help, see the main README or [TinaCMS Documentation](https://tina.io/docs/)
