//convert a number to Roman Numerals.  Only goes up to 50

function convert(num) {
  var result = "";
  var remainder = "";
  if (num === 9) {
    result = "IX";
  }
  else if((num/10) > 0) {
    for(var x = 0; x < Math.floor(num/10); x++){
      result += "X";
    }
    remainder = num%10;
    if(remainder === 9){
      result += "IX";
      return result;
    }
    if(Math.floor(remainder/5) > 0) {
      result += "V";
      remainder = num % 5;
    }
    if(remainder > 0) {
      for(var i = 0; i < remainder; i++){
        result += "I";
      }
    }
    }
  return result;
}

console.log(convert(99));