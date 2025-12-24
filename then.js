const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
promise.then((value) => {
  console.log(value);
});
// output : 10
