// http://www.ascii.cl/htmlcodes.htm

//Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

console.log(convert('Dolce & Gabbana'));


// ' == &#39
// < == &#60
// < == &#62
// & == &#38
// " == &#34
