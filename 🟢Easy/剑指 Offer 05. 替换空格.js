/*
剑指 Offer 05. 替换空格

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."

*/

//Solution 1
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let arr = Array.from(s);
  let count = 0;
  for (e of arr) {
    if (e === " ") count++;
  }
  let l = arr.length - 1,
    r = arr.length + count * 2 - 1;
  while (l >= 0) {
    if (arr[l] === " ") {
      arr[r--] = "0";
      arr[r--] = "2";
      arr[r--] = "%";
      l--;
    } else {
      arr[r--] = arr[l--];
    }
  }
  return arr.join("");
};
