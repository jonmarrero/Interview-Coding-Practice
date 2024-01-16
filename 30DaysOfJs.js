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

// Question 6 

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// Solved using the array.reduce method 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};


// solved using a for loop 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // our result is going to be whatever the initial value is thats passed in 
    let res = init;

    // now we want to go through every number in the array 
    for (const n of nums) {
        // for each value we want to call that function and then update our result
        // I want to pass in the res into the function because i want to add the previous result for each iteration through the array 
        res = fn(res, n)
    }
    // return the result 
    return res;
};


// solved using a for.each function 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;

    // for.each function iterates through each number in the array so I create the function and then pass n as the parameter to hit each number in the array 
    nums.forEach((n) => {
        // update our result so we can set it to the function being called 
        res = fn(res, n)
    });
    // return the result 
    return res;

};