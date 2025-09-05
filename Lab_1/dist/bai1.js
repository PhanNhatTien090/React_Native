"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(this);
    }
}
exports.Person = Person;
const person1 = new Person("Phan Nhat Tien", 22);
person1.displayInfo();
