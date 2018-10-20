function Stopwatch() {
  let duration = 0,
    start = false;

  this.start = function() {
    if (!start) {
      duration = new Date().getTime();
      start = true;
    }
  };
  this.stop = function() {
    if (start) {
      duration = new Date().getTime() - duration;
      start = false;
    }
  };
  this.reset = function() {
    duration = 0;
    start = false;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      let timer = duration / 1000;
      return timer;
    }
  });
}

const posts = [
  { title: "Bharath", desc: "This Title From Bharath" },
  { title: "Sanav", desc: "This Title From Sanav" }
];
let output = "";
function getPosts() {
  return new Promise((resolve, reject) => {
    let err = false;
    setTimeout(() => {
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      resolve(output);
    }, 1000);
  });
  //return output;
}
console.log("test-before", output);
// getPosts()
//   .then(data => console.log("test", data))
//   .catch(err => {
//     console.log(err);
//   });
// console.log("test-afer", output);

//async await

async function init() {
  const data = await getPosts();
  console.log("asnc await", data);
}

init();
console.log("test-afer", output);
