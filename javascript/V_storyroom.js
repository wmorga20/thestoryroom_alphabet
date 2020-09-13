document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("U_storyroom.html");
			break;
		case 40:
			window.location.replace("W_storyroom.html");
	}
}