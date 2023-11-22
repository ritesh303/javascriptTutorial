//scopes in functions
//let vs const vs var
// var is global scope
//local scope
//const and let is block scope

//var concepts

var name1='ritesh'
//this is attached to windows
//if we go to browser console and type window.name . our output is ritesh
//becase it is global scope
// -------------------------------------------------------------------------------------------//
//local scope
//we can declare function using function declaration, anonymous function and to store the function in a variable

// function sayName(){
//     var name2='sinha'
//     console.log(name1)
//     console.log(name2)
// }
// sayName()

// console.log(name2) -- this gives reference error because name2 is function scope not global we cannot use outside scope

//output will be sinha because now var name1 is function scope
var x=2;

// function first(){
//     //local scope
//     var x=1;
//     console.log(x)
//     // console.log(y) -- this brings reference error y is not defined because of hoisting
//     function childOfFirst(){
//         //local scope
//         var y=2
//         console.log(x)
//         console.log(y)
//     }
//     childOfFirst()
// }
// first()
//---------------------------------//
//global execution context
// function second(){
//     console.log(x)
// }
// second()

//--------------------------------------------------------------------------------------------//

//block scope

//one most important thing that var is attached with window
//so suppose i declared var with 10 and console it, i got output as 10

// var foo=10
// console.log(foo)

//but
//if we again declare foo with 20 so it's value get change to 20 and it is attached to window

// var foo=10
// var foo=90

// function numberdar(){
//     var foo=3
//     console.log(foo)
// }
// numberdar()


//but everything change when it comes to let

let foo=5

{
    let foo=10;
    console.log(foo)
}

console.log(foo)
