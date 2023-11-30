cart=['trouser','shirt','belt']

createOrder(cart)
.then((orderId)=>{
    console.log(orderId)
    return orderId
})
.then((orderId)=>{
    return proceedTopayment(orderId)
})
.then((paymnetInfo)=>{
    console.log(paymnetInfo)
})
.then((paymnetInfo)=>{
    return showOrderSummary(paymnetInfo)
})
.then((summary)=>{
    console.log(summary)
})
.then((summary)=>{
    return updatewalletstatement(summary)
})
.then((balance)=>{
    console.log(balance)
})
.catch((Err)=>{
    console.log(Err)
})



function createOrder(cart){
    const promise=new Promise((resolve,reject)=>{
        if(!validatecart){
            throw new Error('invalid cart')
        }
        const orderId='1234asfg'
        if(orderId){
            setTimeout(() => {
                resolve(orderId)
            }, 2000);
        }
    })
    return promise

}

function validatecart(){
    return true
}

function proceedTopayment(orderId){
    const paymentPromise=new Promise((resolve,reject)=>{
        resolve('payment successful')
    })
    return paymentPromise
}

function showOrderSummary(){
    return new Promise((resolve,reject)=>{
        resolve({
            'trouser':1,
            'shirt':1,
            'belt':1
        })
    })
}

function updatewalletstatement(){
    return new Promise((resolve,reject)=>{
        resolve('your remaining amount in wallet is 2000 dollars')
    })
}