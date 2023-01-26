const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Post, User} = require("../models/index")
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
  // Retrieve the data from the database
  Post.findAll({ include: User }).then((post) => {
    // console.log(post[0].get({plain: true}))
  
    const formattedPost = []

    for (let i = 0; i < post.length; i++) {
      formattedPost.push(post[i].get({plain: true}))
      console.log('post[i].get({plain: true} ~>', post[i].get({plain: true}))
      
    }

    console.log('formattedPost ~>', formattedPost);
    res.render('posts', {formattedPost})


    // console.log('post ~>', post);
    // Pass the data to the view
    // res.render('posts', { post });
    // console.log('post ~>', post)
    // const TEST_VARIABLE = post
    // console.log('TEST_VARIABLE[0] ~>', TEST_VARIABLE[0]);
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

