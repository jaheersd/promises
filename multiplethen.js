const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(10);
  }, 1000);
});
promise
  .then((value) => value * 2)
  .then((value) => value + 5)
  .then(console.log)
  .catch((err) => console.log("oh no " + err.message));

// o/p : 25
