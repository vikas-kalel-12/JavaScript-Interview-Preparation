const mySetinterval = (fn, delay, ...args) => {
  let start = Date.now();

  const executePeriodically = () => {
    while (true) {
      const now = Date.now();
      const elapsed = now - start;
      if (elapsed >= delay) {
        fn(...args);
        start = now;
      }
    }
  };
  executePeriodically();
};

const abc = (a, b) => console.log(a + b);
mySetinterval(abc, 5000, 1, 2);
