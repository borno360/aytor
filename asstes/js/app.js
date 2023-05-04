/*search bar start*/
document.getElementById('search_bar').addEventListener('click',function(){
  document.getElementById('search').classList.toggle('active');
})
document.getElementById('search_bar').addEventListener('click',function(){
  document.getElementById('search_button').classList.toggle('active');
})
/*search bar end*/
//   up scroll js start
$(window).on('scroll' ,function() {
  var scrollSize =  $(window).scrollTop()

//   scroll top js start

  if(scrollSize > 500) {
   $('#up').slideDown();
  }else{
   $('#up').slideUp();
  }

})
//    scroll top js end

$('#up').on('click',function() {
   $('html,body').animate({
       scrollTop:0,
   },2000)
})

//   up scroll js end
$(function () {
  // banner js section start
  $('.banner_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'banner_slider_dots',
    autoplay:true,
  });
  // banner js section end

  //   new product js section start
  $('.new_product_slider').slick({
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:2000,
    prevArrow: '<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right product_slider_icon"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  // new product js section end

  // deals js saction start
  $('#deal_intro').countdown('2030/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
      + ' '
      + '<div><h3>%d</h3><p>Days</p></div> '
      + '<span>:</span>'
      + '<div><h3>%H</h3><p>Hour</p></div> '
      + '<span>:</span>'
      + '<div><h3>%M</h3><p>Minute</p></div> '
      + '<span>:</span>'
      + '<div><h3>%S</h3><p>Sec</p></div>'));
  });
  // deals js section end

  // offer js section start
  $('.offer_slider').slick({
    arrows: false,
    slidesToShow: 2,
    autoplay:true,
    dots: true,
    dotsClass: 'offer_slider_dots',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });

  // offer js section end

  // latest js section start
  $('.latest_slider').slick({
    arrows: false,
    slidesToShow: 4,
    autoplay:true,
    dots: true,
    dotsClass: 'latest_slider_dots',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });
  // latest js section end


  // about page leadership js start


  $('.leadership_product_slider').slick({
    slidesToShow: 4,
    autoplay:true,
    prevArrow: '<i class="fa-solid fa-chevron-left leadership_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right leadership_slider_icon"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });

  // about page leadership js end

  //about page review Slider start
  $('.about_review_slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay:true,
    dotsClass: 'about_page_review_slider_dots',
    asNavFor: '.about_review_slider_navs',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.about_review_slider_navs').slick({
    arrows: false,
    slidesToShow: 6,
    centerMode: true,
    autoplay:true,
    focusOnSelect: true,
    asNavFor: '.about_review_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  })

  //about page review Slider end

  // about page instagram js start
  $('.about_instagram_slider').slick({
    arrows: false,
    slidesToShow: 6,
    autoplay:true,
    dots: true,
    dotsClass: 'about_instagram_slider_dots',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });

  // about page instagram js end


  $('.releted_products_slider').slick({
    slidesToShow: 4,
    autoplay:true,
    prevArrow: '<i class="fa-solid fa-arrow-left  releted_products_slider-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right releted_products_slider-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  })
  $('.shop_product_item_slider').slick({
    arrows: false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.shop_product_item_small_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
          autoplay: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  })
  $('.shop_product_item_small_slider').slick({

    arrows: false,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.shop_product_item_slider',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
          autoplay: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  })


})


new VenoBox();





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

