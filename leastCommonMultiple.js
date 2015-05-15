function getRange(arr){
    //get all numbers between min and max and put them in an array
    var smallNumber = Math.min(arr[0], arr[1]);
    var bigNumber = Math.max(arr[0], arr[1]);
    for (var i = smallNumber+1; i < bigNumber; i++){
        arr.splice(0,0,i);
    }
    function sortNumber(a,b) {
      return a - b;
    }
    return arr.sort(sortNumber);
}

function gcf(a, b) { 
	return ( b === 0 ) ? (a):( gcf(b, a % b) ); 
}
function lcm(a, b) { 
	return ( a / gcf(a,b) ) * b; 
}
function lcm_nums(ar) {
	if (ar.length > 1) {
		ar.push( lcm( ar.shift() , ar.shift() ) );
		return lcm_nums( ar );
	} else {
		return ar[0];
	}
}


function smallestCommons(ar){
	var newArr = getRange(ar);
	return lcm_nums(newArr);
}

smallestCommons([1,5]);