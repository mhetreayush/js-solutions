export const correspondingSquare = (
  arr1: number[],
  arr2: number[]
): boolean => {
  var arr1Size = arr1.length;
  var arr2Size = arr2.length;

  if (arr1Size != arr2Size) return false;

  for (var i = 0; i < arr1Size; i++) {
    if (Math.pow(arr1[i], 2) != arr2[i]) return false;
  }

  return true;
};
