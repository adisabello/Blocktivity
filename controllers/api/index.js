const router = require('express').Router();
const peopleRoutes = require('./people-routes');
const userRoutes = require('./user-routes');


router.use('/people', peopleRoutes);
router.use('/users', userRoutes);


module.exports = router;