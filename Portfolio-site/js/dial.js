



$("document").ready(function (){ 
//$('.content-level').viewportChecker({

       // callbackFunction: function(elem, action){



var percent = $('.progress_bar').attr('title');
$('.progress_bar').animate({width: percent},1000);

// activate tooltip
	 $('.tip').tipsy({gravity: 's',fade: true});
//}


});

//});

$("document").ready(function (){ 
//$('.content-level').waypoint(function(){

var percent2 = $('.progress_bar2').attr('title');
$('.progress_bar2').animate({width: percent2},1000);

// activate tooltip
	 $('.tip2').tipsy({gravity: 's',fade: true});

});
//});

$("document").ready(function (){ 
//$('.content-level').waypoint(function(){

var percent3 = $('.progress_bar3').attr('title');
$('.progress_bar3').animate({width: percent3},1000);

// activate tooltip
	 $('.tip3').tipsy({gravity: 's',fade: true});

});
//});

