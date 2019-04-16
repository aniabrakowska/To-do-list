
window.onload = function(){

	var listItem = document.querySelector("ul");
	var addItem = document.getElementById("add-item");

	//pobranie zawartości z pola input type=text, sprawdzenie czy nie jest puste
	// i dodanie nowego elementy <li>
	addItem.onclick = function(){
		var newItem = document.createElement("li");
		var textItem = document.getElementById("text-item");
		newItem.innerHTML = '<i class="far fa-check-circle"> </i>' + '<p>' + textItem.value + '</p>' + '<div><i class="far fa-edit"></i><i class="far fa-trash-alt"></i></div>';

		var item = document.querySelector('.item');
		var message = document.getElementById('message');

		if ((textItem.value === "") || (textItem.value === " ")) {
			message.style.display = "block";
			message.textContent = "Puste pole!";
		}
		else{
			listItem.appendChild(newItem);
			message.style.display = "none";
		}
		
		console.log(item);
		
	};

};