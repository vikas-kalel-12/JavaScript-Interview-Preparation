const input = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: 8,
              },
            },
          },
        },
      },
    },
  },
};

// output should be 8 and optimized way

const readNestedObject = (obj) => {
  if (typeof obj !== "object") throw new Error("Given input is not a object!!");
  const key = Object.keys(obj);
  if (key?.length) {
    if (typeof obj[key[0]] === "object") {
      return readNestedObject(obj[key[0]]);
    } else {
      return obj[key[0]];
    }
  }
  return;
};

console.log(readNestedObject(input));
