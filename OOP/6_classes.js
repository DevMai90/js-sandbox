// ES6 Classes
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

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  // Static methods - Methods in our class that we can use without instantiating an object
  // If we're using something specific to the object such as properties (title, author, and year) then we would not use a static method
  // DO NOT run static functions on the object. Run it on the actual class
  static topBookstore() {
    return 'Barnes and Noble';
  }
}

// Instantiate an object
const book1 = new Book('Book One', 'John Doe', '2009');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise('1900');
console.log(book1);
// DO NOT run static functions on the object. RUN IT ON THE ACTUAL CLASS
console.log(Book.topBookstore());
