


/*function addCheck(){
	var addChecks = document.getElementsByClassName("fa-check-circle");
	//Pętla przechodzi po wszystkich elementach kolekcji 
	//dodaje im nasłuchiwacz zdarzenia click
	//jeśli element zostanie kliknięty to sprawdza czy posiada klase check-item
	//jeśli nie posiada to ja dodaje a jeśli posiada to ja usuwa 
	for (const check of addChecks) {
		check.addEventListener("click", function(){

			if(this.parentNode.classList.contains('check-item') === false)
			{this.parentNode.classList.add('check-item');}
			else this.parentNode.classList.remove('check-item');

		} );
	};

};*/

/*function deleteCheck(){
	var deleteChecks = document.getElementsByClassName("fa-trash-alt");
	for (var delcheck of deleteChecks) {
		delcheck.addEventListener("click", function(){

			console.log(this.parentNode);

		} );
	};
};*/

function addCheck(x){
	var iconCheck = x.firstChild; 
	iconCheck.addEventListener("click", function(){
		console.log(iconCheck);

		if(x.classList.contains('check-item') === false){
			x.classList.add('check-item');
			iconCheck.classList.remove('far');
			iconCheck.classList.add('fas');
		}
		else {
			x.classList.remove('check-item');
			iconCheck.classList.remove('fas');
			iconCheck.classList.add('far');
		}

	} );
};

function deleteItem(x){
	var iconDelete = x.lastChild; 
	iconDelete.addEventListener("click",function(){
		x.parentNode.removeChild(x);
	});

};

function editItem(x){
	var iconEdit = x.children[2]; //ikona edycji elementu
	iconEdit.addEventListener("click",function(){

		
		var textElement = x.children[1]; // element <p> - treść itemu
		//utworzenie inputa i nadanie mu atrybutów 
		var editField = document.createElement("input"); 
		editField.setAttribute("type","text");
		editField.setAttribute("name","edit-item");
		editField.setAttribute("value", textElement.textContent);
		//utworzenie ikony zakończenia edycji
		var addIcon = document.createElement("i");
		addIcon.classList.add('fas','fa-check');
		//dodanie elementu addItem przed textElement w DOM
		x.insertBefore(addIcon,textElement);
		//dodanie elementu editField przed addIcon w DOM
		x.insertBefore(editField, addIcon);
		
		iconEdit.style.display = "none";
		textElement.style.display = "none";

		addIcon.addEventListener("click", function(){
			var newText = editField.value;
			textElement.style.display = "block";
			textElement.textContent = newText;

			addIcon.parentNode.removeChild(addIcon);
			editField.parentNode.removeChild(editField);

			iconEdit.style.display = "block";

		});
		
		
	});
};

window.onload = function(){
	
	var listItem = document.querySelector("ul");
	var addItem = document.getElementById("add-item");

	//pobranie zawartości z pola input type=text, sprawdzenie czy nie jest puste
	// i dodanie nowego elementy <li>
	addItem.onclick = function(){
		var newItem = document.createElement("li");
		var textItem = document.getElementById("text-item");
		newItem.innerHTML = '<i class="far fa-check-circle"> </i>' + '<p>' + textItem.value + '</p>' + '<i class="far fa-edit"></i><i class="far fa-trash-alt"></i>';

		var message = document.getElementById('message');

		if (textItem.value === "" || textItem.value === " ") {
			message.style.display = "block";
			message.textContent = "Puste pole!";
		}
		else{
			listItem.appendChild(newItem);
			message.style.display = "none";
			addCheck(newItem);
			deleteItem(newItem);
			editItem(newItem);
		}
	};
};




