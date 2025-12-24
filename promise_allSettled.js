const all = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  }),
  Promise.reject(100),
]);
all.then(console.log);
// o/p
// [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 100 }
// ]
