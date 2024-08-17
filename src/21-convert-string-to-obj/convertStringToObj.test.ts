// Assuming your function is named `convertStringToObj`

import { convertStringToObj } from "./convertStringToObj";

describe("convertStringToObj", () => {
  it("should convert a simple string input to a nested object", () => {
    const inputString = "a.b.c";
    const value = "someValue";
    const expectedOutput = { a: { b: { c: "someValue" } } };
    expect(convertStringToObj(inputString, value)).toEqual(expectedOutput);
  });

  it("should handle different property names and values", () => {
    const inputString = "x.y.z";
    const value = 123;
    const expectedOutput = { x: { y: { z: 123 } } };
    expect(convertStringToObj(inputString, value)).toEqual(expectedOutput);
  });

  it("should handle an empty input string (consider returning an empty object or throwing an error)", () => {
    const inputString = "";
    const value = "someValue";

    // Option 1: Expect an empty object
    const expectedOutput = {};
    expect(convertStringToObj(inputString, value)).toEqual(expectedOutput);

    // Option 2: Expect an error to be thrown
    // expect(() => convertStringToObj(inputString, value)).toThrow();
  });

  it("should handle a single-level input string", () => {
    const inputString = "a";
    const value = "someValue";
    const expectedOutput = { a: "someValue" };
    expect(convertStringToObj(inputString, value)).toEqual(expectedOutput);
  });

  it("should handle input strings with varying levels of nesting", () => {
    const inputString1 = "a.b";
    const value1 = "value1";
    const expectedOutput1 = { a: { b: "value1" } };
    expect(convertStringToObj(inputString1, value1)).toEqual(expectedOutput1);

    const inputString2 = "p.q.r.s";
    const value2 = true;
    const expectedOutput2 = { p: { q: { r: { s: true } } } };
    expect(convertStringToObj(inputString2, value2)).toEqual(expectedOutput2);
  });

  // Additional edge cases to consider
  // - Input strings with invalid characters (e.g., spaces, special symbols) in property names
  // - Handling potential conflicts if a property already exists at a certain level of nesting
});
