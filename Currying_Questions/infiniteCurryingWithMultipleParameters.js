function curryresult(...args) {
  let result = 0;
  let isAddition = false;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
    isAddition = true;
  }
  return function inner(...args2) {
    for (let i = 0; i < args2.length; i++) {
      if (isAddition) {
        result -= args2[i];
      } else {
        result += args2[i];
      }
      isAddition = !isAddition;
    }
    console.log(args2, "args2");

    if (args2.length) {
      return inner;
    } else {
      return result;
    }
  };
}

const res = curryresult(1, 2)(3, 4, 5)(6, 7)(8, 9, 10)();
console.log(res, "res");
