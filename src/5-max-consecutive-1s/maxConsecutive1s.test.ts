// Assuming you have a function named 'findMaxConsecutiveOnes' that takes an array of numbers and returns the max count of consecutive 1's.

import { findMaxConsecutiveOnes } from "./maxConsecutive1s";

describe("findMaxConsecutiveOnes", () => {
  it("should return the correct count for an array with consecutive 1s", () => {
    const arr = [1, 1, 0, 1, 1, 1];
    const maxConsecutiveOnes = findMaxConsecutiveOnes(arr);
    expect(maxConsecutiveOnes).toBe(3);
  });

  it("should handle an array with no 1s", () => {
    const arr = [0, 0, 0, 0];
    const maxConsecutiveOnes = findMaxConsecutiveOnes(arr);
    expect(maxConsecutiveOnes).toBe(0);
  });

  it("should handle an array with all 1s", () => {
    const arr = [1, 1, 1, 1];
    const maxConsecutiveOnes = findMaxConsecutiveOnes(arr);
    expect(maxConsecutiveOnes).toBe(4);
  });

  it("should handle an array with 1s at the beginning and end", () => {
    const arr = [1, 1, 0, 0, 1, 1, 1];
    const maxConsecutiveOnes = findMaxConsecutiveOnes(arr);
    expect(maxConsecutiveOnes).toBe(3);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const maxConsecutiveOnes = findMaxConsecutiveOnes(arr);
    expect(maxConsecutiveOnes).toBe(0);
  });

  // Additional edge cases to consider:
  // - Very large arrays to test performance
});
