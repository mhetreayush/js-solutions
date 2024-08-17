// Assuming your function is named `countOccurrences` and it takes a string as input

import { countOccurrences } from "./count-occurrences";

describe("countOccurrences", () => {
  it("should count character occurrences in a simple string", () => {
    const str = "hello world";
    const expectedOutput = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      w: 1,
      r: 1,
      d: 1,
    };
    expect(countOccurrences(str)).toEqual(expectedOutput);
  });

  it("should handle case sensitivity", () => {
    const str = "AaBbCc";
    const expectedOutput = {
      A: 1,
      a: 1,
      B: 1,
      b: 1,
      C: 1,
      c: 1,
    };
    expect(countOccurrences(str)).toEqual(expectedOutput);
  });

  it("should handle empty strings", () => {
    const str = "";
    const expectedOutput = {};
    expect(countOccurrences(str)).toEqual(expectedOutput);
  });

  it("should handle strings with spaces and punctuation", () => {
    const str = "hello, world!";
    const expectedOutput = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      w: 1,
      r: 1,
      d: 1,
      ",": 1,
      "!": 1,
    };
    expect(countOccurrences(str)).toEqual(expectedOutput);
  });

  it("should handle strings with special characters", () => {
    const str = "hello😊";
    const expectedOutput = {
      h: 1,
      e: 1,
      l: 2,
      o: 1,
      "😊": 1,
    };
    expect(countOccurrences(str)).toEqual(expectedOutput);
  });

  // Additional edge cases to consider
  // - Very long strings to test performance (if applicable)
});
