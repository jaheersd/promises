//race returns first promise which settles first either resolve or reject
const all = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(10);
    }, 1000);
  }),
  Promise.resolve(100),
]);
all.then(console.log); // 100
