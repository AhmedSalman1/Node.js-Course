//! notes (cin  ►→→→→  (var number = Number(prompt("Enter number: ")))

//! 1
var num = Number(prompt("Enter number Q1: "));
if (num % 2 == 0) {
	console.log("even");
} else {
	console.log("odd");
}

//!  2
for (var i = 0; i <= 19; i++) {
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
	else if (i % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else console.log(i);
}

//!                                              4
const BI = 3.14;

for (i = 0; i <= 5; i++) console.log("*");

//! 5 need function

//! 6 need function

//! 7
pos_num = Number(prompt("Enter a positive number"));

//! 8
num1 = Number(prompt("Enter first number: "));
num2 = Number(prompt("Enter second number: "));
num3 = Number(prompt("Enter third number: "));

let result = num1;
if (num2 > result) result = num2;
if (num3 > result) result = num3;
console.log(`The largest number is ${result}`);

//! 9
let sum = 0;
for (i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);

//! 10

/*for(i = 0 ; i<=5 ; i++){
    for(j = 5 ; j<=i ; j--){
        console.log("*");
    }
}
*/

//! 11
var number = Number(prompt("Enter num Q11"));
if (number > 0) {
	console.log("positive");
} else if (number < 0) {
	console.log("negative");
} else {
	console.log("zero");
}

//! 13
var num_1 = 5,
	num_2 = 8;
console.log(num_1 + num_2);

//! 14      (hint)
var facnum = Number(prompt("Enter a number :"));

if (facnum < 0) {
	console.log("positive numbers only");
} else if (facnum === 0) {
	console.log("fac is 1");
} else {
	let fact = 1;
	for (i = 1; i <= facnum; i++) {
		fact *= i;
	}
	console.log(`the factorial is ${fact}`);
}

//! 15
var a = Number(prompt("Enter number1: "));
var op = prompt("Enter operator: ");
var b = Number(prompt("Enter number2: "));

if (op === "+") {
	console.log(a + b);
} else if (op == "-") {
	console.log(a - b);
} else if (op == "*") {
	console.log(a * b);
} else if (op == "/") {
	console.log(a / b);
} else {
	console.log("enter correct orpreator");
}
