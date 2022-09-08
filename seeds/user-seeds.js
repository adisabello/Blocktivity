const { User } = require('../models');

const userData = [
  {
    username: 'admin',
    password: "admin"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
