const str = "012345";
// 0  1   2  3   4  5
//-6 -5  -4 -3  -2 -1
console.log(str.substring(-5,2)) // 0 1
console.log(str.slice(-5,2)) // 1

console.log(str.substring(-5,-2)) //""
console.log(str.slice(-1,-1)) //123

console.log(str.substring(5,2)) // = str.substring(2,5)
console.log(str.slice(5,2))   //""