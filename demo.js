const promise=new Promise(()=>{
    reject(10);
});
console.log(promise); // Promise {10}
