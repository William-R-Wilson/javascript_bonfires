//return the lowest index at which to insert the num argument into the sorted array (first argument)
function where(arr, num) {
    var high = 0;
    var low = 0;
    var insertionPoint = "0";
    var i = 0;
    while(i < arr.length) {
        if(arr[i] < num) {
            low = arr[i];
            i++;
        }
        else if (arr[i] > num) {
            high = arr[i];
            break;
        }
        else if (arr[i] === num) {
            insertionPoint = i;
            return insertionPoint;
        }
        else {
            i++;
        }
    }
    console.log(arr.indexOf(high));
    console.log(arr.indexOf(low));
    if((arr.indexOf(high)-arr.indexOf(low)) === 1) {
        insertionPoint = arr.indexOf(low)+1;
    }
    else if (high === 0){
        insertionPoint = 0;
    }
    return insertionPoint;
}

where([1,2,3], 2);