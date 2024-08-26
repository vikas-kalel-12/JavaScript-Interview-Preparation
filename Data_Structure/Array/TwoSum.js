const nums = [2, 11, 7, 15],
  target = 9;
//output: [2,7] - [0,1](indexes)

(function twoSum() {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let distance = target - nums[i];
    if (map[distance] !== undefined) {
      console.log([nums[map[distance]], nums[i]]);
    }
    map[nums[i]] = i;
  }
})();
