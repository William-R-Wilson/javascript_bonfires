function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var startPosition = str.length - target.length;
  var ending = str.slice(startPosition);
  if(ending == target) {
    return true;
  }
  else {
    return false;
  }

}

end('Bastian', 'ian');