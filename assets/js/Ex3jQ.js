var tryCounter = 0;
var randomValue = Math.round(Math.random()*100);
console.log(randomValue);

$("#validButton").click(function() {
	tryCounter++;
	if (!$.isNumeric($('#inputValue').val())) {
		$('#Message').text('Rentrez un nombre !');
	} else if ($('#inputValue').val() > randomValue) {
		$('#Message').text('C\'est plus petit que '+$('#inputValue').val());
		$('#inputValue').text('');
		$('#inputValue').focus().select();
	} else if ($('#inputValue').val() < randomValue) {
		$('#Message').text('C\'est plus grand que '+$('#inputValue').val());
		$('#inputValue').text('');
		$('#inputValue').focus().select();
	} else {
		$('#Message').text('Bravo, c\'était bien '+$('#inputValue').val()+'.');
		if (tryCounter == 1) {
			$('#NbTry').text('Mais c\'te chance, du premier coup !');
		} else {
			$('#NbTry').text('Vous avez trouvé en '+tryCounter+' essais !');
		}
	}
});
$('form').submit(function() {
	tryCounter++;
	if (!$.isNumeric($('#inputValue').val())) {
		$('#Message').text('Rentrez un nombre !');
	} else if ($('#inputValue').val() > randomValue) {
		$('#Message').text('C\'est plus petit que '+$('#inputValue').val());
		$('#inputValue').text('');
		$('#inputValue').focus().select();
	} else if ($('#inputValue').val() < randomValue) {
		$('#Message').text('C\'est plus grand que '+$('#inputValue').val());
		$('#inputValue').text('');
		$('#inputValue').focus().select();
	} else {
		$('#Message').text('Bravo, c\'était bien '+$('#inputValue').val()+'.');
		if (tryCounter == 1) {
			$('#NbTry').text('Mais c\'te chance, du premier coup !');
		} else {
			$('#NbTry').text('Vous avez trouvé en '+tryCounter+' essais !');
		}
	}
	return false;
});