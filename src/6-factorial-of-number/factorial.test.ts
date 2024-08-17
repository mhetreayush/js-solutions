import { factorial } from "./factorial";
describe("factorial", () => {
  it("should return the correct factorial for positive numbers", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  it("should handle negative numbers (typically an error or special case)", () => {
    // Decide how you want to handle negative input
    // Option 1: Throw an error
    expect(() => factorial(-1)).toThrow();

    // Option 2: Return a specific value (e.g., -1 or NaN)
    // expect(factorial(-1)).toBe(-1);
  });

  // Additional considerations:
  // - Very large numbers (might need BigInt or handle potential overflow)
});
