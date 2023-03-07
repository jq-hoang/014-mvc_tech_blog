const newPostForm = document.querySelector('#new-post-form');
const submitPostBtn = document.querySelector('#submit-post-btn');

submitPostBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#new-post-title').value;
  const description = document.querySelector('#new-post-description').value;

  fetch('/api/post/createPost', {
    method: 'POST',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('Post created successfully');
      window.location.reload();
    } else {
      console.log('Error creating post');
    }
  })
  .catch(err => {
    console.log(err);
  });
});
