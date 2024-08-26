const mySetTimeout = (fn, delay, ...args) => {
  const start = Date.now();
  const end = start + delay;

  while (Date.now() < end) {}
  return fn(...args);
};

const abc = (a, b) => console.log(a + b);
mySetTimeout(abc, 5000, 1, 2);
