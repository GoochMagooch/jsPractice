const k = document.getElementById("k");
const btn = document.getElementById("btn");
const ct = document.getElementById("convert_text");
const err = document.getElementById("error_message");

function convert() {
    let kel = k.value

    if (isNaN(kel) || kel == "") {
        err.textContent = "Please enter a valid number for Kelvin.";
        ct.textContent = "";
    } else {
        const c = kel - 273.15;
        const f = (kel - 273.15) * 1.8 + 32;
        ct.textContent = `Celsius: ${c.toFixed(2)} || Fahrenheit: ${f.toFixed(2)}`;
        err.textContent = "";
    }
}

btn.addEventListener('click', convert);