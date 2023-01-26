// import models
const Post = require('./Posts');
const User = require('./Users');
const Comment = require('./Comments');

// Post belongsTo User 
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
// **post must have user_id field as a foreign key**


// Posts have many Comments.
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})

// Comment belongsTo User 
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
// when using belongsto foreign key is whatever is in front of belongsTo. 
// hasmany is whatever is after 'hasmany.'


module.exports = {
  Post,
  User,
  Comment,
};

// User has many posts
// post belongs to a user 
// a post can have many comments 
// each comment, belongs to a user