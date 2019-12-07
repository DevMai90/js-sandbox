// Constructor (ES5)

// Constructors are functions that help make objects. Note the uppercase name to distinguish it
// Constructor functions can take in arguments
function Book(title, author, year) {
  // this refers to the context we're using. In this case it is an implicit binding to the instantiated object
  this.title = title;
  this.author = author;
  this.year = year;

  // We can add functions as a property. We're adding it as a prototype method
  // this.getSummary = function() {
  //   return `${this.title} was written by ${this.author} in ${this.year}`;
  // };
}

// getSummary as a prototype method
// Get constructor function name
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge as a prototype method
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year - prototype method
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiated an Object - Make a new Book object with 'new' keyword
// Will run everything inside of the above constructor which is why our console.log runs immediately
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '1999');

// Console logging it will still return an object, but now it is prefixed with the constructor name 'Book'
// console.log(book1);
// console.log(book2);

// Calling the method we added to then object's prototype
console.log(book1.getSummary());

// getSummary no longer appears as an object property, but appears as a method on its prototype
console.log(book1);
console.log(book2);

console.log(book2.getAge());
console.log(book2);
book2.revise('2019');
console.log(book2);

// We preferred to add getSummary() to the object's prototype because we do want title, author, and year for each book, but we only want
// getSummary() for some books. Now we can use the objects as is and it won't be populated with an unnecessary function
