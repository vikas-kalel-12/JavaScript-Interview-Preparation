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
