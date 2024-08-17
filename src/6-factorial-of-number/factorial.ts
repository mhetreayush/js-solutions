export const factorial = (n: number): number => {
  if (n < 0) throw new Error("n should be positive");

  let dp = new Array(n + 1);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] * i;
  }

  return dp[n];
};
