// Script JS

	// Storing button into variable
	var btnAskWeather = document.getElementById('ask-weather');

	// Listening click event on that button
	btnAskWeather.addEventListener('click', function(e) {

		// Preventing the default behaviour
		e.preventDefault();
		
		// Creating the request
		var xhr = new XMLHttpRequest();
		var weatherResult = document.getElementById('weather-result');
	
		// Checking the status changing
		xhr.onreadystatechange = function() {
			
			if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				weatherResult.innerHTML = response.current_condition.condition;
			} else {
				console.log("There is an error !");
			}
		}
	
		// Fetching the Weather API
		xhr.open('GET', 'https://www.prevision-meteo.ch/services/json/paris', true);
		xhr.send();
	});