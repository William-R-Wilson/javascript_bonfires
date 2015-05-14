function isPrime(n){
  if (n === 0 || n === 2 || n === 3 || n === 5){
    return true;
  }
  if (n%2 === 0 || n%3 === 0 || n%5 === 0){
    return false;
  }
  else {
    var sq = Math.round(Math.sqrt(n));
    console.log(sq);
    for (var i = 3; i <= sq; i+= 2){
      if (n % i === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  }
}

console.log(isPrime(973));


function sumArray(ar){
  var sum = 0;
  for (var i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  return sum;
}


//  Sum all the prime numbers up to and including the provided number.

function sumPrimes(num){
  var arr = [];
  var sum = 0;
  for (var i = num; i > 0; i--){
    if(isPrime3(i)){
      arr.push(i);
    }
 }
 console.log(arr);
 sum = sumArray(arr);
 return sum;
}

sumPrimes(977);

// see: http://www.javascripter.net/faq/numberisprime.htm for prime tests
// the function below is stolen from that page.  My function isPrime above was letting some nonprime numbers through.

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