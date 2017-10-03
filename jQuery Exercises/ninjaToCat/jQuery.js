$(function() {
    $( "button" ).click(function() {
        $("img").slideDown();
      });

      $('img').click(function() {
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
      });
      
      $('img').click(function() {
        $("img").fadeOut("this");
      });
});