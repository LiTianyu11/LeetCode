/*59. Spiral Matrix II
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 
Example 1:
1  →  2  →  3
            ↓  
8  →  9     4
↑           ↓
7  ←  6  ←  5

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 
*/

//Solution 1
var generateMatrix = function (n) {
  let startRow = 0,
    startCol = 0;
  let loop = n >> 1;
  let mid = n >> 1;
  let offset = 1;
  let count = 1;
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    // loop > 0 , loop --
    let row = startRow,
      col = startCol;

    for (; col < n - offset; col++) {
      arr[row][col] = count++;
    }
    for (; row < n - offset; row++) {
      arr[row][col] = count++;
    }
    for (; col > startCol; col--) {
      arr[row][col] = count++;
    }
    for (; row > startRow; row--) {
      arr[row][col] = count++;
    }
    startCol++;
    startRow++;
    offset++;
  }

  if (n % 2 === 1) {
    arr[mid][mid] = count;
  }

  return arr;
};
