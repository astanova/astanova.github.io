$(function(){
  
  $('.gallery').mixItUp({
    load:{
      filter: '.cat-1'
    }
  });
  
  $("nav ul li").on("click","a", function (event) {
  event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top;         
  $('body,html').animate({scrollTop: top}, 1000);
  });
  
  $('.nav-icon').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav-wrapper').toggleClass('active');
  });
  	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});
  	$('nav ul li').click(function(){
		$('.nav-wrapper').removeClass('active');
        $('.nav-icon').removeClass('open');
	});

}); //end-function jQuery
