const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});
promise.then(console.log); // 100

async function logPromise() {
  console.log(5); //5
  return 1000;
}
const result = logPromise();
console.log(result); // Promise {1000}

async function logPromise() {
  const result = await promise;
  console.log(result); // 100
}
logPromise().catch((err) => console.log(err.message));
