function createFunctions() {
  let functions = [];
  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}

const funcs = createFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
