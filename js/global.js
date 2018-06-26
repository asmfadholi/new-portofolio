$(document).ready(function(){
  // carousel
  $('.center').slick({
    centerMode: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  })

  //burger icon
  $('.burger').on('click', function(){
    $('.section--burger').toggleClass('invisible');
  })
  $('.icon-close, .navigasi').on('click', function(){
    $('.section--burger').toggleClass('invisible');
  })

  //dapetin scrolltop section dan animasi ke arah section tsb
  $('.navigasi, .nextin').click(function(event){
    event.preventDefault();    
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })


  var maxscroll = $('.section--home').outerHeight();
  var maxscroll1 = $('.section--about').outerHeight();
  var maxscroll2 = $('.section--portofolio').outerHeight();
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    // munculin header
    if(scrolling >= maxscroll && scrolling <= (maxscroll1+maxscroll-20)){
      $('.section--header').removeClass('invisible');
      $('.logo h2').html('ABOUT');
    } else if(scrolling >= (maxscroll1+maxscroll1-20) && scrolling <= (maxscroll+maxscroll1+maxscroll2-20)){
      $('.logo h2').html('PORTOFOLIO');
    } else if(scrolling >= (maxscroll+maxscroll1+maxscroll2-20)){
      $('.logo h2').html('CONTACT');
    } else {
      $('.section--header').addClass('invisible');
    }


  })
});
