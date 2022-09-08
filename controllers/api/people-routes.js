const router = require('express').Router();
const { People } = require('../../models');

router.get('/', (req, res) => {
  People.findAll({
    
  }).then(response =>{
    // console.log(response);
    res.render('people', {people: response})
  }).catch(err =>{
    console.log(err);
  })
});

router.get('/get_all', (req, res) => {
  People.findAll({
    
  }).then(response =>{
    res.json(response);
  }).catch(err =>{
    console.log(err);
  })
});

router.get('/post', (req, res) => {
  var fname = req.query.fname;
  var lname = req.query.lname;
  var email = req.query.email;
  var gender = req.query.gender;
  var age = req.query.age;
  
  People.create({
    firstName: fname,
    lastName: lname,
    email: email,
    gender: gender,
    age: age
  })
    .then((category) => {
      res.redirect('/people');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  People.destroy({
    where:{
      id: id
    }
  }).then(response =>{
    res.redirect('/people');
  }).catch(err=>{
    res.status(400).json(err)
  });
});

module.exports = router;
