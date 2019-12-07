// Object of Protos - Create an object of our prototypes (containing methods that we want to use)
// We've been basically doing the same things, but in a different way
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create the object - Create an empty object with our prototypes
const book1 = Object.create(bookProtos);

// Add the object properties
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2009';

console.log(book1);

// Another way is to pass in an object of properties with property values
const book2 = Object.create(bookProtos, {
  title: { value: 'Book Two' },
  author: { value: 'Jane Doe' },
  year: { value: '2000' }
});

console.log(book2);

// This method is very cumbersome and not very good for reusability. Try not to use it
