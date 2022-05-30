var dice1;
var dice2;
dice1 = (Math.floor(Math.random()*10)%6) +1;
dice2 = (Math.floor(Math.random()*10)%6) +1;
var sum = dice1 + dice2;
console.log("Value of dice1: "+ dice1+ " Value of dice2: "+ dice2+ " Sum of two dice: "+ sum);