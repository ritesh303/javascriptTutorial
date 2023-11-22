const clock=document.getElementById('clock')

setInterval(function(){
  const data=new Date() 
  clock.innerHTML=data.toLocaleTimeString() 
},1000)

const body=document.querySelector('body')

body.style.background='grey'