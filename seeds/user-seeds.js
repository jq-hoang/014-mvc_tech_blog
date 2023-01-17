const { User } = require('../models');
category
const userData = [
    {
      "name": "Sav",
      "email": "sav@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Amiko",
      "email": "CodeMiko2k20@aol.com",
      "password": "password12345"
    }
  ];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;