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
	const mergedArray: number[] = [];

	// loop until all arrays are empty
	while (collection1.length > 0 || collection2.length > 0 || collection3.length > 0) {
		// get first element of collection1, otherwise get the possible interger value
		const elemOfColl1 = collection1[0] || Number.MAX_SAFE_INTEGER;
		// get last element of collection2, otherwise get the possible interger value
		const elemOfColl2 = collection2[collection2.length - 1] || Number.MAX_SAFE_INTEGER;
		// get first element of collection3, otherwise get the possible interger value
		const elemOfColl3 = collection3[0] || Number.MAX_SAFE_INTEGER;

		// push the smallest element of 3 collections and remove from the collection
		if (elemOfColl1 <= elemOfColl2 && elemOfColl1 <= elemOfColl3) {
			mergedArray.push(elemOfColl1);
			collection1.shift();
		} else if (elemOfColl2 <= elemOfColl1 && elemOfColl2 <= elemOfColl3) {
			mergedArray.push(elemOfColl2);
			collection2.pop();
		} else {
			mergedArray.push(elemOfColl3);
			collection3.shift();
		}
	}

	return mergedArray;
};
