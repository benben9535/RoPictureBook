$(function() {
  initBook();
});


function initBook() {
  let book = $('#book');
  let slides = book.children();
  book.bookblock({
    speed : 800,
		shadowSides : 0.8,
		shadowFlip : 0.7
  });

  // add navigation events
  $('.button-next').on('click touchstart', function() {
    book.bookblock('next');
    return false;
  });

  $('.button-prev').on('click touchstart', function() {
    book.bookblock('prev');
    return false;
  });

  $('.catalog-item').each( function(i) {
    $(this).on('click touchstart', function() {
      book.bookblock('jump', i + 2);
      return false;
    });
  });

  $('.btn-wrap').children().each( function(i) {
    $(this).on('click touchstart', function() {
      book.bookblock('jump', i + 1);
      $('.btn-wrap').children().removeClass('current');
      $(this).addClass('current');
      return false;
    });
  });


  
  
  // add swipe events
  slides.on({
    'swipeleft' : function() {
      book.bookblock('next');
      return false;
    },
    'swiperight' : function() {
      book.bookblock('prev');
      return false;
    }
  });
}