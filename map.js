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

// Function expression version:
const fruits2 = ['Apple', 'Blueberry', 'Cherry'];

const pies = function(arr) {
  const piesArr = [];
  let pie = '';

  // Map ' Pie' to the end of every item
  for (let i = 0; i < arr.length; i++) {
    pie = arr[i] + ' Pie';
    piesArr.push(pie);
  }

  return piesArr;
};
console.log(pies(fruits2));

// Fat arrow: First function declaration, then function expression, then arrow function
const birds = ['Robin', 'Oriole', 'Bluejay', 'Seagull', 'Eagle'];

//function layEggs(arr)
//const layEggs = function(arr)
const layEggs = arr => {
  const eggsArr = [];
  let egg = '';

  for (let i = 0; i < arr.length; i++) {
    egg = arr[i] + ' Eggs';
    eggsArr.push(egg);
  }
  return eggsArr;
};
console.log(layEggs(birds));

// Map (and array functions)
/*
  Each of the primary array methods that loop over every item(forEach, map, filter, reduce) use the same structure for their callback

  Callback: When you pass in a function as a parameter
  This function is called based on an event or on every item in a collection such as an array

  Examples have been with addEventListener, where when the event type happens the function you passed in is called

  Structure of array methods:
  const numAry = [1,2,3,4,5];

  Map returns a new array, not the original array modified
  const mappedAry = numAry.map(callback);

  Callback structure:
  Parameter list - For array methods, this is 1-3 parameters. The first is required, the other 2 are optional. The order matters.
    1: Current item in the array
    2: The index that the current item occurs at
    3: The entire array that called map

  Execution block

  Create a new array that says if the item is even or odd
  const resultArray = numAry.map((item, index) => {
    if(item % 2 === 0){
      console.log(`${item} at ${index} is even`)
      return 'even'
    } else{
      console.log(`${item} at ${index} is odd`)
      return 'odd';
    }
  })

  const shortResult = numAry.map(item => 
    item % 2 === 0 ? 'even' : 'odd'
  );

  const shortResult2 = numAry.map(item => 
    item % 2 ? 'odd' : 'even'
  );


  
  const shiftedAry = numAry.map((item, index, array) => {
    array[index] = array[index+1];
    console.log(array);
    return item;
  })

  let newAry = [];
  for(let i = 0; i < numAry.length; i++){
    let item = numAry[i]; // Store current item
    numAry[i] = numAry[i+1]; // Set current item to be the next item
    console.log(numAry); // Log the entire array
    newAry.push(item); // Add current item to the new array
  }


  [1,2,3,4,5]
  []
  Index 0:
  [2,2,3,4,5]
  [1]
  Index 1:
  [2,3,3,4,5]
  [1,2]
  Index 2:
  [2,3,4,4,5]
  [1,2,3]
  Index 3:
  [2,3,4,5,5]
  [1,2,3,4]
  Index 4:
  [2,3,4,5,undefined]
  [1,2,3,4,5]



  // Use external function
  let callbackFunction = (item, index, array) => {
    array[index] = array[index+1];
    console.log(array);
    return item;
  }

  const shiftedAry2 = numAry.map(callbackFunction);







  // Make each item the sum of its 2 neighbors
  [1,2,3,4,5]
  [2,4,6,8,4]




  

*/

const birds = ['Robin', 'Oriole', 'Bluejay', 'Seagull', 'Eagle'];

//function layEggs(arr)
//const layEggs = function(arr)
const layEggs = arr => {
  let eggsArr = [];
  for (let i = 0; i < arr.length; i++) {
    eggsArr.push(arr[i] + ' Eggs');
  }
  return eggsArr[];
};

const eggsArray = birds.map((item) => {
  return item + ' Eggs'
}); // Same as next line
const eggsArray = birds.map(bird => bird + ' Eggs');

console.log(layEggs(birds));


// jellyBeans
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Pear', 'Plum'];

const jellybeans = [];
for(let i = 0; i < fruits.length; i++){
  jellybeans.push(fruits[i] + ' Jellybean');
}
console.log(jellybeans);

let mappedJellybeans = fruits.map((fruit) => {
  return fruit + ' Jellybean';
})

let mappedJellybeans = fruits.map(fruit => `${fruit} Jellybean`);

let objectFruits = fruits.map(fruit => {return {name: fruit}})


const furniture = ['Desk', 'Chair', 'Bed', 'Table', 'Sofa', 'Card Table', 'Tea Table', 'Chest', 'Dresser'];
const wood = ['Oak', 'Walnut', 'Mahogany', 'Maple'];

// Make something out of each piece of furniture, with the wood type randomized
const woodFurniture = furniture.map(item => {
  let random = Math.floor(Math.random()*wood.length);
  return wood[random] + " " + item;
});


const fibos = [1,1,2,3,5,8,13,21,34,55,89,144];
// const fibosqs = fibos.map(e => e**2);
const fibosqs = fibos.map(e => e * e);


const shoppingList = [20.21, 5.78, 10.31];
const taxRate = 0.08;

const finalPrices = shoppingList.map(item => {
  return Number((item + item*taxRate).toFixed(2))
});




