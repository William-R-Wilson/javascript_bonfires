function translate(str) {
  var wordLength = str.length - 1; 
  if (str.charAt(0) === "e") { //can I use an array of vowels to compare to here?
    return str + "way";
  }
  var translated = str.substr(1, wordLength);
  return translated+str.charAt(0)+"ay";
}

translate("consonant");