function factorialize(num) {
  var result = 1;
  for(var i = 2; i<=num; i++) {
    result = result+result*i;
    return result;
  }
}

factorialize(5);