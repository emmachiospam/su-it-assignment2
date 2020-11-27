function fibonacciNums(n) {
  const fibonacci = [];
  var a = 0;
  var b = 1;
  var i;
  for(i = 0; i < n; i++) {
     fibonacci.push(a)
     a = a + b;
     b = a - b;
  }
  return fibonacci;
}

module.exports = fibonacciNums;
