const { People } = require('../models');

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@mail.com",
    gender: "Male",
    age: 27
  },
  {
    firstName: "Mary",
    lastName: "Doe",
    email: "mdoe@mail.com",
    gender: "Female",
    age: 25
  },
  {
    firstName: "Albert",
    lastName: "Einstein",
    email: "alei@mail.com",
    gender: "Male",
    age: 30
  },
  {
    firstName: "Whitney",
    lastName: "Burgess",
    email: "whbu@mail.com",
    gender: "Female",
    age: 24
  },
  {
    firstName: "Mary",
    lastName: "Meinz",
    email: "mame@mail.com",
    gender: "Female",
    age: 33
  },
  {
    firstName: "Gustav",
    lastName: "Gistaad",
    email: "gugi@mail.com",
    gender: "Male",
    age: 32
  }
];

const seedPeople = () => People.bulkCreate(data);

module.exports = seedPeople;
