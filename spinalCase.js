function spinalCase(str) {
  

    var newStr = camel(str);
    var nextStr = newStr.toLowerCase();
    return nextStr.replace(/[\s_]/g, "-");    
}
spinalCase('thisIsSpinalTap');

function camel(str) {
  var caps = str.indexOf(/[A-Z]/);
  console.log(caps);
  str.replace(/[A-Z]/, " "+caps);
  return str;
    }  
camel('thisIsSpinalTap');