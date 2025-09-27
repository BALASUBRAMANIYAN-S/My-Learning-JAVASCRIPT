// let & const
let a = 10;
const b = 20;

// Arrow function
const add = (x, y) => x + y;
console.log(add(5, 7)); // 12

// Default parameter
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // Hello Guest

// Destructuring arrays
let [x, y] = [10, 20];
console.log(x, y); // 10 20
