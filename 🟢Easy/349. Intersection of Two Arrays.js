/*349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

*/

// Solution 1 使用Set O(m+n)  如果使用哈希集合存储元素，则可以在 O(1) 的时间内判断一个元素是否在集合中
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  const resSet = new Set();
  // 根据数组大小交换操作的数组，为了让迭代/遍历次数变小
  if (nums1Set.size < nums2Set) {
    const temp = nums1Set;
    nums1Set = nums2Set;
    nums2Set = temp;
  }
  for (e of nums2Set) {
    nums1Set.has(e) && resSet.add(e);
  }
  return [...resSet];
};

// Solution 2 数组直接遍历 O(mn)
var intersection = function (nums1, nums2) {
  let a = [];
  for (let i of nums1) if (nums2.includes(i) && !a.includes(i)) a.push(i);
  return a;
};
