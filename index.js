//Part1
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
const isValid = isDivisibleBy5 && isFirstLargerThanLast && calculate;

// Finally, log the results.
console.log(
	`The four numbers are valid according to the provided criteria: ${isValid}`
);

//Part2
//The fixed values for the trip
const distance = 1500;
const fuelBudget = 175;
const fuelCost = 3;

//each plan for the trip
let plan1 = { perHour: 55, perGallon: 30 };
let plan2 = { perHour: 60, perGallon: 28 };
let plan3 = { perHour: 75, perGallon: 23 };

//created a function to calculate result with all the factors
function isEfficient(plan) {
	let hours = (distance / plan.perHour).toFixed(2);
	let gallons = (distance / plan.perGallon).toFixed(2);
	let cost = ((distance / plan.perGallon) * fuelCost).toFixed(2);
	let isInBudget = cost < fuelBudget ? "in budget" : "out of budget";
	return `We'll need ${gallons} gallons and it's ${isInBudget}. The trip will take ${hours} hours`;
}

console.log(isEfficient(plan1));
console.log(isEfficient(plan2));
console.log(isEfficient(plan3));
