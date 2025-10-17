"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`ten: ${this.name}, tuoi: ${this.age}, lop: ${this.grade}`);
    }
}
const student1 = new Student("Phan Nhat Tien", 22, "A");
student1.displayAllInfo();
