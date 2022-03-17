function fixed()
{
    var navbar = $("#navbar");
    var active = $("#active")
    if (this.scrollY >this.innerHeight/2) {
        navbar.addClass("navbar_after");
        active.addClass("active")
      } else {
        navbar.removeClass("navbar_after");
        active.removeClass("active")
      }
}

window.addEventListener("scroll",fixed);


var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;

showSlides1();
showSlides2();
showSlides3();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
}

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 6000); // Change image every 2 seconds
}

function myFunction1() {
  document.getElementById("metode_de_studiu").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("sindroame").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("boli").classList.toggle("show");
}