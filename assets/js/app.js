'use strict';

$(document).ready(function () {

	//Common slider
	if ($('#slider-item').length) {
		$('#slider-item').owlCarousel({
			items: 1,
			dots: true,
			nav: false
		});
	}

	/*Modals*/
	//Show modal
	$('[data-link="modal"]').on('click', function () {
		var link = $(this).attr('href');
		var modal = $(link);

		$(modal).addClass('active');
	});
	//Hide modal on cross click
	$('.modal').on('click', '.close', function () {
		$(this).closest('.modal').removeClass('active');
	});
	//Hide modal on empty place click
	$(document).on('click', function (e) {
		var target = e.target;

		if ($(target).hasClass('modal')) {
			$('.modal').removeClass('active');
		}
	});

	/*Stars rating functionality*/
	var starIsClicked = false;

	$('.stars-i > label > img').hover(function () {
		if (starIsClicked == false) {
			$(this).attr('src', '/assets/img/Star_Fill.svg').parent().prevAll().children('img').attr('src', '/assets/img/Star_Fill.svg');
		}
	}, function () {

		if (starIsClicked == false) {
			$(this).attr('src', '/assets/img/Star_Outline.svg').parent().prevAll().children('img').attr('src', '/assets/img/Star_Outline.svg');
		}
	});

	$('.stars-i > label > img').on('click', function () {
		$(this).attr('src', '/assets/img/Star_Fill.svg').siblings('input').prop('checked', true);
		$(this).parent().nextAll().children('img').attr('src', '/assets/img/Star_Outline.svg');
		$(this).parent().prevAll().children('img').attr('src', '/assets/img/Star_Fill.svg');

		starIsClicked = true;

		var starID = $('input[type="radio"]:checked').attr('id');

		console.log(starID);
	});

	/*Try order number functionality*/
	$('.status__form-b .form form .try-b a').on('click', function () {
		var orderNumber = $(this).text();

		$('#status-number').val(orderNumber);
		$('.status__result').show();
	});
});