function where(arr, num) {
    var high = "";
    var low = "";
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
    }
    console.log(arr.indexOf(high));
    console.log(arr.indexOf(low));
    if((arr.indexOf(high)-arr.indexOf(low)) === 1) {
        var insertionPoint = arr.indexOf(low)+1;
        arr.splice(insertionPoint, 0, num);
    }
    return arr;
}
where([10,30,40,50,51,52,56,60], 55);