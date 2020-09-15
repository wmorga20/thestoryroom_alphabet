
// down arrow goes to next letter!//
document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 40:
			window.location.replace("B_storyroom.html");
	break;
		case 39:
		  document.getElementById("letterA").classList.add("active");
	}
}


gi