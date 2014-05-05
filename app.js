$(document).ready(function() {
  $('li').click(function() {
    $(this).toggleClass('in-cart');
  });
  $('span.x').click(function() {
    $(this).parent().remove();
  });
});