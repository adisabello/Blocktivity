const router = require('express').Router();
const apiRoutes = require('./api');
const loggedIn = require('./middleware/auth')

router.use('/api', apiRoutes);

router.get('/loginPage', (req, res)=>{
  res.render('login');
});

router.get('/registerPage', (req, res)=>{
  res.render('register');
});

router.get('/login', (req, res)=>{
  res.redirect('/api/users/login');
});

router.get('/register', (req, res)=>{
  res.redirect('/api/users/register');
});

router.get('/logout', (req, res) =>{
  req.session.destroy();
  res.clearCookie('sid')
  res.redirect('/loginPage');
});

router.get('/people', loggedIn, (req, res) =>{
  res.redirect('/api/people/');
});

router.get('/teams', loggedIn, (req, res) =>{
  res.render('teams');
});

router.get('/', (req, res) => {
  res.redirect('/loginPage')
});

module.exports = router;