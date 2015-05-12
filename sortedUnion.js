// returns an array with all the elements in the arrays passed as arguments
// new array will have each value unique and in the original order of the arguments, ie:  

// unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4],

function unite(arr1, arr2, arr3) {
  var newArr = [];
  function includes(item, arr){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        return false;
      }
    }
      
  }
  function union(arr, target){
    for (var i = 0; i< arr.length; i++ ){
      if (includes(arr[i], newArr) !== false) {
      target.push(arr[i]);
      }
    }
  }
  for(var i = 0; i<arguments.length; i++){
  union(arguments[i], newArr);
  }
  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);