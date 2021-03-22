//$(document).ready( function(){

//	$("div").each( function(i){
//		$(this).append("<img src='images/"+i+".jpg width='79'' height='79' />");
//	});
//});


var folder = "images/photos/";
var thumbnail = "thumbnail/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#test").append( "<div class='grid wedding col col-xs-4'><a href='"+ folder + thumbnail + val +"' class='fancybox' data-fancybox-group='gall-1'><img src='"+ folder + val +"' alt class='img img-responsive cus-img'></a></div>");
            } 
        });
    }
});