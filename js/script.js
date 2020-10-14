$(document).ready(function(){
  $('.icon-burger').click(function(event){
  	$(this).toggleClass('active');
  	$('.navigation__body').toggleClass('active');
  	$('body').toggleClass('lock');
  });
});

(function($) {
  $(function() {
    $("nav.tab__items").on("click", "a:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tab")
        .find("div.tab__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

document.addEventListener('gesturestart', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
}, {passive:false});