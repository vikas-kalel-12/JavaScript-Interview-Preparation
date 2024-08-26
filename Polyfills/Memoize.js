function memoize(fn) {
  const cache = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(this, ...args);
    }
    return cache[argsCache];
  };
}

const square = (num1, num2) => {
  return num1 * num2;
};

const memoizedSquare = memoize(square);

console.log(memoizedSquare(890, 567));
console.log(memoizedSquare(890, 567));
