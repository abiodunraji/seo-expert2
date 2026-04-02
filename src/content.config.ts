import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diensten = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/diensten' }),
  schema: z.object({
    title: z.string(),
    shortDesc: z.string(),
    icon: z.string(),
    order: z.number(),
    watHoudtHetIn: z.string(),
    aanpak: z.array(z.string()),
    ctaText: z.string().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    results: z.array(z.string()),
    image: z.string().optional(),
    publishedDate: z.date(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { diensten, cases };
