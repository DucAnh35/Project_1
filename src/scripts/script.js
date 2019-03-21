$(document).ready(function () {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var opacity = 0;
		if (scroll < 100) {
			opacity = scroll / 100;
			$("#b-header-container").css('background-color', 'rgba(203,190,190, ' + opacity + ')');
		} else {
			opacity = 1;
			$("#b-header-container").css('background-color', 'rgba(203,190,190, ' + opacity + ')')
		}
	})
	$('.mySlider').slick({ dots: true, infinite: true, arrows: false });
});

var a = 0;
$(window).scroll(function () {

	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},

				{

					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
					},
					complete: function () {
						$this.text((this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
						//alert('finished');
					}

				});
		});
		a = 1;
	}



wow = new WOW(
	{
			animateClass: 'animated',
			offset: 100,
			callback: function (box) {
					console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
			}
	}
);
wow.init();

});

