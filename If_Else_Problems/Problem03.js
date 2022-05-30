var year = 2024;

if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    console.log(year+ " This is a leap year.")
}else{
    console.log(year+ " This is not a leap year.")
}