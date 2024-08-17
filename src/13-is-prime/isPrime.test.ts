// Assuming you have a function named isPrime that takes a number and returns true if it's prime, false otherwise

import { isPrime } from "./isPrime";

describe("isPrime", () => {
  it("should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    // Add more prime numbers as needed
  });

  it("should return false for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    // Add more non-prime numbers as needed
  });

  it("should handle negative numbers (typically not considered prime)", () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-2)).toBe(false);
    expect(isPrime(-3)).toBe(false);
  });

  it("should handle 0 (not a prime number)", () => {
    expect(isPrime(0)).toBe(false);
  });

  // Additional edge cases to consider
  // - Large prime numbers to test efficiency
  // - Boundary cases around the square root optimization (if used in your implementation)
});
