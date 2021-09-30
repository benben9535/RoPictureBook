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
  $('#next').on('click touchstart', function() {
    book.bookblock('next');
    return false;
  });

  $('#prev').on('click touchstart', function() {
    book.bookblock('prev');
    return false;
  });

  $('#first').on('click touchstart', function() {
    book.bookblock('first');
    return false;
  });

  $('#last').on('click touchstart', function() {
    book.bookblock('last');
    return false;
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