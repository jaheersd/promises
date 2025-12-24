const all=Promise.all([
    new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(10);
        },1000)
    }),
    Promise.reject(100)
]);
all.then(console.log); //UnhandledPromiseRejection