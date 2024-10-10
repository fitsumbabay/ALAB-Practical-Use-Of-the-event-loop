
//Declare a global counter variable.
let counter = 0;
// Create a simple function that increments the variable, and then calls itself recursively.
function increment() {
   // console.log("Hi", counter)
    counter++;
    increment()
}

// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
try {
    increment()
} catch (error) {
    console.log(error, counter)
}

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

const data = [[1,2,3],[4,[5,6]],[[7],[8,[9]],]]

function flatten(arr) {
  let flattend = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattend = flattend.concat(flatten(arr[i])); // Recursive call
    } else {
      flattend.push(arr[i]);
    }
  }
  return flattend;
}

console.log(flatten(data))

const trampoline = (f, ...args) => {

  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}



// function trampoline(fn) {
//     let flattend = fn()
//  while (typeof flattend === "function") {
//    flattend = flattend();
//  }
//  return flattend;
// }
//const results = trampoline(() => increment(2));
//console.log(results);

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
const PrimeContainer = document.querySelector("#PrimeContainer");


function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Usage
const number = 17;
console.log(`${number} is prime:`, primeNumber(number));

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
function addPrimes(n) {
  let primes = [];
  for (let i = 1; i <= n; i++) {
    if (primeNumber(i)) {
      primes.push(i);
    }
  }
  PrimeContainer.textContent = `Prime numbers between 1 and ${n}: ${primes.join(
    ", "
    )}`;
    // Once complete, use the alert() method to alert the user that the calculation is finished.
  alert("Calculation is finished!");
}

setTimeout(() => {
  addPrimes(10000);; 
}, 5000); //

