/*
- We don't always have all of the data that we need for our website upfront.
- We've invented patters to handle and fetching external data for our apps.
- Callbacks -> Promises -> Async/Await.
*/

// FUNCTION REFRESHER
// Think of a function as a functional machine
function add(x, y) {
  return x + y;
}

// Anyone can use the machine. We create references to the machine. Note, the lack of paranthesis
const me = add();
// console.log(me);
console.log(me(4, 5));
