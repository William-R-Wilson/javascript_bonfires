function chunk(arr, size){
  var tempArray = [];
  var resultsArray = [];
  var iterations = arr.length/size;
  for(var i = 0; i < iterations; i++){
    tempArray = arr.splice(0,size);
    resultsArray[i] = tempArray;
    

  }
    console.log("tempArray = " + tempArray);
    console.log("original Array = " + arr);
    console.log("result array = " + resultsArray);
    return resultsArray;
}
chunk(['a', 'b', 'c', 'd'], 2);
