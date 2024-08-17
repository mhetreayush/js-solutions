const formatString = (str: string): string => {
  str = str.replace(/ /g, "");
  str = str.toLowerCase();
  return str;
};

export const otherStringFromFirst = (
  source: string,
  target: string
): boolean => {
  source = formatString(source);
  target = formatString(target);

  const sourceLength = source.length;
  const targetLength = target.length;

  if (sourceLength != targetLength) return false;

  let sourceFreqMap: Record<string, number> = {};
  let targetFreqMap: Record<string, number> = {};

  for (var i = 0; i < sourceLength; i++) {
    sourceFreqMap[source[i]] = (sourceFreqMap[source[i]] || 0) + 1;
    targetFreqMap[target[i]] = (targetFreqMap[target[i]] || 0) + 1;
  }

  for (const char in sourceFreqMap) {
    if (sourceFreqMap[char] !== targetFreqMap[char]) {
      return false;
    }
  }

  return true;
};
