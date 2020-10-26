// Script JS



	/* Exercice on how we can fetch Weather with Ajax

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

	*/



	/* Exercice on how to verify user data forms

		// Code here
		var inputCode = document.getElementById("code");
		var btnSubmit = document.getElementById("submit-btn");

		// Test value of input and return boolean
		function testValue (value) {
			return /^CODE-/.test(value);
		}

		inputCode.addEventListener("input", function(e) {

			e.preventDefault();

			var input = e.target.value;
			var codeResult = document.getElementById("code-validation");

			// Test if value is in correct format
			if ( testValue(input) == true ) {
				codeResult.textContent = "Code valide.";
				btnSubmit.setAttribute("disabled", "");
			} else {
				codeResult.textContent = "Code invalide.";
				btnSubmit.removeAttribute("disabled", "");
			}
		});

	*/


	/* Exercice on how to save data on web services */

	var btnSubmit = document.querySelector("input[type='submit']");

	function sendRequest() {

		xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {

			// console.log(this.readyState);
			
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				var response = JSON.parse(this.responseText);
				var result = document.getElementById("result");
				result.textContent = response.postData.text;

				console.log("Operation is finished.");
			}

			else if (this.readyState == XMLHttpRequest.LOADING) {
				console.log("Upload; responseText contains partials data.");
			}

			else if (this.readyState == XMLHttpRequest.HEADERS_RECEIVED) {
				console.log("The method send was call. Headers and status are availiable.");
			}

			else if (this.readyState == XMLHttpRequest.OPENED) {
				console.log("The method open was call.");
			}

			else {
				console.log("The client was created. But open method was not yet call.");
			}
		}

		xhr.open("POST", "https://mockbin.com/request", true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify({value: document.getElementById("value").value}));
	}

	btnSubmit.addEventListener('click', function(e) {
		e.preventDefault();
		sendRequest();
	});