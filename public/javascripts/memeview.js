const user = require("../../models/user");

const commentFormElement = document.getElementById('comment-submit');
const commentInputElement = document.querySelector('#comment-form input');
const commentListElement = document.getElementById('comments-list');

commentFormElement.addEventListener('click', storeComment);

async function storeComment(event) {
  event.preventDefault();
  const memeID = event.target.getAttribute('memeid');
  const commentText = commentInputElement.value;
  console.log(commentText);
  console.log(event.target);
  console.log(event.target.getAttribute('memeid'));

}
// .replace(/^\s*/, '')