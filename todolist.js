
window.onload = function(){

	var listItem = document.querySelector("ul");
	var addItem = document.getElementById("add-item");

	addItem.onclick = function(){
		var newItem = document.createElement("li");
		var textItem = document.getElementById("text-item");
		newItem.innerHTML = textItem.value;

		listItem.appendChild(newItem);
		
	};
};