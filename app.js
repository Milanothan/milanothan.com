'use strict'

var slideIndex = 1;
showSlides(slideIndex);

// controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Newsletter form 

function validateForm() {
  if (isEmpty(document.getElementById('email').value.trim())) {
  alert('Email address is required!');
  return false;
  }
  return true;
  }
  function isEmpty(str) { return (str.length === 0 || !str.trim()); }
  function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
  return isEmpty(email) || re.test(email);
  }