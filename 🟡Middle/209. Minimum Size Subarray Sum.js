/*209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

//Solution 1 SWA(Sliding Window Algorithm)
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let left = (right = sum = 0),
    res = len + 1;
  while (right < len) {
    sum += nums[right];
    right++;
    // 窗口滑动
    while (sum >= target) {
      // r始终为开区间 [l, r)
      res = res < right - left ? res : right - left;
      sum -= nums[left];
      left++;
    }
  }
  return res > len ? 0 : res;
};
