function sliderInitialize(selector) {
    let initSlider = false;

    if (selector == '.js-banners-slider') {
        if ($(window).width() < 768 || $(window).width() > 1023) {
            initSlider = true;
        }
    } else if (selector == '.js-news-slider') {
        if ($(window).width() < 768) {
            initSlider = true;
        }
    } else if (selector == '.js-catalog-item-slider') {
        if ($(window).width() < 768) {
            initSlider = true;
        }
    } else if (selector == '.js-certs-slider') {
        if ($(window).width() < 768) {
            initSlider = true;
        }
    }

    if (initSlider) {
        let sliderBlock = $(selector);
        sliderBlock.addClass("owl-carousel");
        sliderBlock.owlCarousel({
            items:1,
            nav:false,
            dots:true,
            autoplay:0,
            autoplayHoverPause:true,
            loop:true,
            margin: 10,
        })
    } else {
        $(selector).owlCarousel('destroy');
        $(selector).removeClass("owl-carousel");
    }
}

$(window).resize(function() {
    sliderInitialize('.js-banners-slider');
    sliderInitialize('.js-news-slider');
    sliderInitialize('.js-catalog-item-slider');
    sliderInitialize('.js-certs-slider');
});

$( document ).ready(function() {
    sliderInitialize('.js-banners-slider');
    sliderInitialize('.js-news-slider');
    sliderInitialize('.js-catalog-item-slider');
    sliderInitialize('.js-certs-slider');

    /*** Удалить перед выгрузкой ***/
    $(function(){
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 430) {
                $('.fixed-header').addClass('active');
            }
            else {
                $('.fixed-header').removeClass('active');
            }
        });
    });

    $('.header-top-select').click(function() {
        //$('.header-top-selected').slideToggle(600);
        $('.tfl-popup-overlay').slideToggle();
    });
    $('.tfl-popup__close').click(function() {
        $('.tfl-popup-overlay').hide();
    });
    $('.tfl-popup__location-link').click(function(e) {
        //e.preventDefault();
        let town = $(this).data('name');
        let date = new Date(new Date().getTime() + 3600 * 24 * 30 * 1000);
        /*
        setCookie('BITRIX_SM_city_name', town, {secure: true, 
                                            domain:'.mf-group.ru', 
                                            expires: date});
                                            */
        //setCookie('BITRIX_city_name', town, {secure: true, domain:'.khv.mf-group.ru', 'max-age': 2592000});
        $('.tfl-popup-overlay').hide();
        //return false;
    });
    
});

/*** Удалить перед выгрузкой ? ***/
if ($(window).width() > 1023) {
    let sliderSelector = $('.d2-slider');
    sliderSelector.addClass("owl-carousel");
    sliderSelector.owlCarousel({
        nav: true,
        navText: ['<img src="/local/templates/webpro_tmp/img/left-arrow.png" alt="">', '<img src="/local/templates/webpro_tmp/img/right-arrow.png" alt="">'],
        margin: 30,
        dots: false,
        autoplay: 5000,
        autoplayHoverPause: true,
        loop: false,
        mouseDrag: false,
        responsive: {
            700: {
                items: 4,
            },
            500: {
                items: 2
            },
            0: {
                items: 1.2
            }
        }
    });
}

    setTimeout(getTown, 1000);
    function getTown() {
        let townCur = getCookie('BITRIX_SM_city_name');
        console.log(townCur);
        if (typeof townCur == "undefined") {
            /*** Раскомментировать перед выгрузкой ***/
            // $('.tfl-popup-overlay').show();
        } 
    }

/*** Раскомментировать перед выгрузкой ***/
// BX.addCustomEvent("onTFLocationSetLocation", function(response)
// {
//     if (response.hasOwnProperty('location')) {
//         console.log(response.location);
//         if (response.location.name == 'Хабаровск' && location.hostname != 'khv.mf-group.ru') {
//             location.href = '//khv.mf-group.ru';
//         }
//         if (response.location.name == 'Благовещенск' && location.hostname != 'mf-group.ru') {
//             location.href = '//mf-group.ru';
//         }
//     }
//
//     if (response.hasOwnProperty('content')) {
//         //console.log(response.content);
//     }
// });

if ($(window).width() > 1023) {
    $('.d2-slider.owl-carousel').owlCarousel({
        nav: true,
        navText: ['<img src="/local/templates/webpro_tmp/img/left-arrow.png" alt="">', '<img src="/local/templates/webpro_tmp/img/right-arrow.png" alt="">'],
        margin: 30,
        dots: false,
        autoplay: 5000,
        autoplayHoverPause: true,
        loop: false,
        mouseDrag: false,
        responsive: {
            700: {
                items: 4,
            },
            500: {
                items: 2
            },
            0: {
                items: 1.2
            }
        }
    });
}
/*$(".header-bottom-menu").click(function(){
		$(".header-bottom-in").toggleClass("active");
});*/

/*$(".plus").click(function(){
	var tovarCount = Number($(this).siblings("input").val());
	tovarCount++;
	$(this).siblings("input").val(tovarCount);
});
$(".minus").click(function(){
	var tovarCount = Number($(this).siblings("input").val());
	if(tovarCount > 0){
	tovarCount--;
	$(this).siblings("input").val(tovarCount);
	}
});*/
// if($(window).width() < 425){
// 	$('.d6-flex').addClass("owl-carousel");
// 	$('.d6-flex').addClass("owl-default");
// 	$(".d6-flex").owlCarousel({
// 		items:1.2,
// 		loop:true,
// 		margin:30,
// 		dots:false,
// 		nav:false,
// 		autoplay:5000,
// 		autoplayHoverPause:true,
// 	})
// }
//$(".header-bottom-in").html($(".header-bottom-category").html());


