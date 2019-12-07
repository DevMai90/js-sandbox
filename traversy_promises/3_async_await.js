// Async Await is just a different way to HANDLE RESPONSES. It is NOT another way to write requests

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('display').innerHTML = output;
  }, 1000);
}

// Do not need to pass in a callback function. This returns a promise!
function createPost(post) {
  // Call resolve when the promise is successfully resolved. Call reject if something goes wrong
  // We'll mostly be dealing with the response rather than creating a promise ourselves.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // Normally put error handling here. Like a try/catch block
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// ASYNC/ AWAIT
// Wait for an asynchronous action to complete
async function init() {
  // We're waiting for this to be done before anything else below can happen
  // If it never gets completed then getPosts() doesn't run
  await createPost({ title: 'Post Three', body: 'This is post three' });

  getPosts();
}

// init();

// Async await with fetch
// Remember fetch API is weird because it returns ANOTHER promise that has to be formatted for us
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUsers();
