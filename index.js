// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: divisible by 5
const isDivisibleBy5 =
	n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

// Check two: the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
// Check three: calculate
const calculate = ((n2 - n1) * n3) % n4 === 0;
console.log(calculate);
const isValid = isDivisibleBy5 && isFirstLargerThanLast && calculate;

// Finally, log the results.
console.log(
	`The four numbers are valid according to the provided criteria: ${isValid}`
);
