export const largestElementInNestedArray = (arr: any[]): number => {
  const flattened = arr.flat(Infinity);

  if (flattened.length == 0) {
    throw new Error("At least 1 element should be present");
  }

  return Math.max(...flattened);
};
