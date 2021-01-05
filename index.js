// Part 1: Generate the Crypto Material for Eliptic Curve

const { zenroom_exec, zencode_exec } = require('zenroom')

// Zencode Hello World!

const zencode = `
Scenario 'ecdh': Create the keypair
Given that I am known as 'Alice'
When I create the keypair
Then print my data
    `  
	
zencode_exec(zencode)
	.then((result) => {
		console.log(result.result);
	})
	.catch((error) => {
		throw new Error(error);
    });

// Part 2: Capture Temperature and Humidity from Sensor
var sensorLib = require("node-dht-sensor");

var app = {
  sensors: [
    {
      name: "Indoor",
      type: 11,
      pin: 4
    }
  ],
  read: function() {
    for (var sensor in this.sensors) {
      var readout = sensorLib.read(
        this.sensors[sensor].type,
        this.sensors[sensor].pin
      );
      console.log(
        `[${this.sensors[sensor].name}] ` +
          `temperature: ${readout.temperature.toFixed(1)}°C, ` +
          `humidity: ${readout.humidity.toFixed(1)}%`
      );
    }
    setTimeout(function() {
      app.read();
    }, 2000);
  }
};

app.read();

