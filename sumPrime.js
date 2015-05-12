

function isPrime(n){
  if (n%2 === 0){
    return false;
  }
  else {
    var sq = Math.round(Math.sqrt(n));
    for (var i = 3; i <= sq; i++){
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


//  Sum all the prime numbers up to and including the provided number.

function sumPrime(num){
    
}

