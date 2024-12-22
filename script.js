
const form = document.querySelector('form');


form.addEventListener('submit' ,  function (e)
{  e.preventDefault();
   const weight = parseFloat(document.querySelector('.Weight').value);
   const height = parseFloat(document.querySelector('.height').value);
   const result  = document.querySelector('.result')
   
   if(!height || !weight || height <=0 || weight <=0)
   {
     result.innerHTML = 'Please Enter  a Valid Input ';
     return;
    }
    
    const bmi = weight/(height*height);
    let i = '';
    let interpretation = '';
    if (bmi < 18.5) {
      interpretation = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      interpretation = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      interpretation = 'Overweight';
    } else {
      interpretation = 'Obese';
    }

    // Display the result
    result.innerHTML = `Your BMI is: <strong>${bmi}</strong> (${interpretation})`;


})
