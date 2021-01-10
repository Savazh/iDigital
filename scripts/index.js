//Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activeSlide";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// Sidenav ham animation

$(function () {
    $('.main-myButton').click(function () {
        $('.content').slideToggle();
    });
});


$(".selection-2").select2({
    minimumResultsForSearch: 20,
    dropdownParent: $('#dropDownSelect1')
});


//Global site tag (gtag.js) - Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-23581568-13');


  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myHeader").style.top = "0";
      } else {
          document.getElementById("myHeader").style.top = "-80pt";
      }
  }
