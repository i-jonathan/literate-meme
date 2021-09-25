let currentValue = "0"
let currentOperation
let total = 0

function handleButtons(value) {
    if (isNaN(value)) {
        handleOperation(value)
    } else {
        handleNumber(value)
    }
    reRender()
}

function handleNumber(value) {
    if (currentValue === "0") {
        currentValue = value
    } else {
        currentValue += value
    }
}

function handleOperation(value) {
    switch (value) {
        case "C":
            currentValue = "0"
            total = 0
            currentOperation = null
            break;
        case "←":
            if (currentValue.length <= 1) {
                currentValue = "0"
            } else {
                currentValue = currentValue.substring(0, currentValue.length - 1)
            }
            break;
        case "=":
            if (currentOperation == null) {
                return
            } 
            doMath(parseInt(currentValue))
            currentValue = total
            total = 0
            currentOperation = null
            break;
        case "+":
        case "−":
        case "÷":
        case "×":
            if (currentOperation != value) {
                currentOperation = value
            }
            handleMath(value)
        default:
            break;
    }
}

function handleMath(value) {
    if (currentValue === "0") {
        return
    }

    let currentInt = parseInt(currentValue)
    if (total === 0) {
        total = currentValue
    } else {
        doMath(currentInt)
    }

    currentOperation = value
    currentValue = "0"
}

function doMath(intValue) {
    switch (currentOperation) {
        case "+":
            total += intValue
            break;
        case "−":
            total -= intValue
            break;
        case "÷":
            total /= intValue
            break;
        case "×":
            total *= intValue
            break;
        default:
            break;
    }
}

function reRender() {
    let screen = document.querySelector(".input-display")

    screen.innerText = currentValue
}

function init() {
    document.querySelector(".all-buttons").addEventListener("click", function(event) 
    {
        handleButtons(event.target.innerText)    
    })
}

init()