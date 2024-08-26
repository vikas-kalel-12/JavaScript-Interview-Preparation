const nums = [1, 2, 3, 1];

const containsDuplicate = () => {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

console.log(containsDuplicate());
