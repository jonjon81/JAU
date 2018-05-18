/* JS Notes
1) A higher order function take a callback as an input
2) Functions are first class citizens in JS. This mean they can be passed as input to other functions
3) Syntax parsers / Lexical environment / Execution context
4) Lexical environment - where the code is written and what's around it
5) Synstax parsers - reads your code and determines what it does and if it's grammar is valid
6) Exection context - a wrapper to help manage the code that is running
7) Object - a collection of name value pairs
8) Execution Context(Global) creates:
    a) a Global Object
    b) special variable: 'this'

    creationg and hoisting
    2 phases:
        1) The creation phase
            - Global Object
            - 'this'
            - outer environment
            - setup memory space for Variables and Functions -> "Hosting"
                - puts a placeholder in for variables called "Undefined"

        2) The executiong phase
            - assignment of variables are set
            - runs your code
            - interpreting it, converting it, compiling it, executing it

9) this is a variable which is created in the execution context
10) JS engine creates those items
*/
// 11) Map vs ForEach
arr.forEach((num, index) => {
    return arr[index] = num * 2;
}); // arr = [2, 4, 6, 8, 10]

let doubled = arr.map(num => {
    return num * 2;
}); // doubled = [2, 4, 6, 8, 10]

// Use map when changing the data. It creates a new array
// we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

let arr = [1,2,3,4,5]
let positiveNums = arr.filter(num => num > 3);
// positiveNums = [4,5]

let arr = [1,2,3,4,5]
function positiveSum(arr) {
  function getSum(total, num) {
    return total + num;
}
  let positiveNums = arr.filter(num => num > 0).reduce((getSum), 0);
  return positiveNums;
}

// Clever solution:

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
// positiveNums = [9]

// map() allocates memory and stores return values.
// forEach() throws away return values and always returns undefined.
// forEach() will allow a callback function to mutate the current array.
// map() will instead return a new array.

/*
12) Single threated, synchronous execution - one command executed at a time

13) Call stack / Execution stack

14) The Scope Chain - going down the execution stack. There are references to the outer environment

15) Lexical environment - can change by putting code inside a function, vs being on the same level of the GEC

16) Asynchronous - more than one at a time

17) Shadowing - same name var name at a different scope level

18) The JavaScript Engine:

19) Algorithm: sequence of steps that transform the input inot the output
    a tool for solving a problem




Interview advice:
1) When I interview JS developers I try to see if they understand the prototype chain, closures, variable scopes, primitives, and how to make basic OOP design patterns (modules, factories, singletons) out off them. If they can't recall the exact JS method or property I don't sweat it as long as the above is sound.

