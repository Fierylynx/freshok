function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu__dropdown-button')) {

    var dropdowns = document.getElementsByClassName("menu__dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$('.number').styler();

$('.hero-slider__list').slick({
      dots: false,

      nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrow-prev.svg" alt=""></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/arrow-next.svg" alt=""></button>'
  });

  $('.logotype-slider__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

});


  var mixer = mixitup('.top-products__list');



