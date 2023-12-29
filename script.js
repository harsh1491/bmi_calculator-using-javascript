const form =  document.querySelector('form')

// This usecase will give you empty value. which we din't want
// const weight =  parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if(height === "" || height < 0 || isNaN(height )) {
    results.innerHTML = `Please give a valid Height ${height}`
   }

   else if(weight === "" || weight < 0 || isNaN(weight )) {
    results.innerHTML = `Please give a valid weight ${weight}`
   }

   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)


    //ye apne se kiya hai

    let bmiMessage = '';

    if(bmi<18.6) {
        bmiMessage = "You are Under Weight!"
    }
    else if(bmi<=24.9) {
        bmiMessage = "You are Normal"
    }
    else if(bmi>24.9) {
        bmiMessage = "You are Over Weight!"
    }
   // yaha tak

    //show result

    results.innerHTML = `<span>${bmi}</span> <br>
                        <span>${bmiMessage}</span>`
   }
})