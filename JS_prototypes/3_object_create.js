// OBJECT.CREATE
// Creates an object. If there is a failed property lookup then it can look at a different object to see if it has the property.
// Allows our object to always be up to date with our shared methods object

// Example
const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
};

// Here, we've created a new object. We've passed in an existing object.
// The existing object will be the new object's prototype
const child = Object.create(parent);
// Add some properties, note that we did not add a heritage property
child.name = 'Ryan';
child.age = 7;

// console.log(child);
// console.log(child.name);
// console.log(child.age);
// We did not add the heritage property. JS sees that it is missing so then it checks the new object's prototype to see if it exists and then calls it. Returns undefined if not on prototype as well
console.log(child.heritage);
// Returns the object's prototype which is the parent object
console.log(Object.getPrototypeOf(child));

// Note that inherited properties can be overwritten!!
// Also note that we can pass in an object of properties with properties values as a second argument to Object.create(). See OOP - 5_object_create for example

// FUNCTIONAL INSTANTIATION WITH SHARED METHODS AND OBJECT.CREATE
// Use Object.create to fall use our shared methods object as the prototype. This way it'll be available on all Animal objects

// Shared methods object
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
};

// Animal constructor function - Create new Animal objects
function Animal(name, energy) {
  // Use Object.create() to add prototype methods
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  // No longer needed. We've added the methods to the object's prototype
  // animal.eat = animalMethods.eat;
  // animal.sleep = animalMethods.sleep;
  // animal.play = animalMethods.play;

  return animal;
}

const animal1 = Animal('Leo', 7);
console.log(animal1);
// JavaScript sees if animal1 has the 'eat' method. Sees that it doesn't and searches the prototype that we passed in ('animalMethods') for the 'eat' method. Found it and executes
animal1.eat(5);
animal1.sleep(10);
animal1.play(10);
console.log(animal1);
// Returns prototype object
console.log(Object.getPrototypeOf(animal1));

// This is such a common pattern. 1) Having a shared methods object and a 2) constructor function where it is used
// Why not put each of these methods into the Animal constructor function's prototype?
