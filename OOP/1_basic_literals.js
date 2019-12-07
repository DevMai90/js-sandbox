// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    // Refers to this specific object
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

// console.log(book1);
// console.log(book1.title);
// Note the context. Context is implicitly binded to book1 object
// console.log(book1.getSummary());

// Can retreieve list of object keys and values
// console.log(Object.keys(book1));
// console.log(Object.values(book1));

// What if we wanted to create multiple objects? We can copy the book1 object

// What a pain. We can use constructors as a blueprint to create new objects with similar properties and methods
