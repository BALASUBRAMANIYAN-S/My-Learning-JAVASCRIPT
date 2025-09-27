let a = "10";           // string
console.log(typeof a);  // "string"

let num = Number(a);    // convert to number
console.log(typeof num); // "number"

let str = String(123);  
console.log(str);        // "123"

console.log(Boolean(""));  // false (empty string is falsy)
console.log(Boolean("Hi")); // true
