$(function() {
  initBook();
});


function initBook() {
  let book = $('#book');
  let slides = book.children();
  book.bookblock({
    speed : 800,
		shadowSides : 0.8,
		shadowFlip : 0.7,
    onEndFlip : function(old, page, isLimit) { 
      $('.btn-wrap').children().removeClass('current');
      $(`.btn-wrap :eq(${page})`).addClass('current');
    }
  });

  // add navigation events
  $('.button-next').on('click touchstart', function() {
    book.bookblock('next');
  });

  $('.button-prev').on('click touchstart', function() {
    book.bookblock('prev');
  });

  $('.catalog-item').each( function(i) {
    $(this).on('click touchstart', function() {
      book.bookblock('jump', i + 2);
    });
  });

  $('.btn-wrap').children().each( function(i) {
    $(this).on('click touchstart', function() {
      book.bookblock('jump', i + 1);
      $('.btn-wrap').children().removeClass('current');
      $(this).addClass('current');
    });
  });

  // add swipe events
  slides.on({
    'swipeleft' : function() {
      book.bookblock('next');
    },
    'swiperight' : function() {
      book.bookblock('prev');
    }
  });
}