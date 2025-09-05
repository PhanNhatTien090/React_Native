class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  showInfo(): void {
    console.log(`tieu de: ${this.title}`);
    console.log(`tac gia: ${this.author}`);
    console.log(`nam: ${this.year}`);
  }
}

const book1 = new Book("Cho Toi Mot Ve Di Ve Tuoi Tho", "Nguyen Nhat Anh", 2014);
book1.showInfo();
