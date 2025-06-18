import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const linguistics = defineCollection({
	// Load Markdown and MDX files in the `src/content/linguistics/` directory.
	loader: glob({ base: './src/content/linguistics', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const medicine = defineCollection({
	// Load Markdown and MDX files in the `src/content/medicine/` directory.
	loader: glob({ base: './src/content/medicine', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});


const opinion = defineCollection({
	// Load Markdown and MDX files in the `src/content/opinion/` directory.
	loader: glob({ base: './src/content/opinion', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { linguistics, medicine, opinion, };
