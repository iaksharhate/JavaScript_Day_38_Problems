//Problem a
var num = 42;

function getInchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

console.log("42 inches is equals to "+ getInchToFeet(num) +" feet.");

//Problem b
var lenghInFeet = 60;
var breadthInFeet = 40;

function getFeetToMeter(feet1){
    var meter = feet1 / 3.28;
    return meter;
}

var lenghtInMeter = getFeetToMeter(lenghInFeet);
var breadthINMeter = getFeetToMeter(breadthInFeet);

var areaOfPlot = lenghtInMeter * breadthINMeter;

console.log("60 feet equals to "+ lenghtInMeter +" meters.");
console.log("64 feet equals to "+ breadthINMeter +" meters.");
console.log("Area of plot in meter is: "+ areaOfPlot);