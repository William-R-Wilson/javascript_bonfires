function translate(str) {
  var wordLength = str.length - 1; 
  var vowels = ["a","e","i","o","u"];
  var dipthongs = ["gl", "bl"];
  for (var i = 0; i < vowels.length; i++) {
      if (str.charAt(0) === vowels[i]) { 
    return str + "way";
    }
  }
  for (var x = 0; x < dipthongs.length; x++) {
      if (str.substr(0,2) === dipthongs[x]) {
        
          var translated = str.substr(2, wordLength);
          var initial = str.substr(0,2);
          return translated + initial + "ay";
      }
  }
    var translated = str.substr(1, wordLength);
    return translated+str.charAt(0)+"ay";
  
}
translate("Rug");
translate("glove");
translate("apple");

