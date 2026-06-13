import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experimentStatus = z.enum(["proposed", "active", "paused", "completed"]);

const experiments = defineCollection({
  loader: glob({ base: "./src/content/experiments", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    mission: z.string(),
    commitment: z.string(),
    cadence: z.string(),
    status: experimentStatus,
    startedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    learned: z.array(z.string()).default([]),
    next: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const experimentLogs = defineCollection({
  loader: glob({ base: "./src/content/experimentLogs", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    experiment: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    learned: z.array(z.string()).default([]),
    next: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  experiments,
  experimentLogs,
};
