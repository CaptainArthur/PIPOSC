let teplota = 0
input.onButtonPressed(Button.A, function () {
    teplota = input.temperature()
    if (true) {
        radio.sendValue("name", teplota)
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(teplota)
})
