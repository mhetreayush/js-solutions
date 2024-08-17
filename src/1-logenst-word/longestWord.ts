export const findLongestWord = (sentence: string): string => {
  let currentMaxLen = 0;
  let currentAns = "";
  sentence.split(" ").forEach((word) => {
    const wordLength = word.length;
    if (wordLength > currentMaxLen) {
      currentAns = word;
      currentMaxLen = wordLength;
    }
  });
  return currentAns;
};
