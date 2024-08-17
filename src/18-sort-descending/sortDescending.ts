export const sortDescending = (arr: number[]): number[] => {
  arr.sort((a, b) => b - a);
  return arr;
};
