//singleton object declaration
// const myntrauser=new Object()
//non singleton object declaration
// const myntrauser1={}

const user1={}

//to add data in user1
user1.id="123asd"
user1.name="ritesh"
user1.email="abc@gmail.com"
user1.isloggedIn=false

// console.log(user1)

//we can go deep level nesting in objects

const user2={
    hobby:['cricket','music','coding'],
    fullname:{
        firstusername:{
            firstname:"ritesh",
            lastname:"shekhar"
        },
        address:{
            state:"jharkhand",
            city:{
                name:'hazaribagh',
                pincode:{
                    pin1:825319,
                    pin2:825301
                }
            }
        }
    }
}
console.log(user2.fullname.address.city.pincode.pin2)