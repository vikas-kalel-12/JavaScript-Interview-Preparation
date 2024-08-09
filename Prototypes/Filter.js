Array.prototype.myFilter = function (fn) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn.call(this, this[i], i)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const result = [1, 2, 3, 4, 5, 6, 7, 8].myFilter((value) => value % 2 === 0);

console.log(result, "result");
