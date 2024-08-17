// Assuming the function is named 'onlyEvenNumbers' and it takes an array of numbers as input.

import { onlyEvenNumbers } from "./onlyEvenNumbers";

describe("onlyEvenNumbers", () => {
  it("should return only the even numbers from an array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const evenNumbers = onlyEvenNumbers(arr);
    expect(evenNumbers).toEqual([2, 4, 6]);
  });

  it("should handle an array with no even numbers", () => {
    const arr = [1, 3, 5, 7];
    const evenNumbers = onlyEvenNumbers(arr);
    expect(evenNumbers).toEqual([]);
  });

  it("should handle an array with only even numbers", () => {
    const arr = [2, 4, 6, 8];
    const evenNumbers = onlyEvenNumbers(arr);
    expect(evenNumbers).toEqual([2, 4, 6, 8]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const evenNumbers = onlyEvenNumbers(arr);
    expect(evenNumbers).toEqual([]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-2, 1, -4, 3, 0];
    const evenNumbers = onlyEvenNumbers(arr);
    expect(evenNumbers).toEqual([-2, -4, 0]);
  });

  // Additional edge cases to consider:
  // - Arrays with floating-point numbers (ensure they are handled correctly)
  // - Very large arrays to test performance
});
