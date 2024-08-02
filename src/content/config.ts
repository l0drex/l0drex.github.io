import { z, defineCollection, reference } from "astro:content";
import { ProjectType } from "@utils/projects";

const blogBase = {
  title: z.string(),
  date: z.date()
}

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    ...blogBase,
    description: z.string(),
    type: z.nativeEnum(ProjectType),
    color: z.optional(z.string()),
    colorDark: z.optional(z.string()),
    languages: z.array(z.string()),
    tools: z.optional(z.array(z.string())),
    sourceCode: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    external: z.optional(z.string().url()),
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    ...blogBase,
    project: z.optional(reference('projects')),
  })
})

export const collections = {
  'projects': projectCollection,
  'blog': blogCollection
}
