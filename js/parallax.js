$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'cover ' + (wScroll*.75)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.005)+'em')

}
