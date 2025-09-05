class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`hang: ${this.brand}, mau: ${this.model}, nam: ${this.year}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2022);
car1.showInfo();
