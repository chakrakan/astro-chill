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

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["movies", "tv-shows", "restaurants", "books", "games"]),
    date: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    draft: z.boolean().optional(),
    // Restaurant-specific fields
    location: z.object({
      lat: z.number(),
      lng: z.number(),
      city: z.string().optional(),
      country: z.string().optional(),
    }).optional(),
    // Movies/TV-specific fields
    year: z.number().optional(),
    genre: z.string().optional(),
  }),
});

export const collections = { blog, projects, reviews };
