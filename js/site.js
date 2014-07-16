$(document).ready(function() 
{
	
	$(document).ready(function(){ 
          $('#banner').animate({
            marginTop: "0",
          }, 500);

        $("#close").mousedown(function(){      

          $('#banner').animate({ 
            marginTop: "-5rem",
          }, 500);
        });
      });

	$(".close").css("display", "none");

	var isMenuOpen = false;

	$('.nav_btn').click(function()
	{
		if (isMenuOpen == false)
		{
			$("#prim_nav").clearQueue().animate({
				right : '0'
			})
			$("#content").clearQueue().animate({
				"margin-left" : '-18.125rem'
			})
			
			$(this).fadeOut(200);
			$(".close").fadeIn(300);
			
			isMenuOpen = true;
		} 
	});
	
	$('.close').click(function()
	{
		if (isMenuOpen == true)
		{
			$("#prim_nav").clearQueue().animate({
				right : '-15rem'
			})
			$("#content").clearQueue().animate({
				"margin-left" : '0'
			})
			
			$(this).fadeOut(200);
			$(".nav_btn").fadeIn(300);
			
			isMenuOpen = false;
		}
	});

	$("a#example1").fancybox();

	$.localScroll();

});

