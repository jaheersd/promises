const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

promise
  .then((value) => value * 2)
  .then((value) => value + 5)
  .then((value) => {
    console.log(value);
    return value;
  })
  .catch((err) => {
    console.log("oh no " + err.message);
    return 100;
  })
  .then(console.log)
  .finally(() => {
    console.log("Done");
  });

// o/p
//9
//9
//Done
