const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

// const printme=function(){
//     console.log('print me',Date.now())
// }
// let myInterval;
// // clearInterval()

// start.addEventListener('click',function(){
//     myInterval=setInterval(printme,1000)
    
// })
// stop.addEventListener('click',function(){
//     clearInterval(myInterval)
  
// })

const randomNumberGenerator=Math.floor(Math.random()*16)
console.log(randomNumberGenerator)

const randomColorGenerator=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

function changeColor(){
    document.body.style.backgroundColor=randomColorGenerator()
}
let intervalId;
function startChangingcolor(){
    if(!intervalId){
        intervalId=setInterval(changeColor,1000)
    }
    
}
function stopChangingcolor(){
    clearInterval(intervalId)
    intervalId=null;
}
start.addEventListener('click',startChangingcolor)
stop.addEventListener('click',stopChangingcolor)













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