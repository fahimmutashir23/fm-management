1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: B || referenceError: greeting is not define because the variable greeting is declared but it was not define of it's value that's why it called referenceError: greeting is not define 

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

Answer: C || "12" because string and number is not to be addition. if try to addition the result will be like there and result is string because when string and number is addition the priority of string is first.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A || because not use push, pop, shift or any array methods here thats why the food is not changed. I see set info but not push or pop on the food.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B || because the parameter name is not defined that's why its return string Hi there but dynamic name is undefined.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: 3 || because when num is truthy code enter the if and increase the count value 1. nums array's 1st index is 0 that's means first time the num is falsy and code not enter the if condition after that all element is truthy and code enter the if condition 3 times and count value increase 3 times addition 1. that's why ans is 3.