radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
    	
    } else {
    	
    }
})
function Foward () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    127
    )
}
radio.setGroup(2)
