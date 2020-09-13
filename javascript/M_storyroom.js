document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("L_storyroom.html");
			break;
		case 40:
			window.location.replace("N_storyroom.html");
	}
}