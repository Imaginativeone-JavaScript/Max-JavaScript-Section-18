const listElement  = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
// Posts are only available in the onload anonymous function

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.responseType = 'json'; // Parses the json in advance

xhr.onload = function() {

  const listOfPosts = JSON.parse(xhr.response);
  // const listOfPosts = xhr.response;

  console.log(listOfPosts); // JavaScript Array
  console.log(xhr.response);

  for (const post of listOfPosts) {
    
    const postEl = document.importNode(postTemplate.content, true); // true: deep clone
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent  = post.body;
    listElement.append(postEl);
  }

}

xhr.send();

// Data shows up in the Developer Tools NETWORK tab