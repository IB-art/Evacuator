$(function(){
  $('.menu-btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
  });
  
  $('.weight__slider').slick({
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 1141,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 851,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 586,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    // ]
    
  });


  $('.price-tabs__item').on('click', function (e) {
    e.preventDefault();

    $('.price-tabs__item').removeClass('price-tabs__item--active');
    $(this).addClass('price-tabs__item--active');

    $('.price-tabs__content').removeClass('price-tabs__content--active');
    $($(this).attr('href')).addClass('price-tabs__content--active');
    
  });


  const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  smothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
    
     event.preventDefault()
     const id = link.getAttribute('href').substring(1)

     document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
     });
     

    })
  })

 $('input[type="file"], select').styler(); 


  // checkbox
 $(':checkbox').styler();

 var checked = false;
 $('#selall').click(function() {
    if (checked) {
        $(':checkbox').each(function() {
            $(this).prop('checked', false).trigger('refresh');
        });
        checked = false;
    } else {
        $(':checkbox').each(function() {
            $(this).prop('checked', true).trigger('refresh');
        });
        checked = true;
    }
    return false;
 });

 

});