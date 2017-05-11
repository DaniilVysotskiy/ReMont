$(document).ready(function(){

	//Slider init
	if ($('#slider-item').length) {
		$('#slider-item').owlCarousel({
			items: 1,
			dots: true,
			nav: false,
		});
	}

	//Modals
	//Show modal
	$('[data-link="modal"]').on('click', function(){
		let link = $(this).attr('href');
		let modal = $(link);

		$(modal).addClass('active');
	})
	//Hide modal on cross click
	$('.modal').on('click', '.close', function(){
		$(this).closest('.modal').removeClass('active');	
	})
	//Hide modal on empty place click
	$(document).on('click', function(e){
		let target = e.target;

		if($(target).hasClass('modal')){
			$('.modal').removeClass('active');
		}
	})

	//Stars rating functionality
	let starIsClicked = false;

	
		$('.stars-i > label > img').hover(
			function(){
				if(starIsClicked == false) {
					$(this)
						.attr('src', '/assets/img/star-fill.png')
						.parent()
						.prevAll()
						.children('img')
						.attr('src', '/assets/img/star-fill.png');
				}
			}, 
			function(){

				if(starIsClicked == false) {
					$(this)
						.attr('src', '/assets/img/star-stroke.png')
						.parent()
						.prevAll()
						.children('img')
						.attr('src', '/assets/img/star-stroke.png');
				}
			}
		);

	$('.stars-i > label > img').on('click', function(){
		$(this)
			.attr('src', '/assets/img/star-fill.png')
			.siblings('input')
			.prop('checked', true);
		$(this)
			.parent()
			.nextAll()
			.children('img')
			.attr('src', '/assets/img/star-stroke.png');
		$(this)	
			.parent()
			.prevAll()
			.children('img')
			.attr('src', '/assets/img/star-fill.png');

			starIsClicked = true;

			let starID = $('input[type="radio"]:checked').attr('id');

			console.log(starID);
	})
});