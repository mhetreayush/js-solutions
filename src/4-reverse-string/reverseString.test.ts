// Assuming you have a function named 'reverseString' that takes a string and returns its reverse

import { reverseString } from "./reverseString";

describe("reverseString", () => {
  it("should reverse a simple string", () => {
    const str = "hello";
    const reversedStr = reverseString(str);
    expect(reversedStr).toBe("olleh");
  });

  it("should reverse a string with spaces", () => {
    const str = "hello world";
    const reversedStr = reverseString(str);
    expect(reversedStr).toBe("dlrow olleh");
  });

  it("should reverse a string with punctuation", () => {
    const str = "hello, world!";
    const reversedStr = reverseString(str);
    expect(reversedStr).toBe("!dlrow ,olleh");
  });

  it("should reverse an empty string", () => {
    const str = "";
    const reversedStr = reverseString(str);
    expect(reversedStr).toBe("");
  });

  it("should reverse a single-character string", () => {
    const str = "a";
    const reversedStr = reverseString(str);
    expect(reversedStr).toBe("a");
  });

  // Additional edge cases to consider:
  // - Strings with special characters or symbols
  // - Very long strings to test performance
});
