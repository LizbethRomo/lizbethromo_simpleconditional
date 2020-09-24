let Celsius = 0
basic.forever(function () {
    Celsius = input.temperature()
    if (Celsius == 10) {
        basic.showNumber(Celsius)
        basic.showString("Ski time!")
    } else if (Celsius == 20) {
        basic.showNumber(Celsius)
        basic.showString("Picnic time!")
    } else if (Celsius == 30) {
        basic.showNumber(Celsius)
        basic.showString("Beach Time!")
    } else if (Celsius == 40) {
        basic.showNumber(Celsius)
        basic.showString("It is better to stay home")
    } else {
        basic.showNumber(Celsius)
    }
})
