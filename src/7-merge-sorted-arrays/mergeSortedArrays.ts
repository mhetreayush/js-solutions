export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  let ptr1 = 0;
  let ptr2 = 0;
  let arr1Size = arr1.length;
  let arr2Size = arr2.length;
  let ans: number[] = [];
  while (ptr1 < arr1Size && ptr2 < arr2Size) {
    if (arr1[ptr1] < arr2[ptr2]) {
      ans.push(arr1[ptr1]);
      ptr1++;
    } else {
      ans.push(arr2[ptr2]);
      ptr2++;
    }
  }

  while (ptr1 < arr1Size) {
    ans.push(arr1[ptr1]);
    ptr1++;
  }

  while (ptr2 < arr2Size) {
    ans.push(arr2[ptr2]);
    ptr2++;
  }

  return ans;
};
