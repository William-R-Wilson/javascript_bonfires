function largestOfFour(arr) {
  // You can do this!
  var resultsArray = [];
  var findMax = function(element) {
    var thisArray = element;
    var max = thisArray[0];  
    thisArray.forEach(function(number) {
      if(max < number) {
         max = number;
         }
    
    });
    resultsArray.push(max);
  };
  
  for(var i = 0; i < arr.length; i++){
    findMax(arr[i]);
  }
  return(resultsArray);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
