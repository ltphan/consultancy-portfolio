import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    publishedAt: z.date(),
    author: z.string().default('Linh Phan'),
    authorBio: z.string().default('Product Designer & Developer specializing in AI-powered solutions'),
    authorImage: z.string().default('/src/assets/lp-logo.png'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
    // Schema.org fields
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  'articles': articlesCollection,
};