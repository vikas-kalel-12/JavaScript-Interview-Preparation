function counter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); // 1
