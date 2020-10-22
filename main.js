// Script JS

    // After loading page
    window.addEventListener("load", function(event) {

        const loading = "Resources loaded !";


        // First exercice
        let main = document.getElementById("main-content");
        let important = document.getElementsByClassName("important");
        let articles = document.getElementsByTagName("article");
        let list = document.querySelector("article > ul.important > li");

        console.log(list);
        console.log(list.nextElementSibling);


        // Second exercice
        let articleImportant = document.querySelector("article > p.important");

        articleImportant.innerHTML = "<pre></pre>";
        articleImportant.textContent = "I'm testing the super textContent function.";

        // Resources loaded
        console.log(loading);

    });