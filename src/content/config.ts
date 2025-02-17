import { Description } from "@radix-ui/react-dialog";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string().min(3),
        images: z.array(z.string()).min(1),
        technologies: z.array(z.string()).min(1),
        general: z.object({
            overview: z.string(),
            targetClient: z.string(),
        }),
        backend: z.object({
            architecture: z.string().min(3),
            technologies: z.array(z.string()).min(1), // Ahora es un array
            designPatterns:z.array( z.string()),
            performance: z.string().optional(),
        }).optional(),
        frontend: z.object({
            architecture: z.string().min(3),
            technologies: z.array(z.string()).min(1), // Ahora es un array
            designPatterns: z.array(z.string()),
            performance: z.string().optional(),
        }).optional(),
        devops:z.string().optional(),
        description: z.string().min(10),
        url: z.string().url().optional(),
    }),
});

const experienceCollection = defineCollection({
    type:"content",
    schema: z.object({
      company: z.string(),
      roles: z.array(
        z.object({
          title: z.string(),
          startDate: z.string(),
          endDate: z.string(),
          duration:z.number(),
          location:z.string(),
          description:z.string(),
          responsibilities: z.array(z.string()),
          technologies: z.array(z.string()),
          relatedProjects: z.array(z.string()),
        })
      ),
    }),
  });

export const collections = {
    "projects": projectsCollection,
    "experience": experienceCollection
};
