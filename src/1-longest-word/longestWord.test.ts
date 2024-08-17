// Assuming you have a function named 'findLongestWord' that takes a sentence as input and returns the longest word

import { findLongestWord } from "./longestWord";

describe("findLongestWord", () => {
  it("should return the longest word in a simple sentence", () => {
    const sentence = "The quick brown fox jumps over the lazy dog";
    const longestWord = findLongestWord(sentence);
    expect(longestWord).toBe("quick");
  });

  it("should handle sentences with punctuation", () => {
    const sentence = "This is a sentence, with some punctuation!";
    const longestWord = findLongestWord(sentence);
    expect(longestWord).toBe("punctuation!");
  });

  it("should handle multiple words of the same length", () => {
    const sentence = "Two words are the longest";
    const longestWord = findLongestWord(sentence);
    // You might want to decide how to handle ties - return the first one encountered, all of them, etc.
    expect(longestWord).toBe("longest"); // Or adjust based on your implementation
  });

  it("should handle empty sentences", () => {
    const sentence = "";
    const longestWord = findLongestWord(sentence);
    expect(longestWord).toBe(""); // Or throw an error, depending on your design
  });

  it("should handle sentences with only one word", () => {
    const sentence = "Hello";
    const longestWord = findLongestWord(sentence);
    expect(longestWord).toBe("Hello");
  });

  it("should handle sentences with hyphenated words", () => {
    const sentence = "This is a well-thought-out sentence";
    const longestWord = findLongestWord(sentence);
    expect(longestWord).toBe("well-thought-out"); // Or 'thought' if you split on hyphens
  });

  // Additional edge cases you might consider:
  // - Sentences with numbers
  // - Sentences with special characters
  // - Very long sentences to test performance
});
