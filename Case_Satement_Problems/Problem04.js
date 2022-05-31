const prompt = require("prompt-sync")();

console.log("1. Feet to inch.");
console.log("2. Feet to meter.");
console.log("3. Inch to feet.");
console.log("4. Meter to fee.t");

let input = parseInt(prompt("Enter your choice 1, 2, 3, 4: "));

switch (input) {
    case 1:
        feetToInch();
    break;

    case 2:
        feetToMeter();
    break;

    case 3:
        inchToFeet();
    break;
    
    case 4:
        meterToFeet();
    break;    

    default:
        console.log("Invalid input.");
    break;
}

function feetToInch(){
    let feet = parseInt(prompt("Enter feet: "));
    let inch;
    inch = feet*12;
    console.log(feet +" is equal to "+ inch +" inches");
}

function feetToMeter(){
    let feet = parseInt(prompt("Enter feet: "));
    let meter;
    meter = feet/3.28
    console.log(feet +" is equal to "+ meter +" meter");
} 

function inchToFeet(){
    let inch = parseInt(prompt("Enter inches: "));
    let feet;
    feet = inch/12;
    console.log(inch +" is equal to "+ feet +" feet");
}

function meterToFeet(){
    let meter = parseInt(prompt("Enter meter: "));
    let feet;
    feet = meter*3.28084;
    console.log(meter +" is equal to "+ feet +" feet");
}