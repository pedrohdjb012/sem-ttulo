let tempertura = 0
input.onButtonPressed(Button.A, function () {
    tempertura = input.temperature()
    basic.showString("" + tempertura + "C")
})
basic.forever(function () {
	
})
