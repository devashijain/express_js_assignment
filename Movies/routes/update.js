var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var jsonfile = require('jsonfile');
var file = './public/json/movie_list.json';
var fs=require('fs');

router.post('/',function(request, respond) {
   jsonfile.readFile(file,function(err,content){

    console.log("Reading the json in the update.js file");
    var obj = {};
for(var i=0;i<content.length;i++)
     {
       if(content[i].Title==request.body.Title)
       {
         content[i].Title=request.body.Title;
       content[i].Poster=request.body.Poster;
         content[i].Year=request.body.Year;
         content[i].Actors=request.body.Actors;
         content[i].Director=request.body.Director;
         content[i].Plot=request.body.Plot;
         content[i].Released=request.body.Released;
         content[i].imdbRating=request.body.imdbRating;
         content[i].Awards=request.body.Awards;
       }
     }
 jsonfile.writeFile(file, content,{spaces: 4}, function(err) {
   console.log("Writing new contents in after updation");
                               if(err) {
                                   console.log(err);
                      }
   });
 })
    //  var content=JSON.parse(fs.readFileSync('./public/page.json'));
    // router.use(express.static(path.join((__dirname,"public"))));
    //   respond.sendFile(path.join( __dirname + '../views/index.html'));
    respond.redirect("/");
});
module.exports = router;
