
//============== header menu js start here =====================
(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1024;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       //cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);
//============== header menu js end here =====================





$(document).ready(function(){  



// animate it js function start here 
(function ($) {
    $.doTimeout(1500, function () {
        $('.repeat.go').removeClass('go');
        return true;
    });
    $.doTimeout(1520, function () {
        $('.repeat').addClass('go');
        return true;
    });
})(jQuery);
// animate it js function end here 



var loc = window.location.href;
var link = $("a[href='"+loc+"']")
if(link.length > 0) {
  // for sub menu
  if($(link).parents('.dropdown').length > 0) {
     $(link).parents('li').addClass('active');
     //$(link).addClass('active');
  }
 $(link).parents('li').addClass('active');
}

//$(".vision-associate-slider").slick({
//        dots: false,
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//    arrows:true,
//    draggable:true,
//    cssEase:'linear',
//    parallax: true,
//   });
//   $(".mission-associate-slider").slick({
//        dots: false,
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//    arrows:true,
//    draggable:true,
//    cssEase:'linear',
//    parallax: true,
//   });
//   $(".value-pillars-associate-slider").slick({
//        dots: false,
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//    arrows:true,
//    draggable:true,
//    cssEase:'linear',
//    parallax: true,
//   });

$('#nav-icon').click(function(){
	$(this).toggleClass('open');
	$("body").toggleClass('overflow-hidden');
	$("header").toggleClass('header-bg'),800;
	$(".logo-source").toggleClass('path');
	$('.logo-source').prop('src', 'https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifWAqBZKnhrNwXs1M3EMoAJtlSkug...po8fU7');  
	$('.logo-source.path').prop('src', 'https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifWAqBZKnhrNwXs1M3EMoAJtlSkug...po8fU7');  
	
});
	
	
	
	
	$('.read-more').click(function(){
		$(".collapse-div").slideToggle();
		 $(this).text(function(i, v){
               return v === 'Read more' ? 'Read less' : 'Read more'
            })
	});

	

//=========== footer input js start here
$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});
$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
});
//==================== footer input js end here

//=============== fixed header js start here 
$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $("header").addClass("fixed-header");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("fixed-header");
    }
});
//============== fixed header js end here 

$(window).resize(function() {
        $('.jarallax').jarallax('onResize');
        $('.jarallax').css('width', $(window).width() + 'px');
     });
	 
	 
	



$(".vision-about-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
   $(".values-about-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
   $(".brand-promise-about-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		parallax: true,	
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });

   
   $(".our-passion-about-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
  

$(".our-client-slider").slick({
        
		responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
		dots:true,
		slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
		autoplay:true,
		autoplaySpeed:5000,
		draggable:true,
		cssEase:'linear',
		infinite:true,
		parallax: true,
		loop:true
      }
    }
  ]
   });


   
   
 
 if($(window).width() < 1025){  
   $(".header-logo").attr('src', 'assets/images/footer-logo.png');
 }
 
if($(window).width() < 767){
	
	 $(".executive-leadership-title").click(function(){
    $(".executive-leadership-members").slideToggle();
	$(".board-director-members").slideToggle();
	$(".executive-leadership-title").toggleClass("rotate");
	$(".board-director-title").toggleClass("rotate");
	$('html,body').animate({ scrollTop: $(".ledership-part").offset().top -150 }, 500);
  });
  
   $(".board-director-title").click(function(){
    $(".executive-leadership-members").slideToggle();
	$(".board-director-members").slideToggle();
	$(".board-director-title").toggleClass("rotate");
	$(".executive-leadership-title").toggleClass("rotate");
	$('html,body').animate({ scrollTop: $(".ledership-part").offset().top -150 }, 500);
  });
	
  $(".meal-experience-slider").slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    cssEase:'linear',
	arrows:true,
	parallax: true,
	adaptiveHeight: true,
	waitForAnimate: false,
	infinite: true,

  });
  
  
  $(".our-brands-slider").slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
	infinite: true,
    cssEase:'linear',
	arrows:false,
	parallax: true,
  });
  $(".culinary-innovation-slider").slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
	infinite: true,
    cssEase:'linear',
	arrows:false,
	parallax: true,
  });
  
  $(".cuisines-slider").slick({
    autoplay:false,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    cssEase:'linear',
	arrows:true,
	parallax: true,
  });
  $('.cuisines-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $(".animated").addClass('go');
});

$(".profile-count-slider").slick({
    autoplay:false,
    autoplaySpeed:3000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
	infinite: false,
    cssEase:'linear',
	arrows:true,
	parallax: true,
  });
  
  
}

  $(".our-promise-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    cssEase:'linear',
	arrows:false,
	infinite: true,
	loop:true,
	parallax: true,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        adaptiveHeight: true,
		infinite: true,
		autoplay:true,
      }
    }
  ]
  });
  
 //initiatives-slider js start here 
   $(".initiatives-slider").slick({
        dots: true,
		 autoplay:true,
    autoplaySpeed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:false,
		infinite: true,
		parallax: true,	
		draggable:true,
		cssEase:'linear',	
		waitForAnimate: false,
		pauseOnHover: false,
   });
 //initiatives-slider js end here 

 $(".company-profile-slider").slick({
		infinite: true,
		autoplay:true,
		autoplaySpeed:10000,
		cssEase:'linear',
		parallax: true,
		pauseOnHover: false
   });

