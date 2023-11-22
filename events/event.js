const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const printme=function(){
    console.log('print me',Date.now())
}
let myInterval;
// clearInterval()

start.addEventListener('click',function(){
    myInterval=setInterval(printme,1000)
    
})
stop.addEventListener('click',function(){
    clearInterval(myInterval)
  
})


















// const sayhyy=function sayHi(){
//     console.log("Hi! Ritesh")
// }
// // const newMe=document.querySelector('h1').innerHTML="best js series"

// const changeText=function(){
//     document.querySelector('h1').innerHTML="best js series"
// }


// const changeMe=setTimeout(changeText,2000)
// // setInterval(sayhyy,2000)
// //to prevent from setTimeout,clearTimeout()
// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(changeMe)
//     console.log('stopped')
// })
// // setInterval(function(){
// //     console.log("printMe",Date.now())
// // },1000)