let nums = [1, 2, 3, 4];
let arr = new Array(nums.length);
arr[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
    console.log(i)
    console.log(nums)
    console.log(arr)
    arr[i] = arr[i-1] + nums[i]
   
    
    
}

