/**
  function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log(ucFirst("nihao"));
  
  function checkSpam(str) {
    if (str.includes("viagra") || str.includes("xxx")) return true;
    else return false;
  }
  console.log(checkSpam("xxxx"));
  
  function truncate(str, maxlength) {
    if (maxlength >= str.length) {
      return str;
    } else {
      return str.slice(0, maxlength - 1) + "…";
    }
  }
  
  console.log(truncate("What I'd like to tell on this topic is:", 3));
  
  function extractCurrencyValue(str) {
    let index = '$120'.indexOf('$')
    return str.slice(index  + 1);
  }
  
  console.log(extractCurrencyValue("$120"));
  console.log()
*/

let str = '0123';
console.log(str.charAt(4))


