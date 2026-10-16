const resultHTML = document.querySelector(".result")
const outputHTML = document.querySelector(".output")
const buttonsList = document.querySelectorAll("button")

for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", calculate)
}

function calculate() {
    let buttonText = this.innerText

    if (buttonText == "AC") {
        outputHTML.innerText = ""
        resultHTML.textContent = "0"
    } else if (buttonText == "DEL") {
        outputHTML.innerText = outputHTML.innerText.slice(0, -1)
    } else if (buttonText == "=") {
        showResult()
    } else {
        outputHTML.innerText += buttonText
    }
}