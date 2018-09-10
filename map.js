/*
https://github.com/finnickychief/course5day4

  ES6 Array functions:
    With ES6 a few new array methods were added
    forEach, map, filter, reduce

  Map:
    The map method applies a function to every item within an array, and returns a new array based on the result of that function



*/

// makePies function - Create a list of pies from fruits.

const fruits = ['Apple', 'Blueberry', 'Cherry', 'Apricot', 'Blackberry'];

function makePies(arr) {
  const fruitPies = [];
  let pie = ''; // Declare a variable to build each string

  // For every fruit, make a pie out of it
  for (let i = 0; i < arr.length; i++) {
    pie = arr[i] + ' Pies';
    fruitPies.push(pie);
  }
  return fruitPies;
}

const fruityPies = makePies(fruits);
console.log(fruityPies);

const pFood = ['Pizza', 'Pumpkin', 'Pecan', 'Peach'];
function bakePies(arr) {
  let piesArr = [];
  let pie = '';
  for (let i = 0; i < arr.length; i++) {
    pie = arr[i] + ' Pie';
    piesArr.push(pie);
  }
  return piesArr;
}
const myPies = bakePies(pFood);
console.log(myPies);
