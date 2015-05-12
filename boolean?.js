//tests if object passed is a boolean

function boo(bool) {
  var str = typeof bool;
  console.log(str);
  if (str.toString() === "boolean") {
    return true;
  }
  else {
    return false;
  }
}

boo(false);