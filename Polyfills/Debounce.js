function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const addition = (a, b) => {
  console.log(a + b, "Addition");
};

const debounceAddition = debounce(addition, 1000);

console.log(debounceAddition(8, 9), "Addition");
