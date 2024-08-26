Array.prototype.myReduce = function (fn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = fn.call(undefined, accumulator, this[i], this, i);
    } else {
      accumulator = this[0];
    }
  }
  return accumulator;
};

const result = [1, 2, 3, 4, 5, 6, 7].myReduce((acc, current) => {
  return acc + current;
}, 0);

console.log(result, "result");
