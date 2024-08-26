function createMultiplier(multiplier) {
  return function (value) {
    return multiplier * value;
  };
}

const double = createMultiplier(2);
console.log(double(4)); // 8
