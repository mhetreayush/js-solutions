import { correspondingSquare } from "./correspondingSquare";

describe("correspondingSquare", () => {
  it("should return true for corresponding squared values with same frequency", () => {
    expect(correspondingSquare([1, 2, 3], [1, 4, 9])).toBe(true);
    expect(correspondingSquare([1, 2, 2], [1, 4, 4])).toBe(true);
    expect(correspondingSquare([-1, -2], [1, 4])).toBe(true);
  });

  it("should return false for different lengths", () => {
    expect(correspondingSquare([1, 2, 3], [1, 4])).toBe(false);
    expect(correspondingSquare([1, 2], [1, 4, 9])).toBe(false);
  });

  it("should return false for non-corresponding squared values", () => {
    expect(correspondingSquare([1, 2, 3], [1, 9, 4])).toBe(false);
    expect(correspondingSquare([1, 2, 3], [1, 4, 16])).toBe(false);
  });

  it("should return false for different frequencies", () => {
    expect(correspondingSquare([1, 2, 2, 3], [1, 4, 9])).toBe(false);
    expect(correspondingSquare([1, 2, 3], [1, 4, 4, 9])).toBe(false);
  });

  it("should handle empty arrays", () => {
    expect(correspondingSquare([], [])).toBe(true);
  });
});
