import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const favorites = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["movies", "tv", "restaurants"]),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    location: z
      .object({
        name: z.string(),
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    link: z.string().optional(),
  }),
});

export const collections = { blog, projects, favorites };
