// American mathematician named Haskell Curry
// CURRYING: 
function calcVolCuboid(l) {
    return function(b){
        return function(h){
            return l * b * h;
        };
    };
};

const calcVolCylinder = (r) => (h) => 3.14 * r^2 * h;

console.log('volume of cuboid: ',calcVolCuboid(4)(4)(4));
console.log('volume of cylinder: ',calcVolCylinder(100)(4));

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable