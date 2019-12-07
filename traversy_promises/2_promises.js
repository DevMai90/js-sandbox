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

// getPosts();
// .then tells us what to do when we successfully resolve
// .catch tells us what to do when we have an error
// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(err => console.log(err));

// What if we have a lot of promises? We don't want to keep using .then() Use promise.all
// PROMISE.ALL
const promise1 = Promise.resolve('Hello Wolrd');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});
// fetch returns a promise. We need two .then because it needs to be formatted to json and the next .then gives the actual data

// Takes in an array of promises
// Will not return anything until the last promise is completed
Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
