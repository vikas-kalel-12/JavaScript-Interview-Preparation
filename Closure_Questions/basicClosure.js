function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(10)); // 15
