/*
  Page 19 - Do problems first iteratively, then convert them to use map
*/

const breakfasts = ['Scrambled', 'Fried', 'Poached', 'Hard-boiled'];
// Create an array of eggs prepared according to the breakfasts array
/*
  cook function documentation:
    returns a new array of items prepared from the breakfasts array

    Each AND every item will have the following format:
      currentItem + ' Eggs';
    

  Map:
    returns a new array of the same length as the old array, typically without modifying the old array
    Each AND every item will be formatted based on return statement in the callback

*/
const cook = () => {
  const foodArr = [];
  let food = '';

  for (let i = 0; i < breakfasts.length; i++) {
    food = breakfasts[i] + ' Eggs';
    foodArr.push(food);
  }

  return foodArr;
};
// Map takes care of declaring your new array, returning your array, and providing the current item; index; and the array within your callback.
const cookedEggs = breakfasts.map(recipe => `${recipe} Eggs`);

const verbs = ['Read', 'Buy', 'Sell', 'Print', 'Publish'];
const nouns = ['Newspaper', 'Magazine', 'Book', 'Catalog', 'Manual'];

// makeRandomPairs
/*
  For each item in the verbs array, match it with a random item in the nouns array and add it to the result array.
  Return the result array at the end
*/

const makeRandomPairs = (arr1, arr2) => {
  const pairs = [];
  let pair = '';

  // Loop over all items
  for (let i = 0; i < arr1.length; i++) {
    // Find a random match within the second array
    let randNum = Math.floor(Math.random() * arr2.length);
    // Contatenate them
    pair = arr1[i] + ' ' + arr2[randNum];
    // Add to pairs list
    pairs.push(pair);
  }
  // Return new array after all items have been matched
  return pairs;
};

verbs.map(verb => {
  let randNum = Math.floor(Math.random() * nouns.length);
  // Contatenate them
  return verb + ' ' + nouns[randNum];
});

// Create book list:

/*
  Given the following book object array, use the map method to create a book list array with the author and title concatenated. 

  {title: 'A Song of Ice and Fire', author; "GRRM"} becomes 'A Song of Ice and Fire - GRRM'
*/

const bookArray = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Name of the Wind',
    author: 'Patrick Rothfuss'
  },
  {
    title: 'Wheel of Time',
    author: 'Robert Jordan'
  },
  {
    title: 'A Song of Ice and Fire',
    author: 'George RR Martin'
  } //
];

// How to generate the first book:
bookArray[i].title + ' - ' + bookArray[i].author;

bookArray.map(book => book.title + ' ' + book.author);

const titles = ['Name of the Wind', 'Wheel of Time'];
const authors = ['Patrick Rothfuss', 'Robert Jordan'];

const newBookArray = titles.map((title, i) => {
  return { title: title, author: authors[i] };
});

// The result should look like:
/*
  [
    'Harry Potter - JK Rowling', 
    'Name of the Wind - Patrick Rothfuss', 
    'Wheel of Time - Robert Jordan', 
    'A Song of Ice and Fire - George RR Martin'
  ];

*/
