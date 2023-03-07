const submitBtn = document.getElementById('submit') // login button

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const login_password = document.getElementById('login-password').value
    const login_email = document.getElementById('login-email').value

    console.log('TESTING!');
    console.log('login_email ~>' ,login_email);
    console.log('login_password ~>' ,login_password);


  fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({login_email, login_password}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }).then(() => {
    document.location.replace('/posts');
    }).catch((err) => {
      console.log(err);
    })
}) 

// how come this javascript is only adding the login info to the URL? 

// ==============================================================================
// SIGN UP FUNCTIONALITY BELOW 
// ==============================================================================


const form = document.getElementById('sign-up-form');
console.log(form);
console.log(document);
// Adding a submit listener to the form
form.addEventListener('submit', (e) => {
  // Preventing the default submission behavior
    e.preventDefault();

  // Get the form data
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  // Send the POST request to the API with the user data
  fetch('/api/users/createUser', { // where to post this sign up user info to? How do i get it to the database? 
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers: {
      'Content-Type': 'application/json', // do i need to change this application/json? 
      'Accept': 'application/json',
    }
  }).then(() => {
    document.location.replace('/posts');
    }).catch((err) => {
      console.log(err);
    })
});
