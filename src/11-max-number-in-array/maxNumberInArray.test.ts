// Assuming you have a function named maxNumberInArray that takes an array of numbers and returns the maximum value.

import { maxNumberInArray } from "./maxNumberInArray";

describe("maxNumberInArray", () => {
  it("should find the maximum number in a simple array", () => {
    const arr = [1, 5, 3, 9, 2];
    const max = maxNumberInArray(arr);
    expect(max).toBe(9);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-2, -5, 0, -1, 3];
    const max = maxNumberInArray(arr);
    expect(max).toBe(3);
  });

  it("should handle an array with duplicate numbers", () => {
    const arr = [5, 2, 5, 7, 2];
    const max = maxNumberInArray(arr);
    expect(max).toBe(7);
  });

  it("should handle an array with a single element", () => {
    const arr = [10];
    const max = maxNumberInArray(arr);
    expect(max).toBe(10);
  });

  it("should handle an empty array (consider throwing an error or returning a special value)", () => {
    const arr: number[] = [];
    // Option 1: Expect an error to be thrown
    expect(() => maxNumberInArray(arr)).toThrow();

    // Option 2: Expect a specific return value (e.g., -Infinity or null)
    // const max = maxNumberInArray(arr);
    // expect(max).toBe(-Infinity); // Or adjust based on your implementation
  });

  // Additional test cases to consider
  // - Arrays with very large numbers
  // - Arrays with floating-point numbers
  // - Performance testing with very large arrays
});
