/*242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

//Solution 1
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0);
  let base = "a".charCodeAt();
  for (let i of s) {
    arr[i.charCodeAt() - base]++;
  }
  for (let i of t) {
    if (!arr[i.charCodeAt() - base]) return false; 
    //出现0就会return false
    //假设接下来还要进行-1 肯定是t中此字母比s多一个或多个可
    arr[i.charCodeAt() - base]--;
  }
  return true;
};
