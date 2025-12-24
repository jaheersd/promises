const promise = Promise.resolve(10);
console.log(promise);
// Promise {10}

const promise2=Promise.reject(10);
console.log(promise);
// Promise {<rejected> 10} UnhandledPromiseRejection
