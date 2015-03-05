$(document).ready(function(){

//homepage image transition
$(function(){

	$('.fadein img:gt(0)').hide();//greater than selector hides all the images except for the 1st 
	
	setInterval(function(){  // to show an image every few seconds
	
		$('.fadein :first-child').fadeOut()//1st image fades in then out
		.next('img').fadeIn() //next image fades in
		.end().appendTo('.fadein');}, /*first image is appended to the end of the stack of images, end method resets  internal reference back to the original selection which is the :first-child */
		3000);//3 seconds
});

// this makes the small menu able to toggle open and shut, displays at 480 px
$("#smallMenu ul").css("display","none");
 
$(".handle").click(function(){

		$("#smallMenu ul").fadeToggle();
	
  });
  
// this animates the letters
$("header p").css("display", "none");

	$("header p").delay(1000).fadeIn(2000,function(){
  
		$(this).animate({letterSpacing:"+=.1em"}, "slow")
	  
			.animate({letterSpacing:"-=.1em"}, "slow");
    
	});


});












/*function cycleImages(){
      var $active = $('#imgCycle .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#imgCycle img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 7000);
})*/