function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let resolvedCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          result.push(value);
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise = myPromiseAll([Promise.resolve(1), Promise.resolve(2)]);

promise
  .then((result) => {
    console.log(result, "in then");
  })
  .catch((err) => {});
