function factorial(n) {
  const cache = new Map();

  function helper(n) {
    if (cache.has(n)) return cache.get(n);
    if (n < 2) return 1;
    const value = n * helper(n - 1);
    cache.set(n, value);
    return value;
  }

  return helper(n)
}

