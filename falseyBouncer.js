function bouncer(arr) {
  // return array with no falsey values
  function notFalsey(element){
    if(element === 0 || element === false || element === null || element === "" || typeof element === undefined) {
      return false;
    }
    else return true;
  }
  var newArr = arr.filter(notFalsey);
  console.log(newArr);
  return newArr;
}

bouncer([7, 'ate', '', false, 9]);