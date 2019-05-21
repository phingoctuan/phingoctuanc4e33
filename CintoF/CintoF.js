const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

// console.log(fahrenheitInput);

celciusInput.addEventListener('input', function(){
    //console.log("celciusInput.value");
    const cTemp = celciusInput.value;
    const fTemp = (cTemp * (9/5)) + 32;
    fahrenheitInput.value = fTemp;


});
