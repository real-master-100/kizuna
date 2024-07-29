
  $(document).ready(function() {
    var scrollTimeout;
    $(window).scroll(function() {
      clearTimeout(scrollTimeout);
      $('footer').hide();
      scrollTimeout = setTimeout(function() {
        $('footer').fadeIn();
      }, 1000); // Adjust the delay time as needed
    });
  });