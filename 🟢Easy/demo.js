let arr = ("" + 12).split("");
console.log(arr);

arr.reverse((total, num) => {
  return total + num * num;
});

console.log(arr);

var isHappy = function (n) {
  let set = new Set();
  let totalCount;
  while (totalCount !== 1) {
    let arr = ("" + (totalCount || n)).split("");
    totalCount = arr.reduce((total, num) => {
      return total + num * num;
    }, 0);
    if (set.has(totalCount)) {
      return false;
    }
    set.add(totalCount);
  }
  return true;
};
