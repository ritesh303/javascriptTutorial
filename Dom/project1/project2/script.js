const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    console.log(e.preventDefault())
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if (height === '' || height <0 || isNaN(height)){
        results.innerHTML=`please enter a valid height ${height}`
    }
    else if (weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML=`please enter a valid weight ${weight}`
    }
    else {
        const BMI=(weight/((height*height)/10000)).toFixed(2)
        //show the results
        results.innerHTML=`BMI is <span>${BMI}</span>`
        if (BMI<18.6){
            results.innerHTML=`you are under weight <span>${BMI}</span> `
        }
        if (BMI>18.6 && BMI<24.9 ){
            results.innerHTML=`you are having normal weight <span>${BMI}</span> `
        }
        if (BMI>24.9){
            results.innerHTML=`you are over weight <span>${BMI}</span>`
        }
    }


    
})