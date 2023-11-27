const cart=['books','tabs','watches']

createrOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymnetInfo){
    console.log(paymnetInfo)
})
.then(function(paymnetInfo){
    return orderSummary(paymnetInfo)
})
.then(function(updatewallet){
    console.log(updatewallet)
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
    console.log("hey catch can only check the promise which are above it")
})


function createrOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validatecart){
            const err=new Error("INVALID CART")
            reject(err)
        }
        const orderId='123456'
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)

        }
    })
    return pr
}

function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("paymnet successful")
    })
}

function orderSummary(paymnetInfo){
    return new Promise(function(resolve,reject){
        resolve({
            'tabs':4,
            'books':5,
            'watches':2
        })
    })
}
function validatecart(cart){
    return true
}