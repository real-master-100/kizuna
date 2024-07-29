  $(document).ready(function() {
    $('footer').hide(); 

    $(window).on('scroll', function() {
      if ($(window).scrollTop() === 0) {
        $('footer').fadeOut();
      } else {
        $('footer').fadeIn(1000); // Display with fade effect
      }
    });
  });