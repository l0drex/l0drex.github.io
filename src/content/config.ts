import {z, defineCollection} from "astro:content";

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    html_url: z.string().url(),
    language: z.string().or(z.null()),
    fork: z.boolean()
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
})

export const collections = {
  'projects': projectCollection,
  'blog': blogCollection
}