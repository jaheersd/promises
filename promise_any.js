//promise.any returns first resolved promise it ignores rejected promises
const all=Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },1000)
    }),
    Promise.resolve(100)
]);
all.then(console.log); // 100 