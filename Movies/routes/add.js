var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');

router.post('/',function(request, respond) {
      var content=JSON.parse(fs.readFileSync('json/movie_list.json'));
//    jsonfile.readFile("./public"+"/"+"page.json",function(err,content){
    var obj = {};
    obj.Title=request.body.Title;
    obj.Poster="images/"+request.body.Poster;
    obj.Year=request.body.Year;
    obj.Actors=request.body.Actors;
    obj.Director=request.body.Director;
    obj.Plot=request.body.Plot;
    obj.Released=request.body.Released;
    obj.imdbRating=request.body.imdbRating;
    obj.Awards=request.body.Awards;
//console.log(obj);
content.push(obj);
fs.writeFile('json/movie_list.json', JSON.stringify(content, null, 4), function(err) {
      if(err) {
      console.log(err);
      }
  });
    //respond.sendFile(path.join( __dirname + '../views/index.html'));
   respond.redirect( "/" );
});



module.exports = router;
