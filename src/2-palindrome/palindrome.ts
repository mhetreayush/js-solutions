export const isPalindrome = (sentence: string): boolean => {
  sentence = sentence.toLowerCase().replace(/ /g, "");
  let left = 0;
  let right = sentence.length - 1;
  while (left < right) {
    if (sentence[left] != sentence[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
};
