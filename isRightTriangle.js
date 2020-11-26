function isRightTriangle (a, b, c) {
  if((a * a + b * b) == c * c) {
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

module.export = isRightTriangle;
