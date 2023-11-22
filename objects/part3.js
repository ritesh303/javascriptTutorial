//how to merge two objects

const obj1={1:"a",2:'b'}
const obj2={3:"c",4:'d'}
const obj3={5:"e",6:'f'}

const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

//for cloning we use Object.assign()
//syntax :Object.assign(target,source)

const obj5=Object.assign({},obj1,obj2,obj3)
// console.log(obj5)

//different object methods
//1>There are some object methods that convert object to arrays and we can use all arrays property
//a>object.keys(),object.values(),object.entries()

const user1={}

//to add data in user1
user1.id="123asd"
user1.name="ritesh"
user1.email="abc@gmail.com"
user1.isloggedIn=false
// console.log(user1)

//we want to know keys and values for it only

// console.log(Object.keys(user1))
// console.log(Object.values(user1))
// console.log(Object.entries(user1))

//hasownproperty

console.log(user1.hasOwnProperty('number'))

