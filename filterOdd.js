function filterOdd(a) {
  const odd = [];
  for(i in a) {
    if((a[i] % 2) == 1) {
      odd.push(a[i]);
    }
  }
  return odd;
}

module.exports = filterOdd;
