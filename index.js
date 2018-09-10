/*
  Topics for today:
    ES6 Arrow functions

    Array Map method

*/

/*
  Arrow functions:
    Mostly a new syntax for writing functions in javascript, added in ES2015/ES6

    One step further than writing function expressions

    Function expressions are when you assign a function to a variable instead of giving it its own name.

    Without expression:
      function greetUser(username) {
        console.log(`Hello ${username}`);
      }

    With expression:
      const greetUser = function(username){
        console.log(`Hello ${username}`)
      }

  ES6 Functions:
    ES6 Functions use 'Arrows' (=>) instead of the function keyword

    const greetUser = (username) => {
        console.log(`Hello ${username}`)
    }

    Some extra notes about the syntax of arrow functions:
      1: If you only have 1 piece of code running, you do not need the curly braces({}'s)
      Example: 
        const greetUser = (username) => console.log(`Hello ${username}`)

      2: If you only have 1 parameter, you don't need the parentheses.
      Example:
        const greetUser = username => console.log(`Hello ${username}`)

      2.1: If you have NO parameters, or more than 1, the parantheses must stay
      Example:
        const sayHello = () => console.log('Hello');
        const longGreet = (first, last) => console.log(`Hello ${first} ${last}`);

      3: When you only have one statement in the execution block, it always returns it without the 'return' keyword
      Example:
        function multiply(num1, num2){
          return num1 * num2;
        }
        Is the same as:
        const multiply = (num1, num2) => num1 * num2

        If you want to use return, you must put the brackets like a normal function


      4: The 'this' keyword:
        When you want to use properties of an object WITHIN that object, you have to use the 'this' keyword. 
        In ES5 functions, 'this' refers to the parent of the function
        In ES6 functions, 'this' refers to the scope/context it was defined in. By default this will be the Window object in a browser

        let myObj1 = {
          name: 'Jeff',
          sayName: function(){
            console.log(this.name) // Prints the name on this object, 'Jeff'
          }
        }

        let myObj2 = {
          name: 'Jeff',
          sayName: () => console.log(this.name); // prints an empty string, because the Window has no property called name
        }

  Anonymous Functions:
    Functions that don't have a name.
    Function expressions will typically be anonymous
    ALL ES6 functions/Fat arrow functions are anonymous

    Some benefits:
      Easier to read
      Less Code
      Don't have to think of names
      No chance of having an error on redefining a function name
    Downsides:
      Harder to debug because it doesn't give you a name
      No self-referencing

    
    Example:
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          alert(xhr.responseText);
        }
      }
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
          alert(xhr.responseText);
        }
      }

    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
      header.style.backgroundColor = '#ffffff';
    })
    header.addEventListener('onmouseout', () => {
      header.style.backgroundColor = '#000000';
    })


    function greetUser(hombre){
      return `Hola ${hombre}`;
    }
    console.log(greetUser('Jeff'));

    // Converted to expression with anonymous function
    const greetUser = function(hombre){
      return `Hola ${hombre}`;
    }
    console.log(greetUser('Jeff'));

    // Converted to ES6/arrow function
    const greetUser = (hombre) => {
      return `Hola ${hombre}`;
    }
    console.log(greetUser('Jeff'));

    // More concise version with implicit return
    const greetUser = hombre => `Hola ${hombre}`;
    
    console.log(greetUser('Jeff'));

*/
