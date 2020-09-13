document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("F_storyroom.html");
			break;
		case 40:
			window.location.replace("H_storyroom.html");
	}
}