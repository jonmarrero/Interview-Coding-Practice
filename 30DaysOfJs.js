// Closures 

// Question 1
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";    
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


// Question 2
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        // this will return 10 and then will return 11 then 12 etc because we are incrementing 10 by using "n++"
        return n++; 
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


// Question 3
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    // each function is defined to the methods we've created 
    return {
        increment: increment,
        decrement: decrement, 
        reset: reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// Basic Array Transformations

// Question 4 

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Solved Using Array.Map method 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map(fn);
};

// Solved using a for loop 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
// passing a function into another function is an example of strategy design pattern 


    // of will iterate every value in the array 
    for (const i in arr) {
        // push is how you append to the end of an array
        res.push(fn(arr[i], Number(i)));
    }
    // return the result 
    return res;
};


// Question 5 

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// solved using the array.filter method 

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // declaritive programming 
    return arr.filter(fn);
};

// solved without using array.filter method 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // imperative programming
    for (const i in arr) {
        // iterate through the array to see if the variable meets the statement 
        if (fn(arr[i], Number(i))) {
            res.push(arr[i])
        }
    }
    return res;
};