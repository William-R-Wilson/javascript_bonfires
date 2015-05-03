//Given an array of two numbers, return the sum of those two numbers and all numbers between them.
function sumAll(arr){
    //get all numbers between min and max and put them in an array
    var smallNumber = Math.min(arr[0], arr[1]);
    var bigNumber = Math.max(arr[0], arr[1]);
    for (var i = smallNumber+1; i < bigNumber; i++){
        arr.splice(0,0,i);
    }
    
    //sum the numbers
    var sum = arr.reduce(function(a,b) {
        return a + b;
    });
    return sum;
}
sumAll([1,1]);
    