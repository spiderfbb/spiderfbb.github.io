import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AREAS, type Area } from './data/areas';

const area = z.enum(Object.keys(AREAS) as [Area, ...Area[]]);

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.string(),
      summary: z.string(),
      client: z.string(),
      role: z.string(),
      team: z.string().optional(),
      year: z.number(),
      // Still being built: the year shows as "2026 – Present".
      ongoing: z.boolean().default(false),
      order: z.number().default(99),
      stack: z.array(z.string()),
      areas: z.array(area),
      links: z
        .object({
          demo: z.url().optional(),
        })
        .default({}),
      // Only the best few: the first is the cover and the lead image, the rest the highlights.
      screenshots: z
        .array(z.object({ src: image(), alt: z.string() }))
        .min(1)
        .max(3),
      draft: z.boolean().default(false),
    }),
});

const activities = defineCollection({
  loader: file('src/content/activities.json'),
  schema: z.object({
    year: z.number(),
    title: z.string(),
    by: z.string(),
    type: z.enum(['Organization', 'Seminar', 'Certification', 'Competition']),
    result: z.string().optional(),
    url: z.url().optional(),
    sample: z.boolean().default(false),
  }),
});

export const collections = { projects, activities };
