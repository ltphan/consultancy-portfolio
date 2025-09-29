# How to Add Articles to Your Portfolio

## Quick Start

1. **Copy the template**
   ```bash
   cp _article-template.md src/content/articles/your-article-name.md
   ```

2. **Edit the frontmatter** (the stuff between `---`)
   - Update title, subtitle, date
   - Set `publishedAt` to the actual publication date
   - Add relevant tags
   - Set `draft: false` when ready to publish

3. **Write your content** in markdown below the frontmatter

4. **Add images** to `/public/images/articles/`

5. **Preview** your article at `http://localhost:4321/articles/your-article-name`

## Article Structure

### Required Fields
```yaml
title: "Your Article Title"
subtitle: "Compelling subtitle"
date: "September 2024"           # Display date
publishedAt: 2024-09-28         # Actual date for SEO
description: "SEO description"   # Used for meta tags
```

### Optional Fields
```yaml
tags: ["design", "AI"]          # Topic categories
image: "/images/articles/cover.jpg"  # Cover image
readTime: "5 min read"          # Estimated reading time
featured: true                  # Show on homepage
draft: true                     # Hide from public
```

## Easy Workflow

### For Case Studies
1. Use the template
2. Add before/after screenshots
3. Include metrics and results
4. Tag with relevant technologies

### For Blog Posts
1. Start with a hook in the intro
2. Use subheadings to break up content
3. Include code examples if technical
4. End with clear takeaways

## Schema.org & SEO

Your articles automatically include:
- ✅ Schema.org Article markup
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Author information
- ✅ Publication dates

## Image Best Practices

- Cover images: 1200x630px for social sharing
- Screenshots: Add borders for clarity
- Use descriptive alt text
- Compress images before uploading

## Going Live

1. Set `draft: false`
2. Double-check all metadata
3. Test the article URL
4. Share on social media using the auto-generated meta tags!

Your article will be available at:
`https://yoursite.com/articles/your-article-name`