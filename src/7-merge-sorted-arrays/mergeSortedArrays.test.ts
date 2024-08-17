// Assuming you have a function named 'mergeSortedArrays' that takes two sorted arrays and returns a new sorted array containing all elements from both.

import { mergeSortedArrays } from "./mergeSortedArrays";

describe("mergeSortedArrays", () => {
  it("should merge two sorted arrays correctly", () => {
    const arr1 = [0, 3, 4, 31];
    const arr2 = [4, 6, 30];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([0, 3, 4, 4, 6, 30, 31]);
  });

  it("should handle empty arrays", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([]);
  });

  it("should handle one empty array", () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([1, 2, 3]);

    const arr3: number[] = [];
    const arr4 = [2, 4, 6];
    const mergedArr2 = mergeSortedArrays(arr3, arr4);
    expect(mergedArr2).toEqual([2, 4, 6]);
  });

  it("should handle arrays of different lengths", () => {
    const arr1 = [1, 5, 9];
    const arr2 = [2, 3, 4, 6, 7, 8];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should handle duplicate elements", () => {
    const arr1 = [1, 2, 2, 5];
    const arr2 = [2, 4, 6];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([1, 2, 2, 2, 4, 5, 6]);
  });

  it("should handle negative numbers", () => {
    const arr1 = [-3, 0, 2];
    const arr2 = [-5, -1, 1];
    const mergedArr = mergeSortedArrays(arr1, arr2);
    expect(mergedArr).toEqual([-5, -3, -1, 0, 1, 2]);
  });

  // Optional: Add a test case for large arrays to assess performance
  // it('should handle large arrays efficiently', () => {
  //   // Create two large sorted arrays (e.g., with 1000 or more elements)
  //   // const largeArr1 = ...;
  //   // const largeArr2 = ...;
  //
  //   // Merge the arrays and measure the execution time
  //   const startTime = performance.now();
  //   const mergedArr = mergeSortedArrays(largeArr1, largeArr2);
  //   const endTime = performance.now();
  //
  //   // Assert that the merged array is sorted correctly
  //   // ...
  //
  //   // Assert that the execution time is within an acceptable limit
  //   const executionTime = endTime - startTime;
  //   expect(executionTime).toBeLessThan(someThreshold); // Adjust the threshold as needed
  // });
});
