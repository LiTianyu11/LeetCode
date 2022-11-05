var twoSum = function (nums, target) {
  let hash = {};
 
  for (let i = 0; i < nums.length; i++) {
    
    console.log(hash);
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};

twoSum([2,7,11,15],17)