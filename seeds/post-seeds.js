const { Post } = require('../models');

const postData = [
    {
      "Title": "Music Near Me",
      "description": "A mobile app that will send you notifications whenever a concert is playing in your area.",
      "date_created": "Jan. 17, 2023",
      "id": "1",
      "user_id": "1"
    },
    {
      "Title": "The Ultimate Tech Quiz",
      "description": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
      "date_created": "Jan. 17, 2023",
      "id": "2",
      "user_id": "1"
    },
    {
      "Title": "Roll 'Em Up",
      "description": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
      "date_created": "Jan. 17, 2023",
      "id": "3",
      "user_id": "1"
    }
  ];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
