const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Post, User} = require("../models/index")
const moment = require('moment');


// Send over the 'loggedIn' session variable to the 'homepage' template
// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/home", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/posts', (req, res) => {
  Post.findAll({ include: User }).then((post) => {
    const formattedPost = [] // creates an empty array called 'formattedPost'
    for (let i = 0; i < post.length; i++) { // starts a for loop
      const currentPost = post[i].get({plain: true}); //creates a constant named 'currentPost' which converts each post's information into plain text. 
      currentPost.formattedDate = moment(currentPost.date_created).format(`MMMM DD, YYYY [at] h:mm a z`); // creates a new property on currentPost with a formatted time 
      formattedPost.push(currentPost); // pushes the converted post's information along with the formatted date into the 'formattedPost' array. 
    }
    res.render('posts', {formattedPost}) // renders the view 'posts' and passes the formattedPost array as a variable allowing HBS to access it. 
  });
});





router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sign-up", async (req, res) => {
  try {
    res.render("sign-up");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// const input = session.get({ plain: true });
// Send over the 'loggedIn' session variable to the 'gallery' template
router.get("/input", withAuth, async (req, res) => {
  try {
    res.render('input', { loggedIn: req.session.loggedIn });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
  });




module.exports = router;

