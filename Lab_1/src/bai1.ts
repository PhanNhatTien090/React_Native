export class Person {

  constructor(
    public name: string, 
    public age: number
) {}

  displayInfo(): void {
    console.log(this);
  }
}

const person1 = new Person("Phan Nhat Tien", 22);
person1.displayInfo();
