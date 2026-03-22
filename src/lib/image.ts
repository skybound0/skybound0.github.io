const ASPECT_RATIO_PATTERN = /^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/;

export function parseAspectRatio(aspectRatio?: string, fallback = '16 / 9'): [number, number] {
	const value = (aspectRatio || fallback).trim();
	const match = value.match(ASPECT_RATIO_PATTERN);

	if (!match) {
		const fallbackMatch = fallback.trim().match(ASPECT_RATIO_PATTERN);
		if (!fallbackMatch) return [16, 9];
		return [Number(fallbackMatch[1]), Number(fallbackMatch[2])];
	}

	const width = Number(match[1]);
	const height = Number(match[2]);

	if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
		return [16, 9];
	}

	return [width, height];
}

export function getDimensionsFromAspectRatio(aspectRatio?: string, targetWidth = 1600, fallback = '16 / 9') {
	const [ratioWidth, ratioHeight] = parseAspectRatio(aspectRatio, fallback);
	const width = Math.max(1, Math.round(targetWidth));
	const height = Math.max(1, Math.round((width * ratioHeight) / ratioWidth));

	return { width, height };
}