

function titleCase(str) {
    var titleized = [];
    var arr = str.split(" ");
    arr.forEach(function(word) {
        var initial = word.charAt(0);
        initial = word.charAt(0).toUpperCase();
        word = word.slice(1).toLowerCase();
        word = initial+word;
        titleized.push(word);
        
    });
    console.log(titleized);
    str = titleized.join(" ");
    
    return str;
}

titleCase("I'M a liTTle tEa pot");