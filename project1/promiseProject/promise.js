//  //creating a promise

// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//         console.log('async task completed')
//     },1000)

// })

// promiseOne.then(()=>{
//     console.log('promise consumed')
// })
// .catch((err)=>{
//     console.error(err)
// })

// //how to fetch data from api or file

// const promiseTwo=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve({
//             "name":'Ritesh',
//             'age':28
//         })
//     },1000)
// })

// promiseTwo
// .then((user)=>{
// console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })


// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({
//                 "name":"ritesh",
//                 "subject":"javascript"
//             })
//         }
//         else{
//             reject('something went wrong')
//         }
//     },1000)
// })

// promiseThree
// .then((user)=>{
//     console.log(user)
//     return user.name
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log('the promise is either resolved or rejected')
// })

// //using try catch method

// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({
//                 "username":"ritesh@gmail.com",
//                 "password":"1234asdf"
//             })
//         }
//         else{
//             reject("getting something wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFour
//         console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// consumePromiseFive()


//taking real example of api
// let github_url='https://api.github.com/users/ritesh303'

fetch('https://api.github.com/users/ritesh303')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// async function fetchApi(){
//     try{
//         const response=await fetch('https://api.github.com/users/ritesh303')
//         const data=await response.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchApi()