var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var file = './public/json/movie_list.json';
var fs=require('fs');


router.post('/',function(request, respond) {
  jsonfile.readFile(file,function(err,content){

     var obj = {};
     var newContent=[];

        for(var i=0; i<content.length; i++){
    if(content[i].Title==request.body.Title)
    {
      continue;
    }
else
{
  console.log("in else   "+content[i]);
  newContent.push(content[i]);
  }
}
jsonfile.writeFile(file, newContent,{spaces: 4}, function(err) {
      if(err) {
      console.log(err);
      }
  });
  // respond.sendFile(path.join( __dirname + '../views/index.html'));
  respond.redirect("/");
})
});
module.exports = router;
