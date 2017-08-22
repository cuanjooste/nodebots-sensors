"use strict";
const five = require("johnny-five");
const mqtt = require("mqtt");

const CONFIG = require("./config/local-config.js");

const console_prefix = "Arduino Control - ";
const CONTROLLER_ID = "01";

const board = new five.Board();

board.on("ready", () => {

    let leds = [];
    leds.push(new five.Led("8"));
    leds.push(new five.Led("9"));
    leds.push(new five.Led("10"));

    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2,
        freq : 4000
    });

    var phSensor = new five.Sensor({
      pin: "A0", 
      freq: 4000, 
    });

    let phototransistor = new five.Sensor({
        pin: "A1",
        freq: 4000,
    });


    let host = CONFIG.host;
    let port = CONFIG.port;

    let client = mqtt.connect("mqtt://" + host + ":" + port);
    let baseTopic = "controller/" + CONTROLLER_ID + "/";
    let resultBaseTopic = "results/controller/" + CONTROLLER_ID + "/";

    client.on("connect", function () {
        console.log(console_prefix + "I'm connected to the MQTT server");
        let topicFilters = Array();
        for (let i = 1; i <= leds.length; i++) {
            topicFilters.push(baseTopic + "leds/" + i);
            console.log("Subscribed to " + baseTopic + "leds/" + i);
        }
        client.subscribe(topicFilters);
    })
     
    client.on('message', function (topic, message) {
        
        let messageObj = JSON.parse(message);
       
        console.log("Turn on LED -" + messageObj.id);

        leds[messageObj.id - 1].toggle();

    })


    // EMIT COLLECTION
    thermometer.on("data", function() {
        let resultMessagePayload = {
            "id": this.id,
            "unitOfMeasurement": "celsius",
            "value": this.celsius.toFixed(2),
        }
        let resultMessagePayloadString = JSON.stringify(resultMessagePayload)
        client.publish(resultBaseTopic + "thermometer", resultMessagePayloadString); 
        console.log(console_prefix + "Sent to " + resultBaseTopic + "thermometer - " + resultMessagePayloadString);
    });

    phSensor.on("data",function()
    {
        let measure = this.raw;
        let voltage = 5 / 1024.0 * measure;
        let ph = 7 + ((2.5 - voltage) / 0.18);

        let resultMessagePayload = {
            "id": this.id,
            "unitOfMeasurement": "ph",
            "value": ph.toFixed(2),
        }

        let resultMessagePayloadString = JSON.stringify(resultMessagePayload)
        client.publish(resultBaseTopic + "ph", resultMessagePayloadString); 
        console.log(console_prefix + "Sent to " + resultBaseTopic + "ph - " + resultMessagePayloadString);

    });

    
    phototransistor.on("data", function() 
    {

        let resultMessagePayload = {
            "id": this.id,
            "unitOfMeasurement": "unknown",
            "value": this.scaleTo(0,100),
        }

        let resultMessagePayloadString = JSON.stringify(resultMessagePayload)
        client.publish(resultBaseTopic + "phototransistor", resultMessagePayloadString); 
        console.log(console_prefix + "Sent to " + resultBaseTopic + "phototransistor - " + resultMessagePayloadString);
    });
});

