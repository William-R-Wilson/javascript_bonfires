function mutation(arr) {
  //Return true if the string in the first element of the array contains the letters of the string in the second element of the array.

  var newArray = [];
  var testLength = arr[1].length;
  arr.forEach(function(element){
      var check = element.toLowerCase();
      var tempArray = check.split("");
      tempArray.sort();
      newArray.push(tempArray);
  });
  var firstElement = newArray[0];
  var secondElement = newArray[1];
  for(var i = 0; i < testLength; i++){
    console.log(firstElement.indexOf(secondElement[i]));
    if(firstElement.indexOf(secondElement[i]) === -1){
      return false;
    }  
  }
  return true;
}
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);