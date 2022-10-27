var sortedSquares = function (nums) {
  let k = nums.length - 1;
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      nums[k] = nums[i] * nums[i];
      console.log(nums[i] * nums[i] , nums[k])
      i++;
    } else if (nums[i] * nums[i] < nums[j] * nums[j]) {
      nums[k] = nums[j] * nums[j];
      j--;
    } else {
      nums[k] = nums[j] * nums[j];
      j--;
    }
  }
  let arr = new Array()
  return nums ,arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
