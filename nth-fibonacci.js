var nthFibonacci = function(n) {
  if (n <= 1) {
    return n;
  }

  return nthFibonacci(n-1) + nthFibonacci(n-2);
};



inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 22, -1, -10];

for (let i of inputs) {
  console.log(i, '->', nthFibonacci(i));
}