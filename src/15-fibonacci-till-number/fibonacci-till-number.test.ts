// Assuming your function is named `fibonacciTillNumber` and takes the number of terms as input

import { fibonacciTillNumber } from "./fibonacci-till-number";

describe("fibonacciTillNumber", () => {
  it("should generate the correct Fibonacci sequence for positive number of terms", () => {
    expect(fibonacciTillNumber(0)).toEqual([]);
    expect(fibonacciTillNumber(1)).toEqual([0]);
    expect(fibonacciTillNumber(2)).toEqual([0, 1]);
    expect(fibonacciTillNumber(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciTillNumber(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it("should handle negative input (consider throwing an error or returning an empty array)", () => {
    // Option 1: Expect an error to be thrown
    expect(() => fibonacciTillNumber(-3)).toThrow();

    // Option 2: Expect an empty array
    // expect(fibonacciTillNumber(-3)).toEqual([]);
  });

  // Additional edge cases to consider
  // - Large number of terms to test performance (if applicable)
});
