function isRightTriangle (a, b, c) {
  if((a == 0 || b == 0) || c == 0) {
    return false;
  }
  else if((a * a + b * b) == c * c) {
    return true;
  }
  else if ((a * a + c * c) == b * b) {
    return true;
  }
  else if ((b * b + c * c) == a * a) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isRightTriangle;
