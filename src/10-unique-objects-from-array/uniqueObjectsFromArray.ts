export const uniqueObjectsFromArray = (
  arr: Record<any, any>[]
): Record<any, any>[] => {
  const objStrings = arr.map((obj) => JSON.stringify(obj));
  const unique = [...new Set(objStrings)];
  const parsed = unique.map((str) => JSON.parse(str));

  return parsed;
};
