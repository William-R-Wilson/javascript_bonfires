//find a word in a string and replace with another word

function replace(str, before, after) {
  var arr = str.split(" ");
  String.prototype.titleize = function() {
    var words = this.split(' ');
    var array = [];
    for (var i=0; i<words.length; ++i) {
      array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1));
    }
    return array.join(' ');
  }
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === before) {
      if (/[A-Z]/.test(arr[i])) {
        after = after.titleize();
      }
      arr[i] = after;
    }
  }
  return arr.join(" ");
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");