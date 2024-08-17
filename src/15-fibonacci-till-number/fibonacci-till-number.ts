export const fibonacciTillNumber = (n: number) => {
  if (n < 0) throw new Error("Value must be positive");
  if (n == 0) return [];

  var ans = [0, 1];

  if (n <= 2) return ans.slice(0, n);

  var first = 0;
  var second = 1;
  n = n - 2;

  while (n) {
    const temp = first;
    first = second;
    second = temp + first;
    ans.push(second);
    n--;
  }

  return ans;
};
