// Assuming you have a function named 'removeDuplicates' that takes an array and returns a new array with duplicates removed.

import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("should remove duplicates from an array of numbers", () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArr = removeDuplicates(arr);
    expect(uniqueArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with no duplicates", () => {
    const arr = [1, 2, 3, 4, 5];
    const uniqueArr = removeDuplicates(arr);
    expect(uniqueArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const uniqueArr = removeDuplicates(arr);
    expect(uniqueArr).toEqual([]);
  });

  it("should remove duplicates from an array of strings", () => {
    const arr = ["apple", "banana", "apple", "orange"];
    const uniqueArr = removeDuplicates(arr);
    expect(uniqueArr).toEqual(["apple", "banana", "orange"]);
  });

  it("should handle an array with mixed data types", () => {
    const arr = [1, "apple", 2, "apple", true, 2, true];
    const uniqueArr = removeDuplicates(arr);
    expect(uniqueArr).toEqual([1, "apple", 2, true]);
  });

  // Additional edge cases to consider:
  // - Arrays with objects (consider how to define equality for objects)
  // - Very large arrays to test performance
});
