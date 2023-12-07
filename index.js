const display = document.querySelector(".display")
const keypad = document.querySelector(".keypad")

const handleDigitClick = (e) => {
const key = e.target.textContent
display.textContent += key
}

//console.log('display content2: ' + display.textContent)
//console.log('display length2: ' + display.textContent.length)

//nefunguje - nenačítá to aktuální hodnoty z displeje
if (display.textContent.length < 10) {
keypad.addEventListener("click", handleDigitClick)   
}