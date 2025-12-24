const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

setTimeout(() => {
  console.log(promise); // Promise { 10 }
}, 2000);
