const nums = [1, 2, 3, 4, 5, 7, 8, 9];

//output-> 6

const findMissing = () => {
  const n = nums.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, current) => acc + current, 0);
  return totalSum - actualSum;
};

console.log(findMissing(), "Missing");
