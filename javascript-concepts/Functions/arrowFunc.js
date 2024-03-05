// Differnce between tradinational funtions and arrow functions

// 1. Syntax
function myTradinational() {
    console.log('Function:',new Date().toISOString());
    
    return console.log(arguments);
};
myTradinational("traditional func has access to arguments");

const myArrowFunc = (a,b) => { // parameters
    console.log('Arrow:',new Date().toISOString());
    return console.log('divide: ',a / b)
};
myArrowFunc(100, 5); // arguments

// 2. 'arguements' keyword
const addNum = (...nums) => {
    // arguments can be accessed using spread operators
    console.log(nums); // return array
    myObj = {
        myName: "mango",
        king: "of fruits",
        season: "summer"
    };
    console.log(myObj); // returns object
};
addNum(10,23,45,67,89,32,56);

// 3. Hoisting
// traditional funtiona ko phele call kr skte hai decalartion se baad bhi kr skte hai
// but not in arrow function

// sub(2, 6); 
// ReferenceError: Cannot access 'sub' before initialization

const sub = (a,d) => {
    return console.log('sub: ',a - d);
};
sub(2, 6);

// 4. this keyword
// cant be accessed in arrow functions

const fruit = {
    myName: "watermelon",
    king: "not king",
    season: "summer",
    seed: true,
    drink: function() {
        console.log(this, this.myName) 
        // { myName: 'watermelon' drink: [Function: drink] }
    }
};
fruit.drink(); 

const fruit1 = {
    myName: "mango",
    king: "of fruits",
    season: "summer",
    seed: true,
    drink: () => {
        console.log(this) // {}
    }
};
fruit1.drink(); 