1) What is the difference between var, let, and const?
   
Ans: var = Function scope , can be reassigned and redeclared.
     let = Blocked scope, can not be reassigned but can be redeclared.
     const = Blocked Scope, can not be reassigned and redeclared.

     
3) What is the difference between map(), forEach(), and filter()?

Ans: map()= create a new array of same length by transforming values of elemeants of original array.
     forEach()= Do not return new array just perform some operations.
     filter()= create a new array from original array uder given condition.It literally filters elements by using condition.

     
4) What are arrow functions in ES6?


Ans:Arrow functions in ES6  are a shorter and cleaner way to write functions in JavaScript. They are introduced using the => syntax.Example: const add = (a, b) => a + b;


5) How does destructuring assignment work in ES6?


Ans: Destructuring assignment is a syntax that allows  to unpack values from arrays or properties from objects into distinct variables.It can be understand by an 
     example(object destructuring) : const person = { name: "Banna", age: 26, country: "Bangladesh" };
                const { name, age } = person; 

6) Explain template literals in ES6. How are they different from string concatenation?


Ans:Template literals are string literals allowing embedded expressions. They are enclosed by backticks and can contain data indicated by ${expression}.
      String concatenation using '+' sign for reading multiple string with varible but temple literals use backticks that make easy to undestand and also 
      allows quotes , new lines without using special character for this.
