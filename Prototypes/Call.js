Function.prototype.myCall = function () {
  const context = arguments[0] || window;
  context.fn = this;
  const args = Array.from(arguments).slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function Print(word) {
  console.log(word, this.name);
}

Print.myCall({ name: "John" }, "Hello");
