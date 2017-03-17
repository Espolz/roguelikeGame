export function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function clamp(val, min, max) {
	return Math.min(Math.max(min, val), max);
}