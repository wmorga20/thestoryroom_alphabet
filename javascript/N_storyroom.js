document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 38:
			window.location.replace("M_storyroom.html");
			break;
		case 40:
			window.location.replace("O_storyroom.html");
	}
}