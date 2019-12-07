// Inheritance

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary - prototype method
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
// Create magazine object that inherits from Book constructor. Note that this method does not inherit the Book prototype
function Magazine(title, author, year, month) {
  // Calling upon the Book constructor. this refers to the context that we're calling which will be the new magazine object
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const magazine1 = new Magazine('Magazine 1', 'John Doe', '2008', 'Jan');

// Change magazine1 to use the Magazine constructor otherwise it is using the Book constructor
Magazine.prototype.constuctor = Magazine;

console.log(magazine1);
console.log(magazine1.getSummary());

// Shows how one object constructor can inherit from another constructor for reusability. This section was a little light. Dive deeper or look into the classes section?
