function fn(){
    return new Promise((resolve,reject)=>{
        resolve([1,2,3]);
    })
}
async function getData(){
    await fn(); 
    // await fn()  会编译成
    // new Promise((resolve)=>resolve(fn())).then(()=>{
    //     console.log(1)
    // })
    console.log(1);
}
getData();
Promise.resolve().then(data=>{
    console.log(2);
});