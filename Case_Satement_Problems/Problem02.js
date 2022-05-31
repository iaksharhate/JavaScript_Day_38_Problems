const prompt = require("prompt-sync")();

let input = parseInt(prompt("Enter number between 0 to 6: "));
// input = prompts("Enter number between 0 to 6: ");

switch (input) {
    case 0:
        console.log("Sunday");
    break;
    
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
    break;

    case 3:
        console.log("Wednesday");
    break;

    case 4:
        console.log("Thursday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

    default:
        console.log("Invalid input.");
    break;
}