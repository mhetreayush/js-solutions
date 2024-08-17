// Assuming your function is named `reverseWords`

import { reverseWords } from "./reverseWords";

describe("reverseWords", () => {
  it("should reverse the words in a simple sentence", () => {
    const sentence = "This is a test sentence";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("sentence test a is This");
  });

  it("should handle sentences with leading/trailing spaces", () => {
    const sentence = "  Hello world   ";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("   world Hello  ");
  });

  it("should handle sentences with multiple spaces between words", () => {
    const sentence = "This    is   a   test";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("test   a   is    This");
  });

  it("should handle sentences with punctuation", () => {
    const sentence = "Hello, world! How are you?";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("you? are How world! Hello,");
  });

  it("should handle an empty string", () => {
    const sentence = "";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("");
  });

  it("should handle a single-word sentence", () => {
    const sentence = "Hello";
    const reversedSentence = reverseWords(sentence);
    expect(reversedSentence).toBe("Hello");
  });
});
