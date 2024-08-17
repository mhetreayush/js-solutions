// Assuming your function is named `flattenArray`

import { flattenArray } from "./flattenArray";

describe("flattenArray", () => {
  it("should flatten a nested array", () => {
    const nestedArray = [1, [2, 3], [4, [5, 6]]];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle deeply nested arrays", () => {
    const nestedArray = [1, [2, [3, [4, [5]]]]];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const nestedArray: any[] = [];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([]);
  });

  it("should handle an array with no nesting", () => {
    const nestedArray = [1, 2, 3];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3]);
  });

  it("should handle nested arrays with mixed data types", () => {
    const nestedArray = [1, "hello", [2, true, ["world", 3]]];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([1, "hello", 2, true, "world", 3]);
  });

  // Additional edge cases to consider
  // - Nested arrays with sparse arrays (e.g., [1, , 2])
  // - Very deeply nested arrays to test for potential stack overflow issues
  // - Performance testing with large nested arrays
});
