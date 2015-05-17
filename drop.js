function drop(arr, func) {
  // Drop them elements.
  var times = arr.length;
    var i = 0;
    while (i <= times) {
        console.log(arr[i]);
        console.log(func(arr[i]));
        if (func(arr[0])===false) {
            arr.shift();
            i++;
        }   
        else {
            break;
        }
  }
 return arr;
}

drop([1, 2, 3,4], function(n) {return n >=3; });
//drop([1,2,3], function(n) {return n > 0; });

function find(arr, func){
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}


function drop(arr, func) {
    var newArray = [];
  while (func(arr[0] === false)) {
    console.log(arr[0]);
    console.log(func(arr[0]));
    newArray = arr.shift();
    }
      return newArray;
  }

drop([1,2,3,4], function(n) {return n >=3;});