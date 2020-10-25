// Script JS

	// On crée la requête et une variable data qui va recevoir la div accueillant la réponse de la requête
	var xhr = new XMLHttpRequest();
	var data = document.getElementById('data');

	xhr.onreadystatechange = function() {

		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

			var response = JSON.parse(this.responseText);
			data.innerHTML = "<pre>" + response.current_condition.condition + "</pre>";
		}
	};

	xhr.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
	xhr.send();