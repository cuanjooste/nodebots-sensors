let controllers = [];

controllers.push({
	id : "01",
	name : "Arduino",
	leds : [
        {id:1, status : false},
        {id:2, status : false},
        {id:3, status : false}
    ],
    lightIntensity : 0,
    temperature : 0,
    ph : 0 ,
});
/*
controllers.push({
	id : "02",
	name : "Tessel",
	leds : [
        {id:1, status : false},
        {id:2, status : false},
        {id:3, status : false}
    ],
    lightIntensity : 0,
});

controllers.push({
	id : "03",
	name : "Raspberry",
	leds : [
        {id:1, status : false},
        {id:2, status : false},
        {id:3, status : false}
    ]
});
*/

module.exports = {
	controllers : controllers,
};
