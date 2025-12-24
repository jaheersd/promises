// let resolve, reject;
// const promise=new Promise((res,rej)=>{
//     resolve=res;
//     reject=rej;
// });
//or
const { promise, resolve, reject } = Promise.withResolvers();
console.log(promise); // Promise { <pending> }
resolve(100);
console.log(promise); //Promise { 100 }
