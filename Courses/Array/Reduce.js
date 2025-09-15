// array.reduce(function(accumulator, currentValue, currentIndex, array) {
//   // code to be executed on each iteration
// }, initialValue);

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.reduce((accumulator, currentValue) =>accumulator.concat(currentValue));
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

let colors = ['red', 'blue', 'green', 'red', 'blue', 'yellow'];
let colorCounts = colors.reduce((accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(colorCounts); // { red: 2, blue: 2, green: 1, yellow: 1 }