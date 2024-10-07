// 1. Variables
let name = 'Alice';  // Using let
const age = 25;      // Using const for a value that won't change (recommended)
var isStudent = true;  // Older way to declare variables (avoid in modern JS)

// 2. Data Types
const stringExample = 'Hello World';   // String
const numberExample = 42;              // Number
const booleanExample = true;           // Boolean
const nullExample = null;              // Null
let undefinedExample;                // Undefined

// 3. Conditionals
if (age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

// 4. Functions
function greet(name) {
  return `Hello, ${name}!`;  // Template string
}
console.log(greet('Bob'));

// 5. Arrow Functions (modern function syntax)
const add = (a, b) => a + b;
console.log(add(5, 3));

// 6. Loops
// For loop
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}

// While loop
let count = 0;
while (count < 3) {
  console.log(`While Count: ${count}`);
  count++;
}

// 7. Arrays
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]);  // Accessing elements

fruits.push('Grapes');  // Adding an element
console.log(fruits);

// Looping through an array
fruits.forEach((fruit) => console.log(fruit));

// 8. Objects
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function() {
    return `Hi, I'm ${this.firstName} ${this.lastName}.`;
  }
};

console.log(person.firstName);  // Accessing object properties
console.log(person.greet());    // Calling a method

// 9. DOM Manipulation (interacting with HTML elements)
document.getElementById('heading').textContent = 'JavaScript Basics';
document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});

// 10. Events
window.addEventListener('load', () => {
  console.log('Page loaded');
});

// 11. Working with Dates
let currentDate = new Date();
console.log(currentDate.toDateString());  // Printing date

// 12. Error Handling
try {
  throw new Error('An error occurred');
} catch (error) {
  console.log('Caught an error:', error.message);
}

// 13. Promises (for async operations)
let fetchData = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Data fetched successfully');
  } else {
    reject('Failed to fetch data');
  }
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.error(error));

// 14. ES6 Classes
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  displayInfo() {
    return `${this.brand} ${this.model}`;
  }
}

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.displayInfo());
