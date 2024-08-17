// Assuming you have a function named `otherStringFromFirst` that takes two strings and returns true if they are rearrangements of each other, false otherwise.

import { otherStringFromFirst } from "./otherStringFromFirst";

describe("otherStringFromFirst", () => {
  it("should return true for valid rearrangements", () => {
    expect(otherStringFromFirst("apple", "papel")).toBe(true);
    expect(otherStringFromFirst("hello", "lleoh")).toBe(true);
    expect(otherStringFromFirst("listen", "silent")).toBe(true);
    expect(otherStringFromFirst("dormitory", "dirty room")).toBe(true);
  });

  it("should return false for strings with different lengths", () => {
    expect(otherStringFromFirst("abc", "ab")).toBe(false);
    expect(otherStringFromFirst("hello", "world")).toBe(false);
  });

  it("should return false for strings with different character frequencies", () => {
    expect(otherStringFromFirst("car", "rat")).toBe(false);
    expect(otherStringFromFirst("aabb", "abac")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(otherStringFromFirst("", "")).toBe(true);
    expect(otherStringFromFirst("hello", "")).toBe(false);
  });

  it("should handle case sensitivity", () => {
    expect(otherStringFromFirst("Hello", "hello")).toBe(true); // Case-insensitive by default
    // If your implementation is case-sensitive, adjust this test accordingly
  });

  it("should handle strings with spaces and punctuation", () => {
    expect(otherStringFromFirst("a b c", "c b a")).toBe(true);
    expect(otherStringFromFirst("hello, world!", "world! hello,")).toBe(true);
  });

  // Additional edge cases to consider:
  // - Strings with special characters or symbols
  // - Very long strings to test performance
});
