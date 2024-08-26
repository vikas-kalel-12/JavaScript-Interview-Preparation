// var let const

var a;
let b;
const c = 0;

console.log(a, "a", b, "b", c, "c");
console.log(
  null == undefined,
  null === undefined,
  typeof null,
  typeof undefined
);

//hoisting

console.log(word);

var word = "pune";

// hoisting happens with var not with let and const but let and const are also hoisted but in Temporal Dead Zone

let number = 10;

console.log(number);

// rmove all elements from array

const arrys = [1, 2, 3, 4, 5];
arrys.length = 0;

console.log(arrys);

// check givem number is integer or not

const num = 70;
const num1 = 67.99;

if (num1 % 1 === 0) {
  console.log("integer");
} else {
  console.log("not integer");
}
