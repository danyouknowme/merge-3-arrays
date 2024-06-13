export interface Merge {
	(collection1: number[], collection2: number[], collection3: number[]): number[];
}

/**
 * Merge 3 sorted arrays into one sorted array by ascending order
 * @param collection1 array of numbers that already sorted from min(0) to max
 * @param collection2 array of numbers that already sorted from max to min(0)
 * @param collection3 array of numbers that already sorted from min(0) to max
 * @returns merged array of 3 collections that sorted from min(0) to max
 */
export const merge: Merge = (collection1, collection2, collection3) => {
	return [];
};
