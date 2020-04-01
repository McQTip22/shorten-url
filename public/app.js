$(document).ready(function() {
	$('#urlInput').keypress(function(event) {
		if (event.which == 13) {
			createInput();
		}
	});
});

function mkButton(input) {
	//new url
	var shorterUrl = 'http://localhost:3000/api/urls/' + input._id;
	$('.button').append('<a href="' + shorterUrl + '"' + input._id + '" class="button">' + shorterUrl + '</a>');
}

function createInput() {
	var newInput = $('#urlInput').val();
	$.post('/api/urls', { original: newInput })
		.then(function(newInput) {
			$('#urlInput').val('');
			mkButton(newInput);
		})
		.catch(function(err) {
			console.log(err);
		});
}
