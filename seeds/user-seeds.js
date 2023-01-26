const { User } = require("../models");
const userData = [
  {
    name: "Sav",
    email: "sav@hotmail.com",
    password: "password12345",
    id: "1",
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
    id: "2",
  },
  {
    name: "Amiko",
    email: "CodeMiko2k20@aol.com",
    password: "password12345",
    id: "3",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
