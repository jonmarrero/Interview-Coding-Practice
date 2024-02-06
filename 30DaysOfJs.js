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


// Function Transformations 

// Question 7 
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // I want to go through the list of functions in reverse order 
        // for every function of the list of functions we want to apply them to the value x  
        for (const fn of functions.reverse()) {
        // and then accumlate them in reverse order 
            x = fn(x);
        }
        // return the value of x 
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Question 8 

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */

// the once function is taking in a single parameter that is another function  and then returning another function as the result once is called making it a higher order function 
var once = function(fn) {
    // using closure, i created a boolean to let me know when the function is called 
    let called = false;

    return function(...args){
        // if the called is true then we return undefined and we dont want to call it again 
        if (called) {
            return undefined;
        }
        // otherwise, we do want to call it again using the spread operator 
        called = true;
        // return the calculated value 
        return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


// Question 9 

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

/**
 * @param {Function} fn
 */

// we have this wrapper function that is going to add content or add functionality to whatever function we pass in 
function memoize(fn) {
    // create a state to call the function, i made it a const because its going to be an object 
    const cache = {};

    // the ...args is an arbitruary number of paramater 
    return function(...args) {
        // JSON takes an object and converts it into a string to then we can use as a key in our hash map
        const key = JSON.stringify(args);
        // now we check if the key already inserted in our cache 
        if (key in cache) {
            // if it is then we simply return the key in the cache 
            return cache[key];
        } 
        // if its not then we compute it so the cache equals the function and then return the key in they cache 
        cache[key] = fn(...args);
        return cache[key];
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


//  Promises and Time 
//  QUestion 10 

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        //  return a promise 
        return new Promise((resolve, reject) => {
            // pass in a method that calls reject 
            // we are telling setTimeout to execute this code on this amount of time 
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
            // use .then that accepts a function to get the result of fn(..args) 
                .then((res) => resolve(res))
                // there might be an error thrown so we want to catch it and call reject to catch the error 
                .catch((err) => reject(err))
        // run a cleartimeout function to stop the execution of the setTimeout function after the called period of time 
        // .finally is a promise that handles the clearTimeout for us 
                .finally(() => clearTimeout(id));
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


// Question 11 

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

var TimeLimitedCache = function() {
    
    this.cache = new Map();

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // if the key already exist then return true, if it doesnt then return false
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
        // clear the timeout 
        clearTimeout(alreadyExists.timeoutId);
    }

    // add the key 
    const timeoutId = setTimeout(() => {
        // delete the key
        this.cache.delete(key);
    }, duration);
    this.cache.set(key, {value, timeoutId});
    return Boolean(alreadyExists)
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
//if this cache has this key inside of it then go ahead and return this cache to get the key and if it doesn't then return -1 by defualt
    if (this.cache.has(key))
        return this.cache.get(key), value;
        return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// solved using a class

class TimeLimitedCache {
    cache = new Map();

    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId);
        }
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, {value, timeoutId});
        return Boolean(alreadyExists)
    };

    get(key) {
        if (this.cache.has(key))
            return this.cache.get(key).value;
            return -1;
    };

    count(){
        return this.cache.size;
    }
}


// Question 12 

// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var debounce = function(fn, t) {
    // create a variable 
    let id;
    return function(...args) {
        // we want to call the fn function after t timeoout so we setTimeout 
        // clear the timeout 
        clearTimeout(id)
        id = setTimeout(() => fn(...args), t);
          
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Question 13 

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // create a callback we are passing into the promise 
    function callback(resolve, reject) {
        // setTimeout to solve resolve 
        setTimeout(resolve, millis);
    }
    
    // return the proomise 
    return new Promise(callback);
}

// asychronous function will return a promise and promises will resolve to a value at some point 

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


// JSON Problems 
// Question 14 

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    // declare output result 
    const res = [];
    // declare a sub array with let so we can re-assign it 
    let subarr = [];
    // go through each element in the array with an iterator a pointer i and then increment the pointer by 1 
    for (let i = 0; i < arr.length; i++) {
        // push each element to the sub array 
        subarr.push(arr[i]);
        // if the sub array reaches the length of the array then we want to flush it for a result 
        if (subarr.length === size) {
            // append it to the result 
            res.push(subarr);
            // then re-assign the sub array to clear it 
            subarr = [];
        }
    }
    // if the sub array is non empty we need to check it 
    if (subarr.length) {
      // if it is then we want to push the result to the sub array 
        res.push(subarr);   
    } 
    // then return the result 
    return res;
};


// Question 15 

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};
    // group by keys 
    // call fn on each element in input array by using this key word 
    for (const obj of this) {
        const key = fn(obj);
        // if the result of the key already exist then it will stay as it is, if it is falsey it will return undefined and show the result as an empty array 
        res[key] = res[key] || [];
        // this key is already mapped to some array so we want to push onto that array with the obj 
        res[key].push(obj)
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


// Question 16

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];

    function helper(arr, depth) {
        // iterate through all values with a for of loop
        for (const val of arr) {
            if (typeof val === 'object' && depth < n) {
                helper(val, depth + 1)
            } else {
                res.push(val);
            }  
        }
        return res;
    }
    // return value of helper function 
    return helper(arr, 0);
};


