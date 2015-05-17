// return the first object in the array that passes the truth test given in the second argument

function find(arr, func){
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

