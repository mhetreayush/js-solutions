export const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  const root = Math.sqrt(num);
  for (var i = 2; i <= root; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
