//"" not ''
const body = document.querySelector("body"),
	input1 = document.querySelector(".red-input"),
	input2 = document.querySelector(".green-input"),
	lightBtn = document.querySelector(".light"),
	darkBtn = document.querySelector(".dark"),
	h1 = document.querySelector(".h1"),
	randomBtn = document.querySelector(".random");

function setGradientBackgroundToBody() {
	body.style.background = `linear-gradient(to right, ${input1.value},
        ${input2.value})`;
}

function changeToDarkMode() {
	body.style.background = "#2d2d2d";
	h1.style.color = "#fff";
}
function changeToLightMode() {
	body.style.background = "#fff";
	h1.style.color = "#2d2d2d";
}
function selectRandomColor() {}

input1.addEventListener("click", setGradientBackgroundToBody);
input2.addEventListener("click", setGradientBackgroundToBody);
darkBtn.addEventListener("click", changeToDarkMode);
lightBtn.addEventListener("click", changeToLightMode);
randomBtn.addEventListener("click", selectRandomColor);

//! 2
function reverse(word) {
	const arr = word.split(""),
		reversedArray = [];
	for (let w of arr) {
		reversedArray.unshift(w);
	}
	return reversedArray.join("");
}
console.log(reverse("Wow "));

//! 3
function calculator(num1, num2) {
	function sum() {
		return num1 + num2;
	}
	function sub() {
		return num1 - num2;
	}
	function mul() {
		return num1 * num2;
	}
	function div() {
		return num1 / num2;
	}
	return { sum, sub, mul, div };
}

const calc = calculator(100, 4);
console.log(calc.sum());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
