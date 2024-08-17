export const reverseString = (str: string): string => {
  // Reverse string without in-built reverse method

  let ans = "";

  for (var i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }

  return ans;
};
