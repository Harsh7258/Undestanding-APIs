class Circle {
    constructor(radius){
        this._radius = radius; // _ used to show the property is private
    }
    get area() {
        return Math.PI * this._radius * this._radius;
    } // Getters: Getter methods are invoked when you try to access a property like object.propertyName. They allow you to perform operations before returning the property value (e.g., data validation, formatting).
    
    set cRadius(value) {
        if (value <= 0) {
          throw new Error("Radius cannot be negative or zero");
        }
        this._radius = value;
    } // Setters: Setter methods are called when you assign a value to a property like object.propertyName = value. They enable you to control how the property is set (e.g., data validation, side effects).
}

const myCircle = new Circle(5);
console.log(myCircle.area)
// console.log(myCircle.cRadius = -10); 
//Error: Radius cannot be negative or zero

class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name.toUpperCase(); // Getter - return name in uppercase
    }
  
    set name(newName) {
      if (newName.length < 3) {
        throw new Error("Name must be at least 3 characters long");
      }
      this._name = newName;
    }
  }  

const myName = new Person('harsh');
console.log(myName.name);
// console.log(myName.name = 'ha')