Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw Error("Not a function");
  }
  context.fn = this;
  return context.fn(...args);
};

function Print(word) {
  console.log(word, this.name);
}

Print.myCall({ name: "John" }, "Hello");

// call
// call is used to call a function immediately
// call takes arguments as comma separated
// call takes this as first argument
// call executes the function immediately
