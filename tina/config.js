import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  // Empty string fallback allows build to complete, but admin won't work without real values
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/articles",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "content/articles",
        format: "mdx",
        defaultItem: () => {
          return {
            title: "New Article",
            categories: ["thinkers"],
            publishDate: new Date().toISOString(),
            readTime: "5 min read",
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            required: true,
            list: true,
            options: [
              {
                value: "thinkers",
                label: "Thinkers",
              },
              {
                value: "publishers",
                label: "Publishers",
              },
              {
                value: "impact",
                label: "Impact",
              },
            ],
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
            description: "e.g., '5 min read'",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            description: "Short description for the article card",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            description: "Optional featured image for the article",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            description: "Article author name",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "callout",
                label: "Callout",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "type",
                    label: "Type",
                    options: ["info", "warning", "success"],
                  },
                ],
              },
              {
                name: "quote",
                label: "Quote",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Quote Text",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Quote Author",
                  },
                ],
              },
            ],
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
            description: "Set to true to make this article visible on the site",
          },
        ],
        ui: {
          router: ({ document }) => {
            return `/insights/${document._sys.filename}.html`;
          },
        },
      },
    ],
  },
});

