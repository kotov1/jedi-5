$(document).ready(function() {

	
	//адаптивное меню
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});


	// блоки одинаковой высоты
	$(".advantages .cards .card").equalHeights(),
	$(".feedback .team .team-member").equalHeights();


	//animation in section "advantages"
	$(".advantages").waypoint(function() {

		$(".advantages .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("animated flipInY");
			}, 250*index);
		});

	}, {
		offset : "20%"
	});

	//animation in section "feedback"
	$(".feedback").waypoint(function() {

		$(".feedback .team-member").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("animated zoomIn");
			}, 250*index);
		});

	}, {
		offset : "20%"
	});


	// Простые анимации 
	$('.section-head').animated('fadeInRight');

	$('.evaluation-item, .info-item, .deals-item, .awards-item').animated('fadeIn');



	//Карусель в блоке comments
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: '',
		loop: true
	});


	//Появление кнопки "вверх" и плавный скроллинг к верху страницы
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100 && $(this).scrollTop() < $(document).height()-1000) {			//100-отступ от верхнего края страницы при котором появится кнопка
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({scrollTop: 0}, 300);	//0 - margin-top; 300 - scrolling speed
		 return false;
		 });	
	

	//Анимация скролинга  нижней кнопки "вверх", согласно макета
	$('.arrow-up a').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		 return false;
		 });	




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// E-mail Ajax Send
	$(".mail").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});