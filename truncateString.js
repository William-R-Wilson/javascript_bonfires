function truncate(str, num) {
  // Clear out that junk in your trunk
  var funnyLength = num-3;
  console.log(str.slice(0,num).concat("..."));
  if(str.length>num){
    return str.slice(0,funnyLength).concat("...");
  }
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);