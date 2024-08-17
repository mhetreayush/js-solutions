export const sortAscending = (arr: number[]): number[] => {
  arr.sort((a, b) => a - b);
  return arr;
};
