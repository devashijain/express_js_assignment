$.ajax({
url:'page.json',
datatype:'json',
type:'get',
cache:false,
success:function(data){
 $.getJSON( "page.json", function( data ) {
    });
// var data = $.parseJSON(data);
  var count = 0;
$("#next").click(function() {
  if(count< data.length){
    count++;
      nextImg();
    }
});
$("#prev").click(function() {
  if(count>0){
    count--;
      nextImg();
    }
});
var nextImg = function()
{
     $("#Title").text(data[count].Title);
    //  $('.col-md-3').prepend('<img alt="No Image Found" src="' + data[count].Poster +'" />');
    $('#myImg').attr("src", data[count].Poster);
     $('#Year').text("Year : " + data[count].Year);
     $('#Actors').text("Actors : " + data[count].Actors);
     $('#Director').text("Director : "+ data[count].Director);
     $('#Plot').text(data[count].Plot);
     $('#Released').text(data[count].Released);
     $('#imdbRating').text("       " + data[count].imdbRating);
     $('#Awards').text(data[count].Awards);

     $('#deleteTitle').val(data[count].Title);

     $("#frmCadastre").click(function(){
      $("#Title1").val(data[count].Title);
      $('#myImg1').val(data[count].Poster);
      $('#Year1').val(data[count].Year);
      $('#Actors1').val(data[count].Actors);
      $('#Director1').val(data[count].Director);
      $('#Plot1').val(data[count].Plot);
      $('#Released1').val(data[count].Released);
      $('#imdbRating1').val(data[count].imdbRating);
      $('#Awards1').val(data[count].Awards);
    });
}
if(count==0)
{
  nextImg();
}
}
});
