// Assuming your function is named `sortAscending`

import { sortAscending } from "./sortAscending";

describe("sortAscending", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 2, 9, 1, 7];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([1, 2, 5, 7, 9]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate numbers", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-3, 5, -1, 0, 2];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([-3, -1, 0, 2, 5]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [7];
    const sortedArr = sortAscending(arr);
    expect(sortedArr).toEqual([7]);
  });

  // Additional edge cases to consider
  // - Arrays with very large numbers
  // - Arrays with floating-point numbers
  // - Performance testing with very large arrays
});
