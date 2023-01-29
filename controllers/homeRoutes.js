const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Post, User, Comment} = require("../models/index")
const moment = require('moment');


// Send over the 'loggedIn' session variable to the 'homepage' template
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
  Post.findAll({ include: [User, {model: Comment, include: [User]}] }).then((post) => {
    const formattedPost = []
    const formattedComment = []
    for (let i = 0; i < post.length; i++) { 
      const currentPost = post[i].get({plain: true});
      console.log('currentPost ~>', currentPost);
      currentPost.formattedDate = moment(currentPost.date_created).format(`MMMM DD, YYYY [at] h:mm a z`);
      formattedPost.push(currentPost);
      formattedComment.push(currentPost.comments);
    }
    res.render('posts', {formattedPost, formattedComment})
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
router.get("/posts", withAuth, async (req, res) => {
  try {
    res.render('input', { loggedIn: req.session.loggedIn });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
  });




module.exports = router;

