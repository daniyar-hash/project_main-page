var link = document.querySelector(".write_us .button");
var popup = document.querySelector(".modal-write_us");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function(evt) {


	evt.preventDefault();
	popup.classList.add("modal-show");
	// body...
})

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	// body...
})


var mapLink = document.querySelector(".contact_map a");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close ");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	// body...
})

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	// body...
})

window.addEventListener("keydown", function(evt) {

	if (evt.keyCode ===27) {

		if (popup.classList.contains("modal-show") || mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			mapPopup.classList.remove("modal-show");
		}
	}
	// body...
})




