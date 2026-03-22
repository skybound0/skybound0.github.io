import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		images: z.array(z.string()).optional(),
		imageAspectRatio: z.string().optional(),
		cardAspectRatio: z.string().optional(),
		tags: z.array(z.string()).optional(),
		list: z.array(z.string()).optional(),
		draft: z.boolean().optional().default(false),
	}),
});

const activities = defineCollection({
	loader: glob({ base: './src/content/activities', pattern: '*.md' }),
	schema: z.object({
		title: z.string(),
		role: z.string(),
		organization: z.string(),
		date: z.string(),
		description: z.string().optional(),
		accomplishments: z.array(z.string()).optional(),
	}),
});

const buddyBox = defineCollection({
	loader: glob({ base: './src/content/buddy-box', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		items: z.array(
			z.object({
				image: z.string(),
				link: z.string().min(1),
				alt: z.string(),
			})
		).default([]),
	}),
});

export const collections = { projects, activities, buddyBox };
