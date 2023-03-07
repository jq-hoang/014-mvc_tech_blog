const router = require('express').Router();
const Post = require('../../models/Posts');

// CREATE new Post
router.post('/createPost', async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.UserID
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbPostData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  module.exports = router