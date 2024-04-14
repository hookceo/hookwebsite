import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		fullImage: z.string().optional(),
		author: z.string(),
		authorRole: z.string().optional(),
		type: z.string().optional(),
		product: z.string().optional()

	}),
});

export const collections = { blog };
