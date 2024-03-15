// Factory functions are functions that create and return new objects. 
// They provide a central location to define the logic for object creation, promoting code reusability, maintainability, and flexibility.

function pizzaFactory(size) {
    const crust = 'original';
    const pizzaSize = size;
    return {
        bake: () => {
            console.log('Pizza Factory: ',`baking pizza size: ${pizzaSize}, crust: ${crust}`);
        }
    }
}

const myPizza = pizzaFactory("medium");
myPizza.bake()

//  the createUser factory function takes arguments for name and age and returns a new user object with those properties and a greet method. This promotes reusability and allows for creating users with different names and ages.

function createUser(name, age) {
    return {
      name: name,
      age: age,
      greet() {
        console.log('Greet User: ',`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
      }
    };
  }
  
const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);
  
  user1.greet(); // Hi, my name is Alice and I'm 30 years old.
  user2.greet(); // Hi, my name is Bob and I'm 25 years old.
  