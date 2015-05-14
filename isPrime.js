function isPrime(n){
  if (n === 2 || n === 3 || n === 5){
    return true;
  }
  if (n%2 === 0 || n%3 === 0 || n%5 === 0 || n === 0 || n === 1){
    return false;
  }
  else {
    var sq = Math.sqrt(n);
    console.log(sq);
    for (var i = 5; i <= sq; i+= 2){
      console.log(i);
      if (n % i === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  }
}

console.log(isPrime(7));

function isPrime3(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}

function checkIsPrimeFunction(n){
  if (isPrime3(n) !== isPrime(n)){
    return false;
  }
  else {
    return true;
  }
}

//checkIsPrimeFunction(973);

function testLoop(n){
  var arr = [];
  for (var i = 3; i <= n; i++){
    if (checkIsPrimeFunction(i) === false) {
      arr.push(i);
    }
  }
  console.log(arr);
}

//testLoop(100);

  
function isPrimeBrute(n){
  if (n === 0 || n === 1) {
    return false;
  }
  else {
    for (var i = 2; i <= n-1; i++) {
      if (n%i === 0) {
        console.log(i);
        return false;
      }
      else {
        console.log(i);
        return true;
      }
    }
  }
}

//console.log(isPrimeBrute(973));