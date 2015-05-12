
function fibs(n){
	var a = 0;
	var b = 1;
	var c = 0;
    var arr = [];
	while (c <= n){
		arr.push(c);
		c = a + b;
		a = b;
		b = c;
    }
  return arr;
}

function sumFibs(num){
  var total = 1;
  var arr = fibs(num);
  console.log(arr);
  for (var i = 1; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      console.log(i);
      total += arr[i];
      console.log(total);
    }
  }
  return total;
}

sumFibs(4);