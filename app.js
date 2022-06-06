const number = Math.floor(Math.random() * 100) + 1;
console.log(number);
//! input box
let inputData = document.getElementById("inputData")
let info = document.getElementById("info")
let firstNumber = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
function guessNumber() {
    life = 1
    let userInput = document.getElementById("input")
    if (userInput.value > 100 || userInput.value < 0 || userInput.value == "") {
        inputData.innerHTML = `Please enter a number that is lower 100 higher 0`
    }
    else if (number > userInput.value) {
        inputData.innerHTML = userInput.value
        userInput.value = ""
        inputData.style.display = "none"
        firstNumber.innerHTML = inputData.innerHTML
        console.log(userInput.value);
        info.innerHTML = `you have ${life++} left`

    } else if (number < userInput.value) {
        inputData.innerHTML = userInput.value
        userInput.value = ""
        inputData.style.display = "none"
        secondNumber.innerHTML = inputData.innerHTML
        console.log(userInput.value);
        info.innerHTML = `you have ${life++} left`

    } else if (number == userInput.value) {
        updateText("Congratulations, You are the Best");
    }

}

function updateText(text) {
    let delay = 500;
    let h1 = document.querySelector(".header");
    h1.innerHTML = text
        .split("")
        .map(letter => {
            console.log(letter);
            return `<span>` + letter + `</span>`;
        })
        .join("");
    Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay);
    });
}