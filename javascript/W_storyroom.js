document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("V_storyroom.html");
			break;
		case 40:
			window.location.replace("X_storyroom.html");
	}
}