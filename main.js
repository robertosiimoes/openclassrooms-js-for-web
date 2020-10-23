// Script JS

    // After loading page
    window.addEventListener("load", function(event) {


        // Exercice 1, methods to selects elements
        function selectElements() {

            // 4 ways to get Element or Elements
            let main = document.getElementById("main-content");
            let important = document.getElementsByClassName("important");
            let articles = document.getElementsByTagName("article");
            let list = document.querySelector("article > ul.important > li");

            console.log(list);
            console.log(list.nextElementSibling);
        }


        // Exercice 2, how to modify content
        function modifyContent() {
            let articleImportant = document.querySelector("article > p.important");

            // innerHTML et textContent methods
            articleImportant.innerHTML = "<pre></pre>";
            articleImportant.textContent = "I'm testing the super textContent function.";
        }


        // Exercice 3, using ClassList and previous methods above
        function manipulateClass() {

            // Adding class
            let articles = document.getElementsByTagName("article");
            let secondArticle = articles[1].firstElementChild;
            secondArticle.classList.add("important");

            // Removing class
            let listNextParagraph = document.querySelector("p#main-content + ul");
            listNextParagraph.classList.remove("important");

            // Contains
            let listElement = document.querySelector('li');
            listElement.classList.contains('the-element');

            // Toggle
            let anotherElement = document.querySelector("ul.navigation");
            anotherElement.classList.toggle("navigation");

            // Replace
            let resetImportant = document.querySelector("article > p.importanttt");
            resetImportant.classList.replace('importanttt', 'important');
        }


        // Exercice 4, changing style directly in JS
        function changeStyles() {

            let redParagraphs = document.querySelector('article > p');
            redParagraphs.style.color = "white";
            redParagraphs.style.backgroundColor = "green";
        }


        // Exercice 5, modify attributs
        function manipulateAttributs() {

            let changeLanguage = document.querySelector('html');
            console.log( changeLanguage.getAttribute("lang") ); // Return "en"
            changeLanguage.setAttribute("lang", "fr"); // Set atrribut to fr
            console.log( changeLanguage.getAttribute("lang") ); // Return "fr"

            let changeParagraph = document.querySelector('body > p');
            changeParagraph.removeAttribute("class"); // Remove the  attribut class to the first p of body element
        }


        // Exercice 6, creating Elements
        function becameCreator() {

            let newElement = document.createElement("pre"); // The element was created but not on the HTML document
            newElement.textContent = "New element created with JavaScript";

            return newElement;
        }


        // Exercice 7, adding Element create to document
        function addingElements() {

            let myElement = becameCreator();

            let containerElement = document.getElementById("my-element");
            containerElement.appendChild(myElement);
        }


        // Exercice 8, removing Elements from the document
        function removeElements() {

            let bodyElement = document.getElementById('special');
            let myElement = document.getElementById('my-element');
            bodyElement.removeChild(myElement);
        }


        // Exercice 9, replacing Elements from the document
        function replaceElements() {
            let bodyElement = document.getElementById('special');
            let oldElement = document.getElementById('my-element');
            let newElement = document.createElement('em');
            newElement.textContent = "EM Element";
            bodyElement.replaceChild(newElement, oldElement);
        }



        // Call to the function we want to use
        addingElements();
        replaceElements();
    });