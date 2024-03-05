// 1. Higher-Order Functions (HOFs)

// A higher-order function is a function that:
// Takes one or more functions as arguments. 
// These arguments are often referred to as callback functions.

// 2. Callback Functions:
// Passed as an argument to another function.
// Expected to be invoked (called back) at some point within the outer function.

const add = (a, b, cb) => {
    let result = a+ b;
    cb(result);
};
add(2, 498, (val) => console.log('added: ', val));
