function abcHome() {
	window.location.replace("Abc_home.html");
}

function pandJ1() {
	window.location.replace("pandj_1_1.html");
}

document.getElementById("pandjBook").onmouseover = function() {pandJay(), pandjayTitle(), pandjayTitle3()};
document.getElementById("pandjBook").onmouseout = function() {pandJay2(), pandjayTitle2(), pandjayTitle4()};

function pandJay() {
	document.getElementById("pandjFaces").style.opacity = "1";
	document.getElementById("pandjBook").style.scale = "5";
}

function pandJay2() {
	document.getElementById("pandjFaces").style.opacity = "0";
}

function pandjayTitle() {
	document.getElementById("pandJ").style.opacity = "1";
}

function pandjayTitle2() {
	document.getElementById("pandJ").style.opacity = "0";
}

function pandjayTitle3() {
	document.getElementById("description1").style.opacity = "1";
}

function pandjayTitle4() {
	document.getElementById("description1").style.opacity = "0";
}
