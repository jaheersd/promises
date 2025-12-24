const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("something went wrong"));
  }, 1000);
});
promise.then(console.log);
//output : UnhandledPromiseRejection
