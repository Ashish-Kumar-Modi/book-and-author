var express = require('express');
var router = express.Router();
const userModel = require('./users')
const bookModel = require("./book")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/createAuthor', function(req, res){

  console.log(req.body.name);
  console.log(req.body.username);
  console.log(req.body.password);

  userModel.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password

  }).then( function( authorCreateHogaya){

    bookModel.create({
       bookName: "RD SHARMA",
       authorid: authorCreateHogaya._id

    }).then( function (bookCreateHogaya){

      authorCreateHogaya.books.push( bookCreateHogaya)
      authorCreateHogaya.save()
      .then( function(saved){

        res.send({ authorCreateHogaya, bookCreateHogaya })

      } )
    })

  })

})


module.exports = router;
