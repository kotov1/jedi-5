$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});


	$(".services .section-content .info-item").equalHeights();


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

});