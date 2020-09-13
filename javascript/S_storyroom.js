document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("R_storyroom.html");
			break;
		case 40:
			window.location.replace("T_storyroom.html");
	}
}