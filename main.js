const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const decrease = document.getElementById("decreaseBtn");
const display = document.getElementById("counter");
let count = 0;

function check() {
    if (count > 0) {
        display.style.color = "green";
    } else if (count < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "white";
    }
}

increase.addEventListener("click", function() {
    count++;
    display.textContent = count;
    check()
})

reset.addEventListener("click", function() {
    count = 0;
    display.textContent = count;
    check()
})

decrease.addEventListener("click", function() {
    count--;
    display.textContent = count;
    check()
})