// Question 17 

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // check if the lenght is zero 
    if (this.length) {
        // use this key word to refer to the array and length
        return this[this.length - 1];
    }
    // other wise return -1 by default 
    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


// Question 18 

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(v) => {
            if (v === val) return true;
            else throw new Error("Not Equal"); 
        },
        notToBe:(v) => {
            if (v !== val) return true;
            else throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


// Question 19 

// Write a function argumentsLength that returns the count of arguments passed to it.


/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        count++
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


//  Question 20

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise (async (res, rej) => {
        // promise1.then((val1) => {
            // promise2.then((val2) => res(val1 + val2))
        // })

        const sum = await Promise.all([promise1, promise2]); //[2, 5]
        // res(sum[0] + sum[1]);
        let ans = sum.reduce((acc, currVal) => acc + currVal);
        res(ans);
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Question 21

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args)
    }, t);
    const cancelFn = function(){
        clearTimeout(timer)
    }
    return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */


// QUestion 22 

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    const intervalTimer = setInterval(() => {
        fn(...args)
    }, t);
    const cancelFn = () => clearInterval(intervalTimer)
    return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */


//  Question 23

// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise(async (res, rej) => {
        let len = functions.length, ct = 0;
        const ans = new Array(len);
        functions.forEach(async (func, ind) => {
            try{
                let val = await func();
                ans[ind] = val;
                ct++;
                if (ct === len)
                    res(ans);
            }catch (err) {
                rej(err);
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */


// Question 24

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof(obj) == 'object') {
        return Object.keys(obj).length == 0;
    }else{
        return obj.length == 0;
    }
};


//  Question 25 

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((sum, num) => sum + num, 0);
}

ArrayWrapper.prototype.toString = function() {
  return '[' + this.nums.join(',') + ']';
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/

// QUestion 26 

// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {}
    // run a loop on the first array 
    for(let i = 0; i < arr1.length; i++) {
        // add the arra1 to id 
        result[arr1[i].id] = arr1[i]
    }
    // check to see if arr index id is inside of result and if true then re-iterate and if false then just plug it into result
    for (let i = 0; i < arr2.length; i++) {
        if(result[arr2[i].id]) {
            for(const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key]
        } else {
            result[arr2[i].id] = arr2[i]
        }
    }
    return Object.values(result)
};


//  Question 27 

// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

class EventEmitter {
    // use eventMap to take an event which is a string and map that to a list of callbacks 
    eventMap = {};

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // check if the event has the property 
        if(!this.eventMap.hasOwnProperty(eventName)) {
            this.eventMap[eventName] = new Set();
        }
        // given an event we want to add the callback to the set corresponding to this event 
        this.eventMap[eventName].add(callback);

        // this is returning an object that we want to call unsubscribe
        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // were always going to take that array of values and returning it 
        const res = [];
        // we take all the callbacks from this event to populate it 
        (this.eventMap[eventName] ?? [])
        // iterate through every callback and execute that callback 
            .forEach((callback) => res.push(callback(...args)))
        return res;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */