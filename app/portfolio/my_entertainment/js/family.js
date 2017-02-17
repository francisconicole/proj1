// Author: Nicole Francisco
// Email: franciscon@knights.ucf.edu

// Global Variables
var index_num = 0;
var timed;
var family = new Array("../images/robRelax.jpg", "../images/sabrinaFries.jpg", "../images/sabrinaLaugh.jpg", "../images/sabrinaToy.jpg", "../images/sab.png", "../images/sabrinaWagon.jpg", "../images/becca1.jpg", "../images/bobby.png", "../images/bobby1.png", "../images/bobby2.png", "../images/bobby3.png", "../images/bobby4.png", "../images/sb.png");

//Function to create slide
//--------------------------------------------------------------------------------------
function resizeImage() {
	document.getElementById("francisco").style.height = "50%";
}
//--------------------------------------------------------------------------------------
function onLoadFunction() {
	resizeImage();
}

//Functions to start, stop, next, and previous images.
//--------------------------------------------------------------------------------------
function next_image() {
	index_num++;
	
	if (index_num < family.length) {
		document.images["francisco"].src = family[index_num];
	}
	else {
		index_num = 0;
		
		document.images["francisco"].src = family[index_num];
	}
}

//--------------------------------------------------------------------------------------
function previous_image() {
	index_num-=1;

	if (index_num >= 0) {
		document.images["francisco"].src = family[index_num];
	}
	else {
		index_num = family.length - 1;
		document.images["francisco"].src = family[index_num];
	}
}
//---------------------------------------------------------------------------------------
function start_show() {
	if (index_num < family.length) {
		index_num++;
	}
	else {
		index_num = 0;
	}
	document.images["francisco"].src = family[index_num];
	timed = setTimeout('start_show()', 2000);
}
//---------------------------------------------------------------------------------------
function stop_show() {
	clearTimeout(timed);
}