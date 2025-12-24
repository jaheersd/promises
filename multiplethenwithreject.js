const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error message"));
  }, 1000);
});

promise
  .then((value) => value * 2)
  .then((value) => value + 5)
  .then(console.log)
  .catch((err) => {
    console.log("oh no " + err.message);
    return 100;
  })
  .then(console.log)
  .finally(() => {
    console.log("Done");
  });

//o/p:
// oh no error message
// 25
// Done
