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
