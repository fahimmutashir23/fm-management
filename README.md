## Website Name and live link
FA Management

Live link: https://awake-chickens.surge.sh/
#
# Question and ans.

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

##
## 5 feature of this website.
* It is a corporate event management website (FA Management). Here you can go and booking event in our service which you want. To booking service you will click Read more button of the service card in the home page which you need. after click open a details page you can read details and booking by clicking BUY SERVICE button and add "Your Booking" option in the nav bar and show a modal. You will see all booking service in "Your Booking" option. Your data is stay in this option only for your computer. You can delete all booking in this page by clicking "Delete Booking" button.

* There are 6 section in Home Page service, supper clients and our sponsorship company. Supper clients section is move right to left and left to right to show all clients. All sponsorship company logo those are sponsor ours in Sponsor section. 

* To use this website first you need to registration. You must put name email password and your photo url. password must be is more than 6 characters, must have a capital letter and must have a special character and accept our terms and condition. You can Login google account also. after registration you will go login page automatically and login same email and password. After login you will go home page by redirect.Registration and login successfully and open success modal. In all authentication work used firebase

* 2 privet route in Navbar. If you are login then you can visit this 2 option(Special Service and Your Booking) otherwise you will redirect to login page. 

* This website is fully responsive for mobile, tablet and computer.


