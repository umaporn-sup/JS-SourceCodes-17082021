let fact = function factorial(n) {
  console.log(n);
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(fact(5));
