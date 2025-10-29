let display = document.getElementById("display");

function append(val) {
    display.value = display.value + val;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (err) {
        display.value = "Error";
    }
}
