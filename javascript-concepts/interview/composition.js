// Function composition

// Inheritence
class Pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }

    prepare() { console.log('Preparing...') }
    bake() { console.log('Baking...') }
    ready() { console.log('Ready!') }
}

// inherit pizza
class stuffedCrustPizza extends Pizza {
    stuff() { console.log('Stuffing the crust...') }
}

// inherhit pizza
class butteredCrustPizza extends Pizza {
    butter() { console.log('Buttering the crust...') }
}
const myPizza = new stuffedCrustPizza();
myPizza.stuff();
// myPizza.prepare();
// myPizza.bake();
// setTimeout(() => myPizza.ready(), 1000);

// And now here's a BETTER way with composition below: 
// Create all of the methods as separate functions
const prepare = () => {
    return {
        prepare: () => console.log('Preparing...')
    }
}

const bake = () => {
    return {
        bake: () => { console.log('Baking...'); return [1, 2, 3] }
    }
}

const toss = () => {
    return {
        toss: () => console.log('Tossing...')
    }
}

const ready = () => {
    return {
        ready: () => console.log('Ready!')
    }
}

const stuff = () => {
    return {
        stuff() { console.log('Stuffing the crust...') }
    }
}

const butter = () => {
    return {
        butter() { console.log('Buttering the crust...') }
    }
}

// Use composition to add the methods to the objects 
// You are never defining the same method twice!

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}

const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);

const davesSalad = createSalad("side", "ranch");

davesPizza.bake();
console.log(davesPizza.bake().reverse()); //chaining
davesPizza.stuff();
davesSalad.prepare();
console.log(davesPizza);
console.log(davesSalad);
  
// another example..
function fullNameToUpper(firstName, lastName) {
    function toUpper(str) {
      return str.toUpperCase();
    }
    return `${toUpper(firstName)} ${toUpper(lastName)}`;
  }

const name12 = fullNameToUpper('harsh', 'naidu');
console.log(name12)