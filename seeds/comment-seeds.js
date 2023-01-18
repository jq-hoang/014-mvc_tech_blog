const { Comment } = require('../models');

const commentData = [
    {
      "comment": "A mobile app that will send you notifications whenever a concert is playing in your area sounds amazing!.",
      "date_created": "Jan. 17, 2023",
      "post_id": "1",
      "user_id": "1"
    },
    {
      "comment": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more sounds amazing!",
      "date_created": "Jan. 17, 2023",
      "post_id": "2",
      "user_id": "1"
    },
    {
      "comment": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes is just what I need!",
      "date_created": "Jan. 17, 2023",
      "post_id": "3",
      "user_id": "1"
    }
  ];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;