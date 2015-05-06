//Match each character with the missing element and return the results as a 2d array.
//valid pairs are "GC" and "TA"
//eg GCG should return [["GC"],["CG"]["GC"]]

function pair(str) {
    var arr = str.split("");
    var resultsArr = [];
    for(var i = 0; i < arr.length; i++){
        var pairArr = [];
        if (arr[i] == "G"){
            pairArr.push(arr[i]);
            pairArr.push("C");
            resultsArr.push(pairArr);
        }
        if (arr[i] == "C"){
            pairArr.push(arr[i]);
            pairArr.push("G");
            resultsArr.push(pairArr);
        }
            if (arr[i] == "T"){
            pairArr.push(arr[i]);
            pairArr.push("A");
            resultsArr.push(pairArr);
        }
        if (arr[i] == "A"){
            pairArr.push(arr[i]);
            pairArr.push("T");
            resultsArr.push(pairArr);
        }
    }
    
    return(resultsArr);
}

console.log(pair("GCTG"));