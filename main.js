let slideStatus = 0;

function showSlides() {
  var moses= document.getElementsByClassName("container");
  for (i = 0; i < moses.length; i++) {
    moses[i].style.display = "none"; 
  }
 
  slideStatus++;
  if (slideStatus > moses.length) {slideStatus= 1} 
  moses[slideStatus-1].style.display = "block"; 
  setTimeout(showSlides, 10000); 
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
showSlides();