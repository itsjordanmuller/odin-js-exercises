const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total += nums[i];
	}
	return total;
};

const multiply = function(nums) {
	let total = nums[0];
	for (let i = 1; i < nums.length; i++) {
		total *= nums[i];
	}
	return total;
};

const power = function(num, exp) {
	let total = 1;
	for (let i = 0; i < exp; i++) {
		total *= num;
	}
	return total;
};

const factorial = function(num) {
	let total = 1;
	for (let i = 1; i <= num; i++) {
		total *= i;
	}
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
