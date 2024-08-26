let nums = [0, 1, 0, 3, 12]; // do this in-place of an array do not use new array
// Output: [1, 3, 12, 0, 0];

const moveZeroes = () => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }
  while (count < nums.length) {
    nums[count++] = 0;
  }
  return nums;
};

console.log(moveZeroes());
