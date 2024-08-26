// write a compute function to calculate like
// computeAmount().add(5).substract(3).multiply(2).devide(2).value() => result - 2

function computeAmount() {
  let result = 0;
  return {
    add(value) {
      result += value;
      return this;
    },
    substract(value) {
      result -= value;
      return this;
    },
    multiply(value) {
      result *= value;
      return this;
    },
    devide(value) {
      result /= value;
      return this;
    },
    value() {
      return result;
    },
  };
}

console.log(
  computeAmount().add(7).substract(2).multiply(9).devide(3).add(78).value()
);
