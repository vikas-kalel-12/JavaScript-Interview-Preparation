function myPromise(executor) {
  let called = false;
  let fullfilled = false;
  let rejected = false;
  let onResolve = null;
  let onReject = null;
  let error, value;

  function resolve(val) {
    fullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      called = true;
    }
  }

  function reject(err) {
    rejected = true;
    error = err;
    if (typeof onReject === "function") {
      onReject(error);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (fullfilled && !called) {
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (rejected && !called) {
      onReject(error);
    }
    return this;
  };

  return executor(resolve, reject);
}

const promise = new myPromise((resolve, reject) => {
  reject(7);
});

promise.then((res) => console.log(res, "res")).catch((err) => console.log(err));
