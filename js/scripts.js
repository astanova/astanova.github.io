$(function(){
  
$('a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($(elementClick)){
    $('body').animate( { scrollTop: destination }, 1000 );
    } else {
        $('html').animate( { scrollTop: destination }, 1000 );
    }
    return false;
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
