// How Closures Work:

// Function Creation: When you define a function in JavaScript, it creates a closure. This closure includes the function's code and a reference to its lexical environment.
// Lexical Environment: The lexical environment is a collection of variables and functions that were in scope at the time the function was created. It forms the context in which the function operates.
// Accessing Variables: Even after the outer function has finished executing, the inner function can still access variables from its lexical environment. This is because the closure holds a reference to this environment.

function createCounter() {
    let counter = 0; // This variable is in the lexical environment of the inner function

    function increment() {
        counter++; // Inner function can access and modify `counter`
        return counter;
    }

    return increment; // returns inner funtion
};

const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
