/*
const k = document.getElementById("k");
const btn = document.getElementById("btn");
const ct = document.getElementById("convert_text");

function convert() {
    if (k.value <= 0) {
        let c = k.value - 273.15
        let f = ((k.value - 273.15) * 1.8) + 32
        ct.textContent = `Celsius: ${c} --- Fahrenheit: ${f}`
    } else {
        let c = k.value - 273.15
        let f = ((k.value - 273.15) * 1.8) + 32
        ct.textContent = `Celsius: ${c} --- Fahrenheit: ${f}`
    }
}
btn.addEventListener('click', convert);
*/

const k = document.getElementById("k");
const btn = document.getElementById("btn");
const ct = document.getElementById("convert_text");
const errorMessage = document.getElementById("error_message");

function convert() {
    
    if (isNaN(k.value) || k.value == "") {
        errorMessage.textContent = "Please enter a valid number for Kelvin.";
        ct.textContent = "";
    } else {
        const c = k.value - 273.15;
        const f = (k.value - 273.15) * 1.8 + 32;
        ct.textContent = `Celsius: ${c.toFixed(2)} || Fahrenheit: ${f.toFixed(2)}`;
        errorMessage.textContent = "";
    }
}

btn.addEventListener('click', convert);