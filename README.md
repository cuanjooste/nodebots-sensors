# Nodebots-Sensors

A basic example using Node.js to create a connected system with multiple micro controllers communicating via MQTT. Utilizing Vue.js and Vue MQTT for the web application, Mosquitto as MQTT Broker and Johnny Five as hardware platform.

This prototype currently includes the following sensors
- PH Sensor
- Temp Sensor
- Photo transistor
- LEDs

## Getting Started

ARDUINO
- Node v6.11.0
- STEPS
	- Install and get Node.js running
	- npm install
	- node arduino-control.js

TESSEL
- Node v6.11.0
- STEPS
	- install Tessel CLI
	- npm install
	- t2 run tessel-control.js

RASPBERRY PI ZERO
- Node v7.7.1
	- Installing Node - https://github.com/sdesalas/node-pi-zero
	- Install Raspi-io & Johnny Five - https://github.com/nebrius/raspi-io
- STEPS
	- npm install
	- sudo node raspberry-control.js


WEBAPP
- Uses Vue-Cli Webpack Simple Template
- Node v6.11.0
- STEPS
	- npm install
	- npm run dev


Hardware Config Local
module.exports = {
	port: 1883,
	host: "0.0.0.0",
};



This example can communicate with multiple micro controllers at the same stage. The Webapp's settings of the hardware components are currently set in /js/hardwareControllers.js. Hardware components currently identified by a single id, and code is purposefully kept similar across all 3 controllers.

### Prerequisites

- Node.js, npm , Tessel CLI


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

