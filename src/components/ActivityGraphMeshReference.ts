export type MeshPosition = {
	x: number;
	y: number;
};

export type MeshNode = {
	id: string;
	weight: number;
};

export type MeshHeroBounds = {
	left: number;
	right: number;
	top: number;
	bottom: number;
};

function seededUnit(seed: string): number {
	let hash = 2166136261;

	for (let index = 0; index < seed.length; index += 1) {
		hash ^= seed.charCodeAt(index);
		hash = Math.imul(hash, 16777619);
	}

	return (hash >>> 0) / 4294967295;
}

function distanceFromHero(position: MeshPosition, hero: MeshHeroBounds): number {
	const horizontalGap = position.x < hero.left ? hero.left - position.x : position.x > hero.right ? position.x - hero.right : 0;
	const verticalGap = position.y < hero.top ? hero.top - position.y : position.y > hero.bottom ? position.y - hero.bottom : 0;
	return Math.hypot(horizontalGap, verticalGap);
}

export function sampleMeshLayout(nodes: MeshNode[], hero: MeshHeroBounds, seed: number, verticalLayout = false): Map<string, MeshPosition> {
	const placed: Array<MeshPosition & { id: string }> = [];
	const keepoutRadius = verticalLayout ? 32 : 28;

	for (const node of nodes) {
		const iconRadius = verticalLayout ? 5 + node.weight * 3 : 6.5 + node.weight * 4.5;
		const targetDistance = keepoutRadius + 8 + (1 - node.weight) * 22;
		let bestPosition: MeshPosition | undefined;
		let bestScore = Number.POSITIVE_INFINITY;

		for (let attempt = 0; attempt < 900; attempt += 1) {
			const candidate = {
				x: 5 + seededUnit(`${seed}-${node.id}-x-${attempt}`) * 90,
				y: 5 + seededUnit(`${seed}-${node.id}-y-${attempt}`) * 90,
			};
			const insideHero = candidate.x > hero.left - iconRadius && candidate.x < hero.right + iconRadius && candidate.y > hero.top - iconRadius && candidate.y < hero.bottom + iconRadius;
			const insideTitleKeepout = Math.hypot(candidate.x - 50, candidate.y - 50) < keepoutRadius + iconRadius;

			if (insideHero || insideTitleKeepout) continue;

			const nearestDistance = placed.reduce((minimum, other) => Math.min(minimum, Math.hypot(candidate.x - other.x, candidate.y - other.y)), Number.POSITIVE_INFINITY);
			const spacingPenalty = nearestDistance === Number.POSITIVE_INFINITY ? 0 : 180 / nearestDistance;
			const rowPenalty = placed.reduce((total, other) => total + 70 / (Math.abs(candidate.y - other.y) + 5), 0);
			const columnPenalty = placed.reduce((total, other) => total + 55 / (Math.abs(candidate.x - other.x) + 5), 0);
			const radialPenalty = Math.abs(Math.hypot(candidate.x - 50, candidate.y - 50) - targetDistance) * 0.4;
			const coveragePenalty = Math.abs(distanceFromHero(candidate, hero)) * 0.08;
			const score = radialPenalty + coveragePenalty + spacingPenalty + rowPenalty + columnPenalty;

			if (score < bestScore) {
				bestScore = score;
				bestPosition = candidate;
			}
		}

		if (bestPosition) placed.push({ ...bestPosition, id: node.id });
	}

	return new Map(placed.map((position) => [position.id, { x: position.x, y: position.y }]));
}

export function scoreMeshLayout(layout: Map<string, MeshPosition>): number {
	const positions = [...layout.values()];
	if (positions.length < 2) return 0;

	const nearestDistances = positions.map((position, index) => {
		let nearest = Number.POSITIVE_INFINITY;
		for (let otherIndex = 0; otherIndex < positions.length; otherIndex += 1) {
			if (index === otherIndex) continue;
			nearest = Math.min(nearest, Math.hypot(position.x - positions[otherIndex].x, position.y - positions[otherIndex].y));
		}
		return nearest;
	});

	const average = nearestDistances.reduce((sum, distance) => sum + distance, 0) / nearestDistances.length;
	const variance = nearestDistances.reduce((sum, distance) => sum + (distance - average) ** 2, 0) / nearestDistances.length;
	const xValues = positions.map((position) => position.x);
	const yValues = positions.map((position) => position.y);
	const coverage = (Math.max(...xValues) - Math.min(...xValues)) * (Math.max(...yValues) - Math.min(...yValues));

	return Math.min(...nearestDistances) * 3 - Math.sqrt(variance) * 5 + coverage * 0.08;
}

export function findBestMeshLayout(nodes: MeshNode[], hero: MeshHeroBounds, verticalLayout = false): Map<string, MeshPosition> {
	let bestLayout = sampleMeshLayout(nodes, hero, 0, verticalLayout);
	let bestScore = scoreMeshLayout(bestLayout);

	for (let seed = 1; seed < 20; seed += 1) {
		const candidate = sampleMeshLayout(nodes, hero, seed, verticalLayout);
		const score = scoreMeshLayout(candidate);
		if (score > bestScore) {
			bestLayout = candidate;
			bestScore = score;
		}
	}

	return bestLayout;
}
