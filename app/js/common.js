$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});


	$(".advantages .cards .card").equalHeights(),
	$(".feedback .team .team-member").equalHeights();


	$(".advantages").waypoint(function() {		//animation in section "advantages"

		$(".advantages .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("animated flipInY");
			}, 250*index);
		});

	}, {
		offset : "20%"
	});

	$(".feedback").waypoint(function() {		//animation in section "feedback"

		$(".feedback .team-member").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("animated zoomIn");
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