$(".header-bottom-menu").click(function(){
	if ($('.header-bottom-menu-slide').hasClass('active'))
	{$('.header-bottom-menu-slide').removeClass('active'); }
	else {$('.header-bottom-menu-slide').addClass('active'); }
});

$(".oform-item input").click(function(){
	if($(this).hasClass("oform-check1")){
		$(".oform-check1").parent(".oform-item").removeClass("active");
	}else if($(this).hasClass("oform-check2")){
		$(".oform-check2").parent(".oform-item").removeClass("active");
	}
	
	
	if($(this).prop("checked") == false){
		$(this).parent(".oform-item").removeClass("active")
	}
	else{
		$(this).parent(".oform-item").addClass("active")
	}
	
});

$('.oform-next').click(function(){
	$('.step-content').removeClass("active");
	$(this).parent(".oform-nav").parent(".step-content").parent(".oform-step").next(".oform-step").children(".step-content").addClass("active");
})

$('.oform-prev').click(function(){
	$('.step-content').removeClass("active");
	$(this).parent(".oform-nav").parent(".step-content").parent(".oform-step").prev(".oform-step").children(".step-content").addClass("active");
})

$(".oform-step-head").click(function(){
	$('.step-content').removeClass("active");
	$(this).next(".step-content").addClass("active")
})


$(".reg").change(function(){
	if($(".user-radio").hasClass("active")){
		$('.COMPANY_PROP_V').hide()
	}else if($(".ip-radio").hasClass("active")){
		$('.COMPANY_PROP_V').show()
	}
})

if ($(window).width() > 766) {
    $(".tovar-owl").not('.slick-initialized').slick({
        vertical: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" style="width:100%;"><img src="./js/slick/arrow-top.png"></button>',
        nextArrow: '<button type="button" style="width:100%;"><img src="./js/slick/arrow-bottom.png"></button>',
        arrows: true,
        adaptiveHeight: true
    });
    $(".tovar-owl-item").click(function () {
        var url = $(this).children("img").attr("src");
        $(".tovar-prev a").attr("href", url)
        $(".tovar-prev img").attr("src", url);
    });
}

if ($(window).width() < 768 || $(window).width() > 1024) {
    var clickable = $('.tovar-tab');
    var changed = $('.tovar-content');
    clickable.on('click', function () {
        var n = clickable.index(this);
        console.log(n);
        changed.removeClass("active");
        clickable.removeClass("active");
        $(this).addClass("active");
        changed.eq(n).addClass('active');
    });
}



var clickable2 = $('.contact-tab');
var changed2 = $('.contact-items');
var changed22 = $('.yam-content');
clickable2.on('click', function () {
	var n = clickable2.index(this);
	clickable2.removeClass("active");
	changed2.removeClass("active");
	changed22.removeClass("active");

	$(this).addClass("active");
	changed2.eq(n).addClass('active');
	changed22.eq(n).addClass('active');
});

if ($(window).width() < 768) {
    $('.catalog-filter-btn').click(function () {
        //$(".catalog-left.mob").toggleClass("active")
        $('.catalog-filter-btn').hide();
        $(".catalog-left").show();
    })

    $('.catalog-left-ttl').click(function () {
        $(".catalog-left").hide();
        $('.catalog-filter-btn').show();
    })
} else {
    $('.catalog-filter-btn').click(function(){
        //$(".catalog-left.mob").toggleClass("active")
        $(".catalog-left").show();
    })

    $('.catalog-left-ttl').click(function(){
        $(this).toggleClass("active");
        $(this).next(".catalog-left-content").toggleClass("active")
    });
}
$(".sort-current").click(function(){
	$(this).toggleClass("active")
});

/*** Раскомментировать перед выгрузкой ***/
// $(".catalog-range").ionRangeSlider({
//     type: "double",
//     min: 0,
// 	from:800,
// 	to:12000,
//     max: 15000,
//     grid: false,
// 		onStart: function (data) {
//         $(".min-value").html(data.from);
//         $(".max-value").html(data.to);
//     },
//     onChange: function (data) {
//         $(".min-value").html(data.from);
//         $(".max-value").html(data.to);
//     },
//     onFinish: function (data) {
//         $(".min-value").html(data.from);
//         $(".max-value").html(data.to);
//     },
//     onUpdate: function (data) {
//         $(".min-value").html(data.from);
//         $(".max-value").html(data.to);
//     }
// });
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 430) {
            $('.fixed-header').addClass('active');
        }
        else {
            $('.fixed-header').removeClass('active');
        }
    });
});

$(".category-footer").click(function(){
	$(this).toggleClass("active");
	$(this).prev("div").toggleClass("active")
});

if ($(window).width() < 1023) {
    $(".category-col").click(function () {
        $(this).toggleClass("active");
        $(this).find(".category-content-links").toggleClass("active")
    });
}

    /*$('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
          left: ($(document).width() - $('#magnify').outerWidth())/2,
          // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
        });
      $('#overlay, #magnify').fadeIn('fast');
    });*/
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
   
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });

$(document).ready(function() {

	//$('.slider-index').slick();

	$('.slider-index').owlCarousel({
		items:1,
		nav:false,
		dots:true,
		autoplay:5000,
		autoplayHoverPause:true,
		loop:true
	});

});


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}