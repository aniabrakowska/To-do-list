


function addCheck(){
	var checks = document.getElementsByClassName("fa-check-circle");
	/*Pętla przechodzi po wszystkich elementach kolekcji 
	dodaje im nasłuchiwacz zdarzenia click
	jeśli element zostanie kliknięty to sprawdza czy posiada klase check-item
	jeśli nie posiada to ja dodaje a jeśli posiada to ja usuwa */
	for (var check of checks) {
		check.addEventListener("click", function(){

			if(check.parentNode.classList.contains('check-item') === false)
			check.parentNode.classList.add('check-item');
			else check.parentNode.classList.remove('check-item');

		} );
	    //check.style.color = "red";
	    console.log(check.parentNode);
	};

};
window.onload = function(){
	
	var listItem = document.querySelector("ul");
	var addItem = document.getElementById("add-item");

	//pobranie zawartości z pola input type=text, sprawdzenie czy nie jest puste
	// i dodanie nowego elementy <li>
	addItem.onclick = function(){
		var newItem = document.createElement("li");
		//newitem.classList.add("");
		var textItem = document.getElementById("text-item");
		newItem.innerHTML = '<i class="far fa-check-circle"> </i>' + '<p>' + textItem.value + '</p>' + '<div><i class="far fa-edit"></i><i class="far fa-trash-alt"></i></div>';

		var message = document.getElementById('message');

		if (textItem.value === "" || textItem.value === " ") {
			message.style.display = "block";
			message.textContent = "Puste pole!";
		}
		else{
			listItem.appendChild(newItem);
			message.style.display = "none";
			addCheck();
		}
		
	};
	
	
};




