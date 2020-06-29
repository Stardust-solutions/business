$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('.lock');
	});
	$('.header__link a').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});


	/*плавный переход к секции*/

	$('.header__list a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
			dn = $(sc).offset().top;
		$('html, body').animate({
			scrollTop: dn
		}, 600);
	});


	/*галерея*/

	$('.gallery').lightGallery({
		selector:'a'
	});

	/*popup*/

	$('a.arrow-popup').click(function(e) {
		e.preventDefault();
		var destinationPopup = $(this).attr("href");
		$(destinationPopup).toggleClass('show');

		$(destinationPopup + ' .popup-close').click(function() {
			$(destinationPopup).removeClass('show');
		});
		$(destinationPopup + ' #submit').click(function() {
			$(destinationPopup).removeClass('show');
		});
	});


	/*кнопка наверх*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-up').fadeIn();
		}else {
			$('#scroll-up').fadeOut();
		}
	});
	$('#scroll-up').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});