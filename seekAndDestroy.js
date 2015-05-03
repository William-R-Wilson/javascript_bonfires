//destroys any element in the array that matches the arguments provided

function destroyer(arr) {
  var newArray = [];
  if(arguments.length > 1){
    var argsArray = Array.prototype.slice.call(arguments, 1);
    argsArray.forEach(function(val){
      for(var i = 0; i < arr.length; i++){
        var index = arr.indexOf(val);
        if(index > -1) {
          arr.splice(index, 1);
          
        }
      }
      });
    }
  return arr;
  }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);