// Script JS

	// Storing button into variable
	// var btnAskWeather = document.getElementById('ask-weather');

	// Listening click event on that button
	// btnAskWeather.addEventListener('click', function(e) {

	// 	// Preventing the default behaviour
	// 	e.preventDefault();
		
	// 	// Creating the request
	// 	var xhr = new XMLHttpRequest();
	// 	var weatherResult = document.getElementById('weather-result');
	
	// 	// Checking the status changing
	// 	xhr.onreadystatechange = function() {
			
	// 		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
	// 			var response = JSON.parse(xhr.responseText);
	// 			weatherResult.innerHTML = response.current_condition.condition;
	// 		} else {
	// 			console.log("There is an error !");
	// 		}
	// 	}
	
	// 	// Fetching the Weather API
	// 	xhr.open('GET', 'https://www.prevision-meteo.ch/services/json/paris', true);
	// 	xhr.send();
	// });


	/*
	
	Nous souhaitons dans un premier temps valider le champ Code du formulaire.
	A chaque lettre saisie dans le champ ayant pour ID code nous voulons vérifier que la valeur du champ commence bien par CODE- grâce à une Regex que voici : /^CODE-/.
	Si la valeur commence bien par CODE- alors nous affichons dans l'élément ayant pour ID code-validation : Code valide, sinon nous affichons dans cet élément Code invalide.

	Maintenant que nous savons si notre code est valide ou non, nous voudrions griser (grâce à l'attribut disabled) le bouton de soumission (L'input de type submit ayant pour ID submit-btn) quand le code est invalide, et le dégriser quand le code est valide.

	Cela signifie que nous allons devoir ajouter un attribut disabled="true" au bouton de soumission quand le code est invalide. Et supprimer cet attribut disabled quand le code est valide (Rappelez-vous du cours sur la modification du DOM pour définir et supprimer des attributs).

	Finalement, nous avons un champ Email et nous voudrions le rendre obligatoire et obliger l'utilisateur à entrer une adresse email valide. Il faudra aussi empêcher le formulaire de se soumettre s'il n'est pas valide.

	Mais nous voudrions faire tout ça uniquement avec le HTML5, sans utiliser de code JavaScript.

	Vous pouvez changer le type du champ email plutôt que d'utiliser une Regex via pattern
	
	
	*/

	// Code here
	