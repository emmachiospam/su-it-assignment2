function getFrequencies(a) {
  var finalFreq = {};
  var i;
  for(i in a) {
    if(!(a[i] in finalFreq)) {
      finalFreq[a[i]] = 1;
    }
    else {
      finalFreq[a[i]]++;
    }
  }
  return finalFreq;
}

module.exports = getFrequencies;
