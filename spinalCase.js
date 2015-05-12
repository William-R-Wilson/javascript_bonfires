function spinalCase(str) {
    console.log(str.indexOf(/\s/));
    if (str.indexOf(/\s/) === -1) {
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === /[A-Z]/) {
          console.log("capital letter!");
        }
      }
    }
    var newStr = str.toLowerCase();
    return newStr.replace(/[\s_]/g, "-");

    
}
spinalCase('thisIsSpinalTap');
