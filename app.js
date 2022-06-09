const number = Math.floor(Math.random() * 100) + 1;
//! input box
let inputData = document.getElementById("inputData")
let info = document.getElementById("info")
let firstNumber = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
let life = 0
let chance = 5
info.innerHTML = `number of attempt: ${life} <br><br> You only have ${chance} chance`
function guessNumber() {
    let userInput = document.getElementById("input")
    chance--
    life++
    if (chance >= 0) {
        if (chance == 0) {
            updateText("You have Lost")
            info.innerHTML = `number of attempt: ${life} <br><br> You dont have any chances`
        }
        else if (userInput.value > 100 || userInput.value < 0 || userInput.value == "") {
            inputData.innerHTML = `Please enter a number that is lower 100 higher 0`
            inputData.style.display = "block"
            
            chance++
            life--
        }
        else if (number > userInput.value) {
            inputData.innerHTML = userInput.value
            userInput.value = ""
            inputData.style.display = "none"
            firstNumber.innerHTML = inputData.innerHTML
            info.innerHTML = `number of attempt: ${life} <br><br> You have only  ${chance} chance`
        } else if (number < userInput.value) {
            inputData.innerHTML = userInput.value
            userInput.value = ""
            inputData.style.display = "none"
            secondNumber.innerHTML = inputData.innerHTML
            info.innerHTML = `number of attempt: ${life} <br><br> You have only ${chance} chance`
        } else if (number == userInput.value) {
            updateText("Congratulations, You are the Best");
            return
        }
    }
}
function updateText(text) {
    let delay = 10;
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
        }, index * 50 + delay);
    });
}


