import { uniqueObjectsFromArray } from "./uniqueObjectsFromArray";

describe("uniqueObjectsFromArray", () => {
  it("should return unique objects based on the 'name' property", () => {
    const inputArray = [
      { name: "sai" },
      { name: "Nang" },
      { name: "sai" },
      { name: "Nang" },
      { name: "111111" },
    ];

    const expectedOutput = [
      { name: "sai" },
      { name: "Nang" },
      { name: "111111" },
    ];

    const uniqueObjects = uniqueObjectsFromArray(inputArray);
    expect(uniqueObjects).toEqual(expectedOutput);
  });

  it("should handle an empty array", () => {
    const inputArray: { name: string }[] = [];
    const uniqueObjects = uniqueObjectsFromArray(inputArray);
    expect(uniqueObjects).toEqual([]);
  });

  it("should handle an array with all unique objects", () => {
    const inputArray = [
      { name: "apple" },
      { name: "banana" },
      { name: "orange" },
    ];
    const uniqueObjects = uniqueObjectsFromArray(inputArray);
    expect(uniqueObjects).toEqual(inputArray); // Same array reference
  });

  it("should handle an array with only duplicate objects", () => {
    const inputArray = [
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
    ];
    const uniqueObjects = uniqueObjectsFromArray(inputArray);
    expect(uniqueObjects).toEqual([{ name: "apple" }]);
  });

  // Additional test cases to consider:
  // - Objects with other properties besides 'name' (ensure they don't affect uniqueness)
  // - Very large arrays to test performance
  // - Objects with complex 'name' values (e.g., containing spaces, special characters)
});
