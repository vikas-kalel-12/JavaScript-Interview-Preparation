function compose(fn1, fn2) {
  return function (x) {
    return fn1(fn2(x));
  };
}

const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const composed = compose(add1, multiply2);

console.log(composed(3)); // 7
