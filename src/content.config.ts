import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { ProjectType } from "@utils/projects";

const blogBase = {
  title: z.string(),
  date: z.date(),
};

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      ...blogBase,
      description: z.string(),
      type: z.enum(ProjectType),
      color: z.optional(z.string()),
      colorDark: z.optional(z.string()),
      languages: z.array(z.string()),
      tools: z.optional(z.array(z.string())),
      sourceCode: z.optional(z.url()),
      url: z.optional(z.url()),
      external: z.optional(z.url()),
      small: z.optional(z.boolean()).default(true),
      image: z.optional(image()),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    ...blogBase,
    project: z.optional(reference("projects")),
  }),
});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
