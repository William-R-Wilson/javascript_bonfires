//tyrantwarships solution
//Return true if the string in the first element of the array contains the letters of the string in the second element of the array.
function mutation(arr) { 
    var first_word = arr[0].toLowerCase(); 
    var second_word = arr[1].toLowerCase(); 
    //first_word = first_word.toLowerCase(); 
    //second_word = second_word.toLowerCase(); 
    //console.log(first_word); 
    //console.log(second_word); 
    for (var x = 0; x < second_word.length; x++) { 
        for (var y = 0; y < first_word.length || true; y++) { 
            if (second_word[x] === first_word[y]) break; 
            if (y === first_word.length -1) return false; 
            } 
        } 
        return true; 
    }  
    
mutation(['Alien', 'line']);  

//my original solution

function mutation(arr) {  
    var newArray = []; 
    var testLength = arr[1].length; 
    arr.forEach(function(element) { 
        var check = element.toLowerCase(); 
        var tempArray = check.split(""); 
        tempArray.sort(); 
        newArray.push(tempArray); }); 
        var firstElement = newArray[0]; 
        var secondElement = newArray[1]; 
        for(var i = 0; i < testLength; i++){ 
            //console.log(firstElement.indexOf(secondElement[i])); 
            if(firstElement.indexOf(secondElement[i]) === -1) { 
            return false; }  
        } 
    return true; 
} 
                
                
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);