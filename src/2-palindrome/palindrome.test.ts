// Assuming you have a function named 'isPalindrome' that takes a string and returns true if it's a palindrome, false otherwise

import { isPalindrome } from "./palindrome";

describe("isPalindrome", () => {
  it("should return true for simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  it("should return true for palindromes with spaces", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  });

  it("should return true for palindromes with mixed case", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("mAdam")).toBe(true);
  });

  it("should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("openai")).toBe(false);
  });

  it("should return true for single-character strings", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("1")).toBe(true);
  });

  it("should return true for empty strings", () => {
    expect(isPalindrome("")).toBe(true);
  });

  // Additional edge cases you might consider:
  // - Strings with special characters or symbols
  // - Strings with numbers
  // - Very long strings to test performance
});
