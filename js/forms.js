// Script JS

    // After loading page
    window.addEventListener("load", function(event) {

		/*-----
			Exercice : 

				Nous avons ici un formulaire et nous aimerions restituer les réponses de notre formulaire dans l'élément du dessous.

				De plus, nous voudrions afficher la position de la souris quand elle se trouve dans cet élément.

				Ecoutez les événements input sur l'élément #name afin de savoir quand le contenu du champ texte est changé. Affichez le contenu actuel dans l'élément #res-name

				Maintenant nous voulons écouter l'événement du changement de choix du genre (#gender), et afficher le résultat dans l'élément #res-gender.

				Nous souhaitons maintenant afficher les coordonnées de la souris à l'intérieur de l'élément #result dès que celle-ci passe par dessus.

				Ce que nous voulons, c'est avoir les coordonnées relatives au coin en haut à gauche de l'élément #result.

		------*/

		// Code here
		function formTraining() {

			// Variables
			let inputName = document.getElementById("name");
			let selectChoices = document.getElementById("gender");
			let result = document.getElementById("result");


			// Detect text in input name and put the result in #res-gender span
			inputName.addEventListener('change', function(event) {
				let inputText = event.target.value;
				let resultName = document.getElementById('res-name');
				resultName.textContent = inputText;
			});


			// Detect choice in select element
			selectChoices.addEventListener('change', function(event) {
				let choice = event.target.value;
				let resultGender = document.getElementById("res-gender");
				resultGender.textContent = choice;
			});


			// Detect mouse entering inside #result element
			result.addEventListener('mouseenter', function(event) {
				let x = event.offsetX;
				let y = event.offsetY;
				let mouseX = document.getElementById("mouse-x");
				let mouseY = document.getElementById("mouse-y");
				mouseX.textContent = x;
				mouseY.textContent = y;

				// if (mouseX.textContent.length == 0 && mouseY.textContent.length == 0) {
				// 	mouseX.textContent = x;
				// 	mouseY.textContent = y;
				// }
				// else {
				// 	console.log("They have actually values !");
				// }
			});
		}

		formTraining();

    });