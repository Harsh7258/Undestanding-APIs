class Car {
    constructor(model, year, modified){
        this.mod = model;
        this.yr = year;
        this.modified = modified;
    }
    purchase() {
        console.log(`Class Car working! want to buy ${this.mod} of ${this.yr} to be modified: ${this.modified}`);
    }
}

const buy = new Car("cruze", "2016", true);
buy.purchase();

class Company extends Car {
    constructor(model, year, brand) {
        super(model, year); // accessing the model, year: allows you to call methods from a parent class within a child class
            this.brand = brand
    }
    loan() {
        console.log(`take loan for ${this.brand} ${this.mod} of ${this.yr} Car`);
    }
}

const buyOnLoan = new Company("cruze", "2017", "chervelot");
buyOnLoan.loan();