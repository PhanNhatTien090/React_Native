"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`hang: ${this.brand}, mau: ${this.model}, nam: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2022);
car1.showInfo();
