//this keyword

//It is an important keyword in the world of javascript because it refers to an object
//the value of this depends on which context it appears(function, class,global)

//let's take an example in function context

const username={
    myName:"Ritesh",
    price:5000,
    bank:"hdfc",
    Message:function message(){
        // console.log(`Hi! ${this.myName} you have received ${this.price} in your ${this.bank} bank`)
        // console.log(this)
    }

    
}
// username.Message()
// username.myName='rishu'
// username.price=500000
// username.bank='axis'
// username.Message()

// console.log(this) -- it simply refers to an object but if we write the same code in browser console then it will give windows attached to it.

// function sayName(){
//     console.log(this)
// }
// sayName()  ----> we get may browser function attached to it

// const sayName=()=>{
//     console.log(this)
// }
// sayName() ---> we get object literal

// const sayName=()=>{
//     let user='ritesh'
//     console.log(this.user)
// }
// sayName() ---> we get undefined in this case

// function sayName(){
//     let user='ritesh'
//     console.log(this.user)
// }
// sayName() --> this is an object and can be accessed within an object otherwise it will give an undefined.

// const addtwo=(num1,num2)=>num1+num2
//const addtwo=(num1,num2)=>(num1+num2) 
// but if we want to use curly braces then must use return statement
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,3))

// to use object in array function

const addtwo=(n1,n2)=>({name:'ritesh','profession':'fullstack developer'})
console.log(addtwo(2,3))

