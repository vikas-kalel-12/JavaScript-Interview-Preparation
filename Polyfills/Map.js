Array.prototype.myMap = function (fn) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(fn.call(undefined, this[i], i, this));
  }
  return mappedArray;
};

const result = [1, 2, 3, 4, 5, 6, 7].myMap((value) => value * 2);
console.log(result, "result");
