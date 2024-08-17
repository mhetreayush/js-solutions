export const findMaxConsecutiveOnes = (arr: number[]): number => {
  let ans = 0;
  let currentMax = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) currentMax++;
    else {
      ans = Math.max(ans, currentMax);
      currentMax = 0;
    }
  }
  ans = Math.max(ans, currentMax);
  return ans;
};
