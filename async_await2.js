const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something went wrong'));
  }, 1000);
});

async function logPromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log("oh no " + error.message);
  }
}
logPromise();
//o/p : oh no something went wrong
