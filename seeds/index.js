const seedPeople = require('./people-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPeople();

  process.exit(0);
};

seedAll();
