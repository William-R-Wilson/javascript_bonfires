function reverseString(str) {
  var arr = str.split("");
  var reversedArray = arr.reverse();
  str = reversedArray.join("");
  return str;
}

reverseString('hello');