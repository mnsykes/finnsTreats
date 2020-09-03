function openNav() {
	document.getElementById("sideNav").style.width = "10rem";
}

function closeNav() {
	document.getElementById("sideNav").style.width = "0";
}

// Active links
function active() {
	var navArea = document.getElementsByClassName("bottomNav");
	var links = navArea.getElementsByClassName("navLink");

	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 3000);
}

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}
