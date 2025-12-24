const promise = new Promise((resolve, rejectcl) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
console.log(promise); // Promise { <pending> } due to non blocking code
