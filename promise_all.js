// promise.all returns a promise by taking an array of promises
const all = Promise.all([Promise.resolve(10), Promise.resolve(100)]);
console.log(all); // Promise { <pending> }
all.then(console.log); // [10, 100]

const allp = Promise.all([
  new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(10);
    }, 1000);
  }),
  Promise.resolve(100),
]);

all.then(console.log); // [10,100]
