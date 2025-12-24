const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("something went wrong"));
  });
});
//promise.then(console.log, (err) => console.log("oh no " + err));
//o/p : oh no Error: something went wrong
promise.then(console.log, (err) => console.log("oh no " + err.message));
//o/p: oh no something went wrong
