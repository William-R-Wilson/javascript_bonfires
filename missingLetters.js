// returns any letters missing in an alphabetized string of letters
function fearNotLetter(str) {
    var referenceStr = "abcdefghijklmnopqrstuvwxyz";
    var firstLetter = str.substr(0,1); // returns a letter
    var referencePoint = referenceStr.indexOf(firstLetter); // returns an integer
    var missingLetters = "";
    var x = 0;
    for(var i = referencePoint; i < str.length; i++){
        if(referenceStr.charAt(i) !== str[x]){
            missingLetters += referenceStr.charAt(i);
        }
        else {
            x++;
        }
    }
    if (missingLetters === ""){
      return undefined;
    }
    else {
      return missingLetters;
  }
}

fearNotLetter('abcdefghjklmno');