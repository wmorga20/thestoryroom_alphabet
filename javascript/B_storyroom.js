document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("A_storyroom.html");
			break;
		case 40:
			window.location.replace("C_storyroom.html");
	}
}