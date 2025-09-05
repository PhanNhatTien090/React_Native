import { Person } from "./bai1";

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); 
    this.grade = grade;
  }

  displayAllInfo(): void {
    console.log(`ten: ${this.name}, tuoi: ${this.age}, lop: ${this.grade}`);
  }
}


const student1 = new Student("Phan Nhat Tien", 22, "A");
student1.displayAllInfo();
