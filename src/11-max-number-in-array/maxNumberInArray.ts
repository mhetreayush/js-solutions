export const maxNumberInArray = (arr: number[]): number => {
  if (arr.length === 0)
    throw new Error("Array must contain at least 1 element");
  return Math.max(...arr);
};
