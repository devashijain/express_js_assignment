var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var file = './public/json/movie_list.json';
var fs=require('fs');



// jsonfile.readFile(file, function(err, obj) {
//   console.log(obj)
// })

router.post('/',function(request, respond) {
      //var content=JSON.parse(fs.readFileSync('./public/json/movie_list.json'));
jsonfile.readFile(file ,function(err,content){
  console.log(content);
    var obj = {};
    obj.Title=request.body.Title;
    obj.Poster=request.body.Poster;
    obj.Year=request.body.Year;
    obj.Actors=request.body.Actors;
    obj.Director=request.body.Director;
    obj.Plot=request.body.Plot;
    obj.Released=request.body.Released;
    obj.imdbRating=request.body.imdbRating;
    obj.Awards=request.body.Awards;
//console.log(obj);
content.push(obj);
jsonfile.writeFile(file, content,{spaces: 4}, function(err) {
      if(err) {
      console.log(err);
      }

  });
    //respond.sendFile(path.join( __dirname + '../views/index.html'));
   respond.redirect( "/" );
})
});



module.exports = router;
