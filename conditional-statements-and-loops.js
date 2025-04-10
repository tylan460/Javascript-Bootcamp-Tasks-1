// 1. Write a code using if else statements to check the temperature and print a
// message based on the following conditions:
// a. If the temperature is below 0, print "It's freezing!"
// b. If the temperature is between 0 and 15, print "It's cold."
// c. If the temperature is between 16 and 25, print "It's mild."
// d. If the temperature is above 25, print "It's warm."
let temperature = 70
if(temperature < 0){
    console.log("It's freezing!")
} else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold.")
}else if(temperature >= 16 && temperature <= 25){
    console.log("It's cold.")
} else{
    console.log("It's warm.")
}

let temperature2 = 14

switch (temperature) {
    case (temperature < 0):
        console.log("It's freezing!")
        break
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.")
        break
    case (temperature >= 16 && temperature <= 25):
        console.log("It's cold.")
        break
    case (temperature > 25):
        console.log("It's warm.")
        break
    
}