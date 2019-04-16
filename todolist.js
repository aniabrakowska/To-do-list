
window.onload = function(){

	var listItem = document.querySelector("ul");
	var addItem = document.getElementById("add-item");

	addItem.onclick = function(){
		var newItem = document.createElement("li");
		var textItem = document.getElementById("text-item");
		newItem.innerHTML = textItem.value;

		if ((textItem.value === "") || (textItem.value === " ")) {
			var message = document.getElementById('message');
			message.style.display = "block";
			message.textContent = "Puste pole";
		}
		else{
			listItem.appendChild(newItem);
		}
		
		console.log(typeof(textItem.value));
		
	};
};