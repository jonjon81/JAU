Arrays:

// 1) Filter
const fifteenHundreds = inventors.filter(inventor => (inventor.year > 1500 && inventor.year < 1600))
console.table(fifteenHundreds);

const fifteen = inventors.filter(inventor => {
    if(inventor.year > 1500 && inventor.year < 1600) {
        return true;
    }
});


// 2) Map will always return the same amount of items in a new array
const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));

        let arr2 = arr.map(num => num * 2).filter(num => num > 5);
        // arr2 = [6, 8, 10]

        // further breakdown ->
        function map(array, callback) {
          const output = [];
            for(let i = 0; i < array.length; i++) {
            output.push((callback(array[i])))
          }
          return output;

        }

        console.log(map([1, 2, 3], addTwo));


// 3) Sort
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1); // turnurary operator (shorthand if statement)
// understand the arrow function and implicit return

const ordered = inventors.sort(function(firstPerson, secondPerson) {
  if(firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
})

const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);


// 4 Reduce
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});


// 5 Combos
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));



// 6) CSS Variables
Testing


// 7) Recursion
// stack size exceeded -> know why! how to fix

let output = ' '
function repeater(char, num) {
	if (output.length == num) { return output; }  // base case

  //concat char to output
  output += char;
  return repeater(char, num)
}

let counter = 0;

function recurse() {
  if (counter === 2) return 'done';
  counter++
  console.log(counter)
  return recurse()
}

recurse()

const output = recurse();
console.log(output);

// used Global variables which POLUTES the Global namespace. NOT GOOD. Just helps to understand Recursion.
// Don't want any side effects. Want the same output to result from an input.
// Want it all in the function.

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g', 5)) //'ggggg'


//8) Parameters as Storage

function recurse(counter) {
  if (counter === 2) return 'done';
  const newCounter = counter + 1;
  return recurse(newCounter)
}

const output = recurse(0);
console.log(output);

// 9) Data Structures and Algorithms

//Pseudoclassical
function Building(floors) {
  this.what = "Building";
  this.floors = floors;
}

var myHouse = new Building(3)

Building.prototype.countFloors = function() {
  console.log('I have', this.floors, ' floors' )
}

var yourHouse = new Building(1442)

yourHouse.countFloors();


//constructor function
var Yurt = function(ribs){
  this.ribs = ribs; // define properties
}

Yurt.prototype.countRibs = function() { // methods
  if(this.ribs > 10) { // this is referring to the instance
    console.log("YUM!!");
  } else {
    alert('Get more ribs!')
  }
};

var biancasHouse = new Yurt(50);
biancasHouse.countRibs() //"YUM!!"


// 10) addEventListener

 window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);

<script>
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

</script>


// 11) ES6 - Destructuring


// 12) Software developer Mid/Senior
/*
20% technical knowlege - react/redux
20% non-technical communication
20% technical communication
20% problem solving
20% approach to debugging / reading documentation etc.
-> these will be the predictor of your technical knowledge
-> experience and using React to solve actual real problems
*/


// 13) Data Structures and Algorithms
// Stacks , pushed into or popped off. LIFO



// 14) Qeueus
//(like a line!) FIFO when we take anything off (Dequeue), we can only take from the front, and when you add anything on, you can only take from the back


/* 15) JavaScript - The Hard Parts - CSX
a) Functions and Execution Context
b) Callback & Higher-order Functions
c) Closure, Scope & Execution
d) Recursion
e) Asynchronous Javascript
f) Chrome Extension
*/

/* Functions and Execution Context

// What happens when executes (runs) my code?
1) we create a global execution context
    - thread of execution (parsing and executing the code line after line)
    -live memory of variables with data (Global variable environment)
2) when you execute a function you create a new local execution context
    - the thread of execution (go through the code in the function line by line)
    - A local memory ('Variable environment') where anything defined in the function is stored
3) call stack - keep track of which functions are being called, which execution context we are in.
    knows where to return after an execution context is popped off the stack


*/

const num = 3 // num is initialized to 3 in Global memory
function example () {  // store function definition of example, in Global memory
    /// code
}

// As we start to run/execute code, we create a Global Execution Context

// *** be able to write out all exercises in full pseudocode!
// *** be able to write/talk about all exercises in technical terms!
// film/record self describing what is happening and see how clear it is. Record each term until you fully have a clear understanding of what it does

/* b) Callback & Higher-order Functions
1) A higher order function take a callback as an input
2) Callback: a function we pass in to another function
3) Higher order function: outer function that takes in the


c) Closure, Scope & Execution
- closures give access to outer function's scope from an inner function 
- return a function from a function
PSEUDOCODE!!!



16) Temporal dead zone: 
-using CONST, you can't use a const before it is created.

17) const vs let
- use const by default
- only use let if rebinding is needed
- var shouldn't be used in ES6

18) Arrow functions */
// always anonymous functions vs being a named function
const names = ['first', 'second', 'third'];

const fullNames = names.map(function(name) {
  return `${name} Atlas`;
})

// to ES6: use Fat arrow

const fullNames = names.map((name) => {
  return `${name} Atlas`;
})

// if only have one parameter and can use implicit return
const fullNames = names.map(name => `${name} Atlas`);

// using filter
const ages = [90,54,35,99,66]
const old = ages.filter(age => age >= 60);

// default function arguments
function calculateBill(total, tax = 0.13, tip = 0.15) 
const totalBill = calculateBill(100, undefined, 0.25);

// 19: Attribute selector:   
const items = document.querySelectorAll('[data-time]');

// 20: Convert node list to array:  
  // Select all the list items on the page and convert to array
  const items = Array.from(document.querySelectorAll('[data-time]'));
  // Filter for only the elements that contain the word 'flexbox'
  const filtered = items
    .filter(item => item.textContent.includes('Flexbox'))
    // map down to a list of time strings
    .map(item => item.dataset.time)
    // map to an array of seconds
    .map(timecode => {
      const parts = timecode.split(':').map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
    })
  
  // reduce to get total
  .reduce((runningTotal, seconds) => runningTotal + seconds,0)


//21 Template literals / template strings
  `My dog ${name} is ${age * 7}`

<script>
  const person = {
    name: 'Wes',
    job: 'Web Developer',
    city: 'Hamilton',
    bio: 'Wes is a really cool guy that loves to teach web development!',
  };
  
   const markup = `
    <div class="person">
      <h2>
        ${person.name}
        <span class="job">${person.job}</span>
      </h2>
      <p class="location">${person.city}</p>
      <p class="bio">${person.bio}</p>
    </div>
  `;
 
  document.body.innerHTML = markup;
</script>

// ES6 learning/syntax etc => 
https://github.com/wesbos/es6.io


// Focus: Javascript and Node (still just 20% of the 5 capacities which makes a great software engineer)
// be clear on all the stuff you need to know for JS.
// FS JS Senior dev role: 
// build tools for developer, not pretend user facing apps becuase of what the reason 
// to elevate yourself above, build tools for deveopers, build libraries for developers and he will blow away your interviewers
// tech resume: it will be read with. Must be dense with Software engineering content.  How/What/Why  - must present you in a season way
// find all technical components of your prior experience.
// must be a good story teller. 
// *** empowered by needing more experience. 
// Must be experience to USE solve actual problems.

// Asynchronicity: https://jsbin.com/hijijag/1/edit?js,console,output