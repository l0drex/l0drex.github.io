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

export const collections = {
  'projects': projectCollection
}