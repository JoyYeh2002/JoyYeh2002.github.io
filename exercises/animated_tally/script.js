let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {

        if (endValue == 4) {
            startValue += 1;
        }
        else {
            startValue += 4;
        }
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});