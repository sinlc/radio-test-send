radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 1) {
        basic.showNumber(1)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
basic.forever(function () {
    radio.setGroup(99)
})
