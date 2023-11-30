const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 success")
    },3000)
    // setTimeout(() => {
    //     reject("p1 reject")
    // }, 3000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p2 success")
    }, 1000);
    // setTimeout(() => {
    //     reject("p2 reject")
    // }, 1000);
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p3 success")
    }, 2000);
    // setTimeout(() => {
    //     reject("p3 reject")
    // }, 2000);
})

//code examples for promise.all()

Promise.all([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((Err)=>{
    console.error(Err)
})

//code examples for promise.allSettled()

Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((Err)=>{
    console.error(Err)
})


//code examples of promise.race()

Promise.race([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((Err)=>{
    console.error(Err)
})

//code examples of promise.any()

Promise.any([p1,p2,p3])
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
    console.log(err.errors)
});