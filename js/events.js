// Script JS

    // After loading page
    window.addEventListener("load", function(event) {

		let parent = document.getElementById("parent");
		let child = document.getElementById("child");
		let i = 0;
		let j = 0;

		parent.addEventListener('click', function(event) {
			let parentCount = document.getElementById("parent-count");
			i++;
			parentCount.innerHTML = i;
			const x = event.offsetX;
			const y = event.offsetY;
			console.log(event, typeof event);
			console.log(x, typeof x);
			console.log(y, typeof y);
		});

		child.addEventListener('click', function(event) {
			event.preventDefault();
			let childCount = document.getElementById("child-count");
			j++;
			childCount.innerHTML = j;
			event.stopPropagation();
			console.log(event, typeof event);
		});
    });