$(".company-profile-about-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
   
   $(".company-profile-leadership-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
        speed:1500,
		parallax: true,
   });
   $(".company-profile-legacy-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		speed:1500,
		parallax: true,
   });
   
      $(".life-taj-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
   $(".key-pillars-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		draggable:true,
		cssEase:'linear',
		parallax: true,
   });
   
   

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $('.slick-slider').slick('setPosition');
            });

 $('.initiatives-img, .our-promise-bg, .company-profile-about-img, .company-profile-leadership-img, .company-profile-legacy-img, .culinary-img, .animate-image').jarallax({
 speed: 0.8
});


    //================== our client tab js start here 
// $("#tab-section .nav-tabs a").click(function() {
//   var position = $(this).parent().position();
//   var width = $(this).parent().width();
//     $("#tab-section .slider").css({"left":+ position.left,"width":width});	
// });
// var actWidth = $("#tab-section .nav-tabs").find(".active").parent("li").width();
// var actPosition = $("#tab-section .nav-tabs .active").position();
// $("#tab-section .slider").css({"left":+ actPosition.left,"width": actWidth});
// //================== our client tab js end here 


//   var tabs$ = $(".nav-tabs a");
// $( window ).on("hashchange", function() {
//     var hash = window.location.hash, // get current hash
//         menu_item$ = tabs$.filter('[href="' + hash + '"]'); // get the menu element

//     menu_item$.tab("show"); // call bootstrap to show the tab
// 	var position = menu_item$.position();
//     var width = menu_item$.width();
// 	 $("#tab-section .slider").css({"left":+ position.left,"width":width});
	 
	
// }).trigger("hashchange");


// parallax script start here 
	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
	  $('#ios-notice').removeClass('hidden');
	  $('.parallax-container').height( $(this).height() * 0.5 | 0 );
	} else {
	  $(window).resize(function(){
		var parallaxHeight = Math.max($(this).height() * 0.7, 200) | 0;
		$('.parallax-container').height(parallaxHeight);
	  }).trigger('resize');
	}
// parallax script end here 
	
});


   $(window).load(function(){
	   if ($(window).width() >= 1080) {  
          $('.jarallax').jarallax({	   	   	
			  speed: 0.5,
			  imgPosition: '0 0',
		  });
	   }
	   else{	
	     $('.jarallax').jarallax({	   	    
		  speed: 0.5,
	      imgPosition: '0 0',	   	   	   
         });
	  }
   });


   $(document).ready(function () {
            // Call Gridder
            $(".gridder").gridderExpander({
                scrollOffset: 220,
                pager: false,
                scrollTo: "panel", // "panel" or "listitem"
                animationSpeed: 400,
                animationEasing: "easeInOutExpo",
                onStart: function () {
                    console.log("Gridder Inititialized");
                },
                onExpanded: function (object) {
                    console.log("Gridder Expanded");
                    $(".carousel").carousel();
                },
                onChanged: function (object) {
                    console.log("Gridder Changed");
                },
                onClosed: function () {
                    console.log("Gridder Closed");
                }
            });
            //active menu navigation
       
});

function submitnewsletter(){
  var newsletter = $('#subscribenews').val();
  $('#submitnews').css("display","none");
  $('#loadingnews').css("display","block");
  $('#resonsenews').html('');
  $('#resonsenews').css('display','none');
  if(newsletter !=''){
    $.ajax({
        url: base_url+"custom_content/content/save_newsletter_us",
        type: "POST",
        dataType: "JSON",
        data: {newsletter:newsletter},
        success: function (data, status)
        {
          if(data.status=='error'){
            $('#resonsenews').html(data.msg);
            $('#resonsenews').css({'color':'#992522','display':'block'});
            $('#submitnews').css("display","block");
            $('#loadingnews').css("display","none");
          }else if(data.status=='success'){
            $('#subscribenews').val('');
            $('#resonsenews').html(data.msg);
            $('#resonsenews').css({'color':'green','display':'block'});
            $('#submitnews').css("display","block");
            $('#loadingnews').css("display","none");
          }
        },
        error: function (xhr, desc, err)
        {


        }
      })
  }else{
    $('#resonsenews').html('Please enter email');
    $('#resonsenews').css({'color':'#992522','display':'block'});
    $('#submitnews').css("display","block");
    $('#loadingnews').css("display","none");
  }
}

// ===== Scroll to Top ==== 
$(window).scroll(function() {
if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
$('.scroll-top').fadeIn(200);    // Fade in the arrow
} else {
$('.scroll-top').fadeOut(200);   // Else fade out the arrow
}
});
$('.scroll-top').click(function() {      // When arrow is clicked
$('body,html').animate({
scrollTop : 0                       // Scroll to top of body
}, 500);
});