// Assuming your function is named `largestElementInNestedArray`

import { largestElementInNestedArray } from "./largestElementInNestedArray";

describe("largestElementInNestedArray", () => {
  it("should find the largest element in a nested array", () => {
    const nestedArray = [
      [3, 4, 58],
      [709, 8, 9, [10, 11]],
      [111, 2],
    ];
    const largest = largestElementInNestedArray(nestedArray);
    expect(largest).toBe(709);
  });

  it("should handle nested arrays with varying depths", () => {
    const nestedArray = [1, [2, 3, [4, 5]], 6, [[7, [8, 9]]]];
    const largest = largestElementInNestedArray(nestedArray);
    expect(largest).toBe(9);
  });

  it("should handle an empty nested array", () => {
    const nestedArray: any[] = [];

    // Consider how you want to handle this case
    // Option 1: Throw an error
    expect(() => largestElementInNestedArray(nestedArray)).toThrow();

    // const largest = largestElementInNestedArray(nestedArray);
    // Option 2: Return a specific value (e.g., -Infinity or null)
    // expect(largest).toBe(-Infinity); // Or adjust based on your implementation
  });

  it("should handle nested arrays with only one element at each level", () => {
    const nestedArray = [[[1]]];
    const largest = largestElementInNestedArray(nestedArray);
    expect(largest).toBe(1);
  });

  it("should handle nested arrays with negative numbers", () => {
    const nestedArray = [
      [-1, -3],
      [-2, [-5, -4]],
    ];
    const largest = largestElementInNestedArray(nestedArray);
    expect(largest).toBe(-1);
  });

  // Additional edge cases to consider
  // - Nested arrays with mixed data types (ensure they are handled appropriately)
  // - Very deeply nested arrays to test for potential stack overflow issues
  // - Performance testing with large nested arrays
});
