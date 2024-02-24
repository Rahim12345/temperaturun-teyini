input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() <= 20) {
        basic.showString("Diqqet! cox soyuqdur")
    } else if (input.temperature() > 20 && input.temperature() < 30) {
        basic.showString("Her sey qaydasindadir")
    } else {
        basic.showString("Diqqet mene cox istidir")
    }
})
