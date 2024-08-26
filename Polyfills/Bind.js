Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

function Print(word) {
  console.log(word, this.name);
}

const newFun = Print.myBind({ name: "John" });
console.log(newFun("Hello"));

// bind
// bind is used to call a function later
// bind takes arguments as comma separated
// bind takes this as first argument
// bind returns a function
// bind does not execute the function immediately
// bind is used to create a new function with the same code but different this
// bind is used to create a new function with some default arguments
