// ES6 Subclasses - Much easier than using inheritance!
class Book {
  // Everything in the constructor runs immediately
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Gets added to prototype!!! Not property!!
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass
// Make a Magazine class that will have everything Book has plus month
class Magazine extends Book {
  constructor(title, author, year, month) {
    // In order to call the parent constructor, use super
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine - Also has access to methods
const mag1 = new Magazine('Mag1', 'John Doe', '2018', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());
