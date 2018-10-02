var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { pingTimeout: 3000 });
var Gpio = require('pigpio').Gpio
var motor = new Gpio(10, {mode: Gpio.OUTPUT})

io.on('connection', (socket) => {
	console.log('A User Connected')

	socket.on('disconnect', (reason) => {
		console.log('A User Disconnected')
	})
	socket.on('Servo', (data) => {
		if (data == "kanan") {
			motor.servoWrite(100);
		}
	})
});
server.listen(3000, () => { console.log('Listening On Port 3000'); });