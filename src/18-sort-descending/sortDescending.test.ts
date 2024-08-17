// Assuming your function is named `sortDescending`

import { sortDescending } from "./sortDescending";

describe("sortDescending", () => {
  it("should sort an array of numbers in descending order", () => {
    const arr = [5, 2, 9, 1, 7];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([9, 7, 5, 2, 1]);
  });

  it("should handle an already sorted array (in ascending order)", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
  });

  it("should handle an array with duplicate numbers", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-3, 5, -1, 0, 2];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([5, 2, 0, -1, -3]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [7];
    const sortedArr = sortDescending(arr);
    expect(sortedArr).toEqual([7]);
  });

  // Additional edge cases to consider
  // - Arrays with very large numbers
  // - Arrays with floating-point numbers
  // - Performance testing with very large arrays
});
