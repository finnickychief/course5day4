/*
  Page 19 - Do problems first iteratively, then convert them to use map
*/

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
  }
];

// The result should look like:
/*
  [
    'Harry Potter - JK Rowling', 
    'Name of the Wind - Patrick Rothfuss', 
    'Wheel of Time - Robert Jordan', 
    'A Song of Ice and Fire - George RR Martin'
  ];

*/
