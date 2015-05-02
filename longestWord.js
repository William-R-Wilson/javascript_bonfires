function findLongestWord(str) {
  var arr = str.split(" ");
  var longestWord = arr[0]; 
  arr.forEach(function(word) {
     if (longestWord.length < word.length) {
         longestWord = word;
     }
  
  });
     
     return(longestWord.length);    
}

findLongestWord('The quick brown fox jumped over the lazy dog');