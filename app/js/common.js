$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});


	$(".advantages .cards .card").equalHeights();


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


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

});