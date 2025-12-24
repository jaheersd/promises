const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("something went wrong"));
  }, 1000);
});
promise.then(console.log).catch((err) => console.log("oh no " + err.message));
//o/p : oh no something went wrong
