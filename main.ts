input.onButtonPressed(Button.A, function () {
    if (true) {
        radio.sendValue("name", randint(0, 10))
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(1000)
    basic.showNumber(randint(0, 10))
})
