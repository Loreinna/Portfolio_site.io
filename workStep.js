$(window).on('scroll', function() {
  if ($(this).scrollTop() > 500) {
    $('#scrollTopBtn').fadeIn();
  } else {
    $('#scrollTopBtn').fadeOut();
  }
});

$('#scrollTopBtn').on('click', function() {
  $('html, body').animate({scrollTop: 0}, 400);
});

