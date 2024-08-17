export const countOccurrences = (str: string): Record<string, number> => {
  const ans: Record<string, number> = {};

  for (const char of str) {
    ans[char] = (ans[char] ?? 0) + 1;
  }

  return ans;
};
