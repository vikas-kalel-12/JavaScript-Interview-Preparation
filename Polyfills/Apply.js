Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("Not a array");
  }
  context.fn = this;
  return context.fn(...args);
};

function Print(word) {
  console.log(word, this.name);
}

Print.myApply({ name: "John" }, ["Hello"]);

// apply
// apply is used to call a function immediately
// apply takes arguments as array
// apply takes this as first argument
// apply executes the function immediately
