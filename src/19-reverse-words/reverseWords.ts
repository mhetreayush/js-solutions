export const reverseWords = (str: string): string => {
  // Reverse order of words without using in-built method
  const arr = str.split(" ");
  var ans: string[] = [];

  const arrLength = arr.length;
  for (var i = arrLength - 1; i >= 0; i--) {
    ans.push(arr[i]);
  }

  return ans.join(" ");
};
