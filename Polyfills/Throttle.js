function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last < delay) return;
    last = now;
    fn.apply(this, args);
  };
}

const addition = (a, b) => {
  console.log(a + b, "Addition");
};

const throttleAddition = throttle(addition, 1000);

throttleAddition(8, 9);
