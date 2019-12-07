// Additional nice to know items

// ARRAYS
// We usually create an array like this. This is just sugar over creating a new instance of the Array class
const friends = [];
// What's happening under the hood is this.
const friendsWithoutSugar = new Array();
console.log(friends);
console.log(friendsWithoutSugar);

// How do we get access to all of the methods? All of the methods are on the Array class' prototype!
// When we create a new instance of Array, we use the 'new' keyword which deledates to Array.prototype on failed lookups!
console.log(Array.prototype);

// This same logic applies to Object.prototype as well

// FINDING PROTOTYPES - use Object.getPrototypeOf(instance)
// Find prototype that the instance will delegate to on failed lookups
// Regardless of which pattern used to create an object. We can use Object.getPrototypeOf
function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

const leo = new Animal('Leo', 7);
// Returns prototype (object) with all the methods on it
const prototype = Object.getPrototypeOf(leo);
console.log(prototype);
// We can test this - Returns true
console.log(prototype === Animal.prototype);
// Take a close look at the prototype object that is returned. We have the three methods we defined, but JS automatically added a constructor property WHICH POINTS TO THE ORIGINAL FUNCTION OR CLASS THAT THE INSTANCE WAS CREATED FROM. Therefore we could also do leo.constructor
console.log(leo.constructor);
// This works because Animal will delete to Animal.prototype on failed lookups. leo doesn't have a constructor property so it delegates the lookup to the Animal.prototype which has constructor. In short: in leo ? no. In Array.prototype ? yes.

// Looping over every key
// FOR/IN LOOP INCLUDES PROTOTYPE. It loops over all ENUMERABLE PROPERTIES on both the object and its prototype.
// By default, any property added to the prototype is enumerable. Two solutions - 1) Make it that all prototype methods are non-enumerable or 2) only check for properties on the object itself using the hasOwnProperty property

// Includes prototype
// for (let key in leo) {
//   console.log(`Key: ${key}. Value: ${leo[key]}`);
// }

// hasOwnProperty is available on every object. Checks the actual object (not prototype) if it has the property and returns a boolean
for (let key in leo) {
  if (leo.hasOwnProperty(key)) console.log(`Key: ${key}. Value: ${leo[key]}`);
}

// Check is object is an instance of a class - instanceof()
// function User() {}
class User {}

// Note, lowercase instanceof
console.log(Animal.prototype);
console.log(Object.getPrototypeOf(leo));
console.log(leo instanceof Animal); // Returns true
console.log(leo instanceof User); // Returns false

// instanceof checks for presence of constructor.prototype in the object's prototype chain. leo instanceof Animal is true because Object.getPrototypeOf(leo) === Animal.prototype

// ARROW FUNCTIONS
// Arrow functions do not have their own 'this' keyword. As a result, they cannot be constructor functions. We cannot use the 'new' keyword. Since we can't use 'this', arrow functions do not have a prototype
