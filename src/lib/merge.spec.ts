import { describe, test, expect } from "vitest";
import { merge } from "./merge";

describe("merge", () => {
	test("merge three sorted arrays into one sorted array by ascending order", () => {
		const coll1: number[] = [1, 2, 3];
		const coll2: number[] = [9, 8, 7];
		const coll3: number[] = [4, 5, 6];

		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const result = merge(coll1, coll2, coll3);

		expect(result).toHaveLength(expected.length);
		expect(result).toEqual(expected);
	});

	test("array with different length inputs", () => {
		const coll1: number[] = [1, 4, 5];
		const coll2: number[] = [14, 12, 10, 7, 3, 1];
		const coll3: number[] = [2, 5, 8, 10, 13];

		const expected = [1, 1, 2, 3, 4, 5, 5, 7, 8, 10, 10, 12, 13, 14];
		const result = merge(coll1, coll2, coll3);

		expect(result).toHaveLength(expected.length);
		expect(result).toEqual(expected);
	});

	test("array when inputs are single elemenet array", () => {
		const coll1: number[] = [563];
		const coll2: number[] = [50];
		const coll3: number[] = [1145];

		const expected = [50, 563, 1145];
		const result = merge(coll1, coll2, coll3);

		expect(result).toHaveLength(expected.length);
		expect(result).toEqual(expected);
	});

	test("return empty array when inputs are empty", () => {
		const coll1: number[] = [];
		const coll2: number[] = [];
		const coll3: number[] = [];

		const expected = [];
		const result = merge(coll1, coll2, coll3);

		expect(result).toBeTruthy();
		expect(result).toHaveLength(0);
		expect(result).toEqual(expected);
	});
});
