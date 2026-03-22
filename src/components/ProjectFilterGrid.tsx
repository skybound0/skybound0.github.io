'use client';

import { useMemo, useState } from 'react';

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
		<div className="space-y-8">
			{selectedTag && (
				<div className="flex items-center gap-3">
					<p className="text-sm text-muted-foreground">
						Filtering by <span className="text-primary">{selectedTag}</span>
					</p>
					<button
						type="button"
						onClick={() => setSelectedTag('')}
						className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs hover:bg-primary/20"
					>
						Clear
					</button>
				</div>
			)}

			<div className="grid grid-cols-1 gap-6">
				{filteredProjects.map((project) => (
					<article
						key={project.slug}
						className="group rounded-xl border border-white/10 p-5 transition-all hover:border-primary/50 hover:bg-primary/5"
					>
						<a href={`/projects/${project.slug}`} className="block">
							{project.image && (
								<div
									className="relative w-full overflow-hidden rounded-lg mb-4"
									style={{ aspectRatio: project.imageAspectRatio || '16 / 9' }}
								>
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform group-hover:scale-105"
									/>
								</div>
							)}

							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
								<h3 className="text-lg font-semibold gradient-text">{project.title}</h3>
								<p className="text-sm text-muted-foreground">{project.date}</p>
							</div>
							{project.description && (
								<p className="text-sm text-muted-foreground mb-3">{project.description}</p>
							)}
						</a>

						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<a
									key={tag}
									href={`/projects?tag=${encodeURIComponent(tag)}`}
									onClick={(e) => {
										e.preventDefault();
										setSelectedTag(tag);
									}}
									className="px-2 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs hover:bg-primary/20"
								>
									{tag}
								</a>
							))}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
