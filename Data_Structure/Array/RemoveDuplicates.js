const arr = [0, 1, 2, 1, 3, 4, 2, 5, 2, 6];

const input = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Vikas",
    age: 10,
  },
  {
    name: "Raj",
    age: 20,
  },
  {
    name: "John",
    age: 90,
  },
];

function removeDuplicates(arr) {
  let obj = {},
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].name]) {
      result.push(arr[i]);
    }
    obj[arr[i].name] = arr[i].name;
  }
  return result;
}

console.log(removeDuplicates(input));
