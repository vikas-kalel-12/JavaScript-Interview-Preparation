const array = [1, 2, 3, [4], [[5]], [[[6]]], [[[[7]]]]];

// result = [1, 2, 3, 4, 5, 6, 7];

const flatArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && arr[i].length > 0) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatArray(array));
