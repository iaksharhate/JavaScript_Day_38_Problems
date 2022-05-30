function randomNumber(){
    let ran = Math.floor(Math.random()*899) + 100;
    return ran;
}

var a = randomNumber();
var b = randomNumber();
var c = randomNumber();
var d = randomNumber();
var e = randomNumber();
console.log("Random numbers are: "+ a, b, c, d, e);

if ((a > b) && (a > c) && (a > d) && (a > e)) {
    console.log("Maximum number is: "+ a);
} else if((b > a) && (b > c) && (b > d) && (b > e)){
    console.log("Maximum number is: "+ b);
} else if((c > a) && (c > b) && (c > d) && (c > e)){
    console.log("Maximum number is: "+ c);
} else if((d > a) && (d > b) && (d > c) && (d > e)){
    console.log("Maximum number is: "+ d);
} else{
    console.log("Maximum number is: "+ e);
}

if ((a < b) && (a < c) && (a < d) && (a < e)) {
    console.log("Minimum number is: "+ a);
} else if((b < a) && (b < c) && (b < d) && (b < e)){
    console.log("Minimum number is: "+ b);
} else if((c < a) && (c < b) && (c < d) && (c < e)){
    console.log("Minimum number is: "+ c);
} else if((d < a) && (d < b) && (d < c) && (d < e)){
    console.log("Minimum number is: "+ d);
} else{
    console.log("Minimum number is: "+ e);
}