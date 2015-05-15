function getRange(arr){
    //get all numbers between min and max and put them in an array
    var smallNumber = Math.min(arr[0], arr[1]);
    var bigNumber = Math.max(arr[0], arr[1]);
    for (var i = smallNumber+1; i < bigNumber; i++){
        arr.splice(0,0,i);
    }
    function sortNumber(a,b) {
      return a - b;
    }
    return arr.sort(sortNumber);
}



function smallestCommons(arr) {
  var bigNum = (Math.max(arr[0], arr[1]));
  var smallNum = (Math.min(arr[0], arr[1]));
  var multiple = bigNum * bigNum;  // take the max number and multiply it by itself
  var foundIt = false;  
  var x = bigNum-1;              // can you divide the number by max-1?  if so, can you divide by max -2? etc
  var y = bigNum                                // if you can't, multiply max number * max number + 1
  var foundIt = false                              //can you divide this new number as above?
  function checkMultiple(multiple){
    if (multiple % x !== 0) {
      y += 1;
      checkMultiple(bigNum * y);
    }
    else {
      for (var i = x-1; i >= smallNum; i--) {
        checkMultiple(multiple);
      }
      }
    }
    return checkMultiple(multiple);
  }

//console.log(smallestCommons([1,5])); 



