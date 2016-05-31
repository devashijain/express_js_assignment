var express = require('express');
var router = express.Router();
// var jsonfile = require('jsonfile');
// var file = './public/json/movie_list.json';
 var fs = require('fs');
//app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie_List' });
  //res.send("Hello!");
  next();
});




router.get('/totalRecords',  function(req, res){

console.log("In the get reocrds method");
  var data= JSON.parse(fs.readFileSync('json/movie_list.json'));

  res.json(data.length);
  console.log(data.length);

});

router.get('/getJson', function(req, res){

console.log("Getting the json");
    var data= JSON.parse(fs.readFileSync('json/movie_list.json'));

    var count= req.param("count");

console.log(count);

 res.json(data[count]);
console.log("IN the index.js file" +data[count]);
});


router.get('/movieList', function(req,res){

var data= JSON.parse(fs.readFileSync('json/movie_list.json'));

for(var i=0; i<data.length; i++)
{


  if(data[i].Title=='No Strings Attached')

  {
      console.log("Yay, title matched");
    res.send(data[i].Title);
  }
}


});


module.exports = router;
