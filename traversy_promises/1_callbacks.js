// Async code flows like synchronous code
// Async functions always return a promise
// Async functions process things in sequence. Promise.all can do everything concurrently

/*
Inside a function marked as async, you are allowed to place the await keyword in front of an expression that returns a promise.
When you do, the execution of the async function is paused until the promise is resolved
Asynchronous code allows us to write code that flows like synchronous code

Brad
While something is going on, but you don't want to wait until that thing is done to continue your program. You want to continue while it's happening. You want it to be asynchronous
- Very important to JS because we're often making requests to servers elsewhere that may take a while to get your data back. You don't want your program to stall while you wait for that data to come back
*/

/* 
- Callbacks were the way to write aysnchronous code until ES6 came out with Promises
- ES7 - async/await
*/

// CALLBACKS
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  // Mimic retrieving from the server
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('display').innerHTML = output;
  }, 1000);
}

// Mimic posting to server
// Takes in a callback
function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    // Run callback. This will run all the code before it is completed.
    // In this case, we'll fire off getPosts
    callback();
  }, 2000);
}

// Where is post three?
// getPosts finishes before createPosts. Our server returned it and the DOM was already painted! This is where asynchronous programs come in.

// getPosts();
// createPosts({ title: 'Post Three', body: 'This is post three' });

// With callback
createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);
// Note, no parentheses. It is a function REFERENCE
// Had to wait for createPosts code to finish BEFORE running getPosts (the callback function we passed in!)
