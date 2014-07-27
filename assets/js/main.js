$(function() {
	worldOptions = {
		currentWorld: "none",
	};

	inventory = {};
	avaliableQuests = {};

	$('form').submit(function(e) {
		e.preventDefault();
		var usrInput = $('#usrinput').val();
		$('#usrinput').val('');
		$('.gamelog').append('<p>&#8811;' + usrInput + '<br>this is a test</p>');
		// worldSelect();
	});
});