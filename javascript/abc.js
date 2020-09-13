
// function nextLetter(keydown) {
//}
//document.addEventListener("keydown", nextLetter(event);
//window.location.replace("https://google.com/");

//var heldDown = {};
//window.addEventListener("keydown", funciton(keyInfo))
//{heldDown[event.keyCode] = true; }, false;

//document.addEventListener("keydown", function(event){

//window.location.replace("NextLetter.html");
//});

//function nextLetter() {
 //for(var keyCode in keyHeld) {
//	 nextLetter.move(keyCode);
// }
//}

//this.move = function(keyCode) {
//	if(keyCode == 40) {
//		window.location.replace("NextLetter.html");
//	}
//}

//var keyHeld = {};

//document.addEventListener("keydown", function(keyInfo) 
//{keyHeld[event.keyCode] = true; },);


//function nextLetter(keyCode) {
//	if (keyCode == 40)
//window.location.replace("https://google.com/");
//};

document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 40:
			window.location.replace("NextLetter.html");
	}
}