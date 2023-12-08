const display = document.querySelector(".display")
const keypad = document.querySelector(".keypad")

let digitsNumber = 0
console.log('digitsNumber1: ' + digitsNumber)

const handleDigitClick = (e) => {
    const key = e.target.textContent
    display.textContent += key
    digitsNumber = display.textContent.length

    //správný počet číslic
    console.log('digitsNumber funkce2: ' + digitsNumber)
    //return digitsNumber
}

//nefunguje - měl by se vypisovat aktuální počet číslic
console.log(`digitsNumber2: ${digitsNumber}`)

if (digitsNumber < 10) {
    keypad.addEventListener("click", handleDigitClick)
}

else { document.querySelector("#message").textContent = "Číslic je víc než 10" }