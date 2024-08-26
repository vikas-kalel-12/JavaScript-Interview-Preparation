const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b - c,
  D: {
    E: (a, b, c) => a - b + c,
  },
};

// output = {
//   A: 3,
//   B: -1,
//   C: 1,
//   D: {
//     E: 1,
//   },
// };

const compute = (a, b, c) => {
  let result = {};
  const innerFunction = (x, y, z, obj) => {
    let keys = Object.keys(obj);
    keys.forEach((key, index) => {
      if (typeof obj[key] === "object") {
        innerFunction(x, y, z, obj[key]);
      } else {
        result[key] = obj[key](x, y, z);
      }
    });
    return result;
  };
  return innerFunction(a, b, c, input);
};

console.log(compute(1, 1, 1));
