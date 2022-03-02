input.onButtonPressed(Button.A, function () {
    if (true) {
        radio.sendValue("name", randint(0, 10))
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(randint(0, 10))
    basic.pause(1000)
})
