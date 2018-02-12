window.onload = function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
	
	var listHeader = document.querySelector("#list-header");
	var listBody = document.querySelector("#list-item");
	var checklist = document.querySelector("#checklist");
	
	var sampleItems = ["cheddar", "beef"];
	
	function createLi(itemText) {
		var checkbox = document.createElement('input');
		checkbox.name = "name";
		checkbox.type = "checkbox";
		checkbox.value = "value";
		checkbox.id = "id";
		
		var label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(itemText));
		
		var checklist = document.querySelector(".checklist");
		
		var li = document.createElement('li');
		li.appendChild(checkbox);
		li.appendChild(document.createTextNode(itemText));
		
		checklist.appendChild(li);
	}
	
	listHeader.addEventListener("click", function() {
		sampleItems.forEach((sampleItem) => {
			console.log("Hit", sampleItem);
			createLi(sampleItem);
		});
	});
};