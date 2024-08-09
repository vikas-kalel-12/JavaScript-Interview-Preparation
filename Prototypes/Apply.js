Function.prototype.myApply = function () {
  const context = arguments[0] || window;
  context.fn = this;
  const args = arguments[1];
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function Print(word, city) {
  console.log(word, this.name, city);
}

Print.myApply({ name: "John" }, ["Hello", "New York"]);

Print.myApply({ name: "Jane" }, ["Hi", "London"]);
