// once function in javascript which executes only once and returns same result from the cache

function myOnce(fn) {
  let result,
    isCalled = false;
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const sum = myOnce((...numbers) => {
  const result = numbers.reduce((acc, curr) => acc + curr, 0);
  return result;
});

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 4, 5, 6));
