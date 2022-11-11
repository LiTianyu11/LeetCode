/*28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

// Solution 1  KMP O(m+n)
var strStr = function (haystack, needle) {
  n = haystack.length;
  m = needle.length;
  const pi = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] != needle[j]) {
      j = pi[j - 1];
    }
    if (needle[j] === needle[i]) {
      j++;
    }
    pi[i] = j; //
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === m) return i - m + 1;
  }

  return -1;
};

//Solution 2  O(mn)
var strStr = function (haystack, needle) {
  const m = haystack,
    n = needle;
  for (let i = 0; i <= m.length - n.length; i++) {
    for (let j = 0; j <= n.length; j++) {
      if (j === n.length) return i;
      if (m[i + j] !== n[j]) break;
    }
  }
  return -1;
};
