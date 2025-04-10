/*
Exercise 1: Numbers
1. Declare a number variable and assign an integer to it. Declare a variable
and assign it a floating number.
2. Perform addition, subtraction, multiplication, division, modulus and
exponentiation with a number variable and another number.
3. Print all your variables..
*/
console.log("Exercise 1: Numbers")
let num1Int = 10;
let num2Float = 2.5;

let sum = num1Int + num2Float
let difference = num1Int - num2Float
let quotient = num1Int / num2Float;
let modulus = num1Int % num2Float;
let exponentiation = Math.pow(num1Int, num2Float)

console.log("sum: " + sum)
console.log("difference: " + difference)
console.log("quotient: " + quotient)
console.log("modulus: " + modulus)
console.log("exponentiation: " + exponentiation)
console.log()

/*
Exercise 2: Boolean and Operators
1. Use comparison operators to compare two numbers and store the results
in boolean variables.
*/

console.log("Exercise 2: Boolean and Operators")
let num1 = 5;
let num2 = 16;
let comparison1 = num1 < num2;
let comparison2 = num1 > num2;
let comparison3 = num1 === num2;
let comparison4 = num1 != num2;
console.log()



// 2. Declare two variables x and y with the values 8 and 12 respectively.
// a. Use comparison operators to check and print the following:
// b. If x is greater than y.
// c. If x is less than or equal to y.
// d. If x is equal to y.
// e. If x is not equal to y.
let x = 8
let y = 12;

console.log(x > y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);



// 3. Declare the variables a and b with values true and false, determine and print
// the result of the following logical operations:
// a. a AND b
// b. a OR b
// c. NOT a
let a = true
let b = false
console.log(a && b)
console.log(a || b)
console.log(!a)


// 4. Declare variable p and assign it a value of 10. Use the following
// assignment operators to modify the value of p with any number and print
// the result each time:
// a. +=
// b. -=
// c. *=
// d. /=
// e. %=
// */
let p = 10;
let q = 7;
console.log(p += q)
console.log(p -= q)
console.log(p *= q)
console.log(p /= q)
console.log(p %= q)










