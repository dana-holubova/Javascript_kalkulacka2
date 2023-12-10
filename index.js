const display = document.querySelector(".display")
const keypad = document.querySelector(".keypad")

let digitsNumber = 0

const handleDigitClick = (e) => {
    if (digitsNumber < 9) {
        const key = e.target.textContent
        display.textContent += key
        digitsNumber = display.textContent.length
        if (digitsNumber > 1 && display.textContent[0] === "0") {
            display.textContent = display.textContent.slice(1)
        }
    }

    else {
        document.querySelector('#message').textContent = 'Maximální povolený počet číslic je 9.';
    }

}

keypad.addEventListener("click", handleDigitClick)