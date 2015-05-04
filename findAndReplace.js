//find a word in a string and replace with another word

function replace(str, before, after) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === before) {
      if (arr[i].charAt(0) == /[A-Z]/) {  //regex not working here
        console.log(arr[i].charAt(0));
      }
      arr[i] = after;
    }
  }
  return arr.join(" ");
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");