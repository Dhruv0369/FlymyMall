// header

$(document).ready(function () {
  jQuery(window).scroll(function () {
    var sticky = jQuery('.header-main'),
      scroll = jQuery(window).scrollTop();

    if (scroll >= 80) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
});

$(".select-active").select2();
$(".Billing-address").select2();


// form switcher

$(document).ready(function () {
  const businessForm = $(".business-form");
  const individualForm = $(".individual-form");
  const radioButtons = $('input[name="radio"]');

  businessForm.show();
  individualForm.hide();

  radioButtons.on("change", function () {
    if ($(this).attr("id") === "business") {
      businessForm.show();
      individualForm.hide();
    } else {
      businessForm.hide();
      individualForm.show();
    }
  });
});


// countr js

$('.counter').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 8000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }
    });
});

// country_selector

$("#country_selector").countrySelect({
  // defaultCountry: "jp",
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // responsiveDropdown: true,
  preferredCountries: ['ca', 'gb', 'us']
});

// categories-slider

$('#categories-slider').owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 800,
  margin: 24,
  navText: [
    '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.04 4.64011H3.04L6.32 1.36011L4.88 0.000107765L0.56 4.24011C0.186667 4.66677 0 5.14677 0 5.68011C0 6.21344 0.186667 6.69344 0.56 7.12011L4.88 11.3601L6.32 10.0001L3.04 6.64011H13.04V4.64011Z" fill="#231F20" fill-opacity="0.7"/></svg>',
    '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.96 7.35989H10.96L7.68 10.6399L9.12 11.9999L13.44 7.75989C13.8133 7.33323 14 6.85323 14 6.31989C14 5.78656 13.8133 5.30656 13.44 4.87989L9.12 0.639893L7.68 1.99989L10.96 5.35989H0.96V7.35989Z" fill="#231F20" fill-opacity="0.7"/></svg>'
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2.5,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 10,
    }
  }
})

// menu

$('.btn-menu').on('click', function () {
  $('.mobile-menu').addClass('active');
  $('.mobile-menu-bg').addClass('active');
  $('body').addClass('active');
});
$('.close-menu').on('click', function () {
  $('.mobile-menu').removeClass('active');
  $('.mobile-menu-bg').removeClass('active');
  $('body').removeClass('active');
});

// price filter product

// $('.filter-btn').on('click', function () {
//   $('#shop_widget').slideDown('active');
// });
// $('.close-filter').on('click', function () {
//   $('#shop_widget').slideUp('active');
// });