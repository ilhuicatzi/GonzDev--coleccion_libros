import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    autor: z.string(),
    area: z.string(),
    editorial: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    download_url: z.string().url(),
  }),
});

export const collections = { books };
