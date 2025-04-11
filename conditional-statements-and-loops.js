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

switch (true) {
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

// Exercise 2: Divisibility Check
// 1. Write a code using if else statements to check if a number is
// divisible by 2, 3, or both:
// a. • If the number is divisible both by 2 and 3, print
// i. "Divisible by both."
// b. • If the number is divisible by only 2, print"Divisible by 2."
// c. • If the number is divisible by only 3, print"Divisible by 3."
// d. • If the number is not divisible by either, print "Not divisible by 2 or
// 3."

// 2. Re-write the code using switch Statements.
let number = 7;
if(number % 2 == 0 && number % 3 == 0){
    console.log("Divisible by both.")
} else if(number % 2 == 0){
    console.log("Divisible by 2.")
}else if(number % 3 == 0){
    console.log("Divisible by 3.")
}else{
    console.log("Not divisible by 2 or 3")
}

switch (true){
    case (number % 2 == 0 && number % 3 == 0):
        console.log("Divisible by both.")
        break
    case (number % 2 == 0):
        console.log("Divisible by 2.")
        break
    case (number % 3 == 0):
        console.log("Divisible by 3.")
        break
    default:
        console.log("Not divisible by 2 or 3")
}


// Exercise 3: For loops
// 1. Print numbers from 1 to 10.
// 2. Print all even numbers between 1 and 20.
// 3. Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’
// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each
// element to the console.
// 5. const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print
// the largest number.
// #Hint: current value and previous value.



for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log("exercise 3.2")
for(let i = 1; i < 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


let sum = 0;

for(let i = 1; i <= 100; i++){
    sum += i
}

console.log(sum)


const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    numbers[i]
}

const numbers2 = [3,7, 2, 5, 10, 6]

let biggestNumber = 0;

for(let i = 0; i < numbers2.length; i++){
    if(biggestNumber <= numbers2[i]){
        biggestNumber = numbers2[i]
    }
}
console.log(biggestNumber)



// Exercise 4: While loops
// 1. Print numbers from 1 to 10.
// 2. Print all even numbers between 1 and 20.
// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
// 4. Print all multiples of 5 less than 50.
// # Hint: ‘%’

console.log("Exercise 4.1:")

let i = 1;

while(i <= 10){
    console.log(i)
    i += 1
}


console.log("Exercise 4.2:")
k = 1
while(k < 20){
    if(k % 2 == 0){
        console.log(k)
    }
    k += 1
}
console.log("Exercise 4.3:")
i = 0
sum = 0
while(i <= 100){
    sum += i;
    i += 1
}
console.log(sum)

i = 1;
console.log("Exercise 4.4:")
while(i < 50){
    if(i % 5 == 0){
        console.log(i)
    }
    i += 1
}


// Exercise 5: Do While loops
// 1. Print numbers from 1 to 10.
// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
// 3. Prompt the user to enter a number greater than 10. Keep asking until
// they enter a valid number.
// 4. Create a simple guessing game where the user must guess a number
// between 1 and 10. The game continues until the user guesses the correct
// number.
console.log("Exercise 5.1:")
k = 1
do{
    console.log(k)
    k++
}while(k <= 10)


console.log("Exercise 5.2:")
sum = 0
i = 0
do{
    sum += i;
    i += 1
}while(i <= 100)
console.log(sum)

let bulb = true;
do{

    const readline = require('readline')
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    reader.question("Enter any number greater than 10: ", number => {
        if(number > 10){
            bulb = false
            reader.close()
        }
   
    })

}while(bulb)




