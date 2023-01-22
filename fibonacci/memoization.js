function fibonacci(n) {
  const cache = new Map();

  function helper(n) {
    if (cache.has(n)) return cache.get(n);
    if (n < 3) return 1;
    const value = helper(n - 1) + helper(n - 2);
    cache.set(n, value);
    return value;
  }

  return helper(n);
}
