// Constructor (ES5)

// Constructors are functions that help make objects. Note the uppercase name to distinguish it
// Constructor functions can take in arguments
function Book(title, author, year) {
  // this refers to the context we're using. In this case it is an implicit binding to the instantiated object
  this.title = title;
  this.author = author;
  this.year = year;

  console.log('Book instantiated...');
  // console.log(this);

  // We can add functions as a property. However, the better practice is to add method to the object's prototype. See next section
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiated an Object - Make a new Book object with 'new' keyword
// Will run everything inside of the above constructor which is why our console.log runs immediately
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '1999');

// Console logging it will still return an object, but now it is prefixed with the constructor name 'Book'
console.log(book1);
console.log(book2);

console.log(book1.getSummary());
console.log(book2);
