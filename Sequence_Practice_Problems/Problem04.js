function randomNumber(){
    let ran = Math.floor(Math.random()*89) + 10;
    return ran;
}
var a = randomNumber();
var b = randomNumber();
var c = randomNumber();
var d = randomNumber();
var e = randomNumber();

var sum = a + b + c + d + e;
var avg = (a + b + c + d + e)/5;

console.log("Random numbers are: "+ a, b, c, d, e);
console.log("Sum of above numbers: "+ sum);
console.log("Average of above numbers: "+ avg);