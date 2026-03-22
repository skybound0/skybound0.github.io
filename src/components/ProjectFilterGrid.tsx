'use client';

import { useMemo, useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { getDimensionsFromAspectRatio } from '../lib/image';

type Project = {
	title: string;
	slug: string;
	date: string;
	description?: string;
	image?: string;
	imageAspectRatio?: string;
	tags: string[];
};

type Props = {
	projects: Project[];
	initialTag?: string;
};

export default function ProjectFilterGrid({ projects, initialTag = '' }: Props) {
	const [selectedTag, setSelectedTag] = useState(initialTag);

	const filteredProjects = useMemo(() => {
		if (!selectedTag) return projects;
		return projects.filter((project) => project.tags.includes(selectedTag));
	}, [projects, selectedTag]);

	return (
		<div className="flex flex-col gap-8">
			{selectedTag && (
				<div className="flex items-center gap-3">
					<p className="text-sm text-muted-foreground">
						Filtering by <span className="text-primary">{selectedTag}</span>
					</p>
					<Button type="button" variant="outline" size="sm" onClick={() => setSelectedTag('')}>
						Clear
					</Button>
				</div>
			)}

			<div className="grid grid-cols-1 gap-6">
				{filteredProjects.map((project) => (
					(() => {
						const imageDimensions = getDimensionsFromAspectRatio(project.imageAspectRatio, 1400);

						return (
					<Card
						key={project.slug}
						className="group overflow-hidden border-border bg-card/66 py-0 transition-colors hover:border-primary/40 hover:bg-card/88"
					>
						<a href={`/projects/${project.slug}`} className="block">
							{project.image && (
								<div
									className="relative w-full overflow-hidden border-b border-border"
									style={{ aspectRatio: project.imageAspectRatio || '16 / 9' }}
								>
									<img
										src={project.image}
										alt={project.title}
										width={imageDimensions.width}
										height={imageDimensions.height}
										loading="lazy"
										decoding="async"
										sizes="(max-width: 768px) 100vw, 900px"
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							)}
						</a>

						<CardHeader className="gap-3">
							<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<CardTitle className="text-lg leading-snug">
									<a href={`/projects/${project.slug}`} className="no-underline hover:text-primary">
										{project.title}
									</a>
								</CardTitle>
								<p className="text-sm text-muted-foreground">{project.date}</p>
							</div>
						</CardHeader>

						{project.description && (
							<CardContent>
								<CardDescription>{project.description}</CardDescription>
							</CardContent>
						)}

						<CardFooter className="mt-3 flex flex-wrap gap-2 pb-4">
							{project.tags.map((tag) => (
								<Button
									key={tag}
									asChild
									size="sm"
									variant={selectedTag === tag ? 'default' : 'outline'}
									className="h-7 rounded-full px-3 text-xs"
								>
									<a
										href={`/projects?tag=${encodeURIComponent(tag)}`}
										onClick={(e) => {
										e.preventDefault();
										setSelectedTag(tag);
									}}
								>
									{tag}
								</a>
								</Button>
							))}
						</CardFooter>
					</Card>
						);
					})()
				))}
			</div>
		</div>
	);
}
