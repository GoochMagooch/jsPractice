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