function palindrome(str) {
  //Return true if the given string is a palindrome. Otherwise, return false.
  //var unit = str.toLowerCase;
  str = str.replace(/[^\w]/g, "").toLowerCase();
  var arr = [];
  var final = [];
  arr = str.split(" ");
  
  arr.forEach(function(word) {
    var splitted = word.split("");
    var reversed = splitted.reverse();
    final.push(reversed.join(""));
    final.reverse();
    console.log(final);
  });
  
  var reversedString = final.join("");
  if(reversedString == str) {
      return true;
  }
  else {
      return false;
  }
  
}

palindrome("Race, Car");

// see alternate solutions here:  http://pastebin.com/JgLmmZhi
// and here:  https://stackoverflow.com/questions/30178172/check-for-palindrome-ignore-special-characters-whitespace-and-capitalization/30178339#30